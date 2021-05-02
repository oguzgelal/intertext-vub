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
  ...rest
}: LayoutProps & {
  children: any,
  disabled?: boolean,
  intent?: Intent
}) => {

  const styles = useMultiStyleConfig('InxButton', {
    __intent: intent
  })

  return (
    <Button
      disabled={disabled}
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