import React, { useState } from "react"
import { Intent, LayoutProps, getLayoutProps } from "@intertext/engine"
import { Input, useMultiStyleConfig } from "@chakra-ui/react"

const InxInput = ({
  children,
  value,
  disabled,
  intent,
  placeholder,
  type,
  name,
  onChange,
  ...rest
}: LayoutProps & {
  name: string
  value?: string
  children: any
  disabled?: boolean
  intent?: Intent
  placeholder?: string
  type?: string
  onChange?: (str: string) => void
}) => {
  const [_value, _valueSet] = useState(value ?? "")
  const styles = useMultiStyleConfig("InxInput", {
    __intent: intent,
  })

  return (
    <Input
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      type={type ?? "text"}
      onChange={(e) => {
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
      {children}
    </Input>
  )
}

export default InxInput
