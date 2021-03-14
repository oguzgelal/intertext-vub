import React from 'react';
import { Box, useMultiStyleConfig } from '@chakra-ui/react'
import { Intent, LayoutProps, getLayoutProps } from '@intertext/engine'

const Block = ({
  children,
  intent,
  ...rest
}: LayoutProps & {
  children?: any,
  className?: string
  intent?: Intent
}) => {

  const styles = useMultiStyleConfig('InxBlock', {
    __intent: intent,
  })

  return (
    <Box
      sx={{
        ...styles.base,
        ...getLayoutProps(rest),
      }}
    >
      {children}
    </Box>
  )	
}

export default Block;