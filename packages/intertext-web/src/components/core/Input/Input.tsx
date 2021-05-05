import React from "react"
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
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}) => {
  const styles = useMultiStyleConfig("InxInput", {
    __intent: intent,
  })

  return (
    <Input
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      type={type ?? "text"}
      onChange={onChange}
      value={value}
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
