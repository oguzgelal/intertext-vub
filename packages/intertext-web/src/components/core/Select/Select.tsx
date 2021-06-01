import React, { useState } from "react"
import { LayoutProps, getLayoutProps } from "@intertext/engine"
import { Select, useMultiStyleConfig } from "@chakra-ui/react"

const InxSelect = ({
  value,
  disabled,
  children = [],
  name,
  onChange,
  ...rest
}: LayoutProps & {
  name: string
  value?: string
  disabled?: boolean
  children?: { option: string; value: string }[]
  onChange?: (str: string) => void
}) => {
  const [_value, _valueSet] = useState(value ?? "")
  const styles = useMultiStyleConfig("InxSelect", {})

  return (
    <Select
      style={{ flexDirection: 'row', alignItems: 'center' }}
      disabled={disabled}
      name={name}
      onChange={(e: { target: { value: string } }) => {
        _valueSet(e.target.value)
        if (onChange) {
          onChange(e.target.value)
        }
      }}
      value={_value}
      sx={{
        ...styles.base,
        ...getLayoutProps(rest, {
          justifyContent: "center",
        }),
      }}
    >
      {children.map((option, index) => (
        <option key={index} value={option.value}>
          {option.option}
        </option>
      ))}
    </Select>
  )
}

export default InxSelect
