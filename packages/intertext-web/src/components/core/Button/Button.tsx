import React from 'react';
import { Intent, LayoutProps, getLayoutProps } from '@intertext/engine'
import {
  Button,
  useMultiStyleConfig
} from '@chakra-ui/react'

const InxButton = ({
  children,
  disabled,
  intent,
  onClick,
  ...rest
}: LayoutProps & {
  children: any,
  disabled?: boolean,
  intent?: Intent
  onClick: () => unknown
}) => {

  const styles = useMultiStyleConfig('InxButton', {
    __intent: intent
  })

  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      sx={{
        ...styles.base,
        ...getLayoutProps(rest, {
          justifyContent: 'center'
        }),
      }}
    >
      {children}
    </Button>
  )	
}

export default InxButton;