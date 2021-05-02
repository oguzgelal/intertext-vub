// @ts-nocheck
import React from 'react';
import { Box } from 'ink'
import { Intent, LayoutProps } from '@intertext/engine';
import getLayoutProps from '../utils/getLayoutProps'

const Block = ({
  children,
  intent,
  ...rest
}: LayoutProps & {
  children?: any,
  className?: string
  intent?: Intent
}) => {

  let borderStyle: "round" | "single" | "double" | "bold" | "singleDouble" | "doubleSingle" | "classic" | undefined;
  let borderColor: string | undefined;

  if (intent) {
    borderStyle = 'round'
    borderColor = '#00AAFF'
  }

  return (
    <Box
      borderStyle={borderStyle}
      borderColor={borderColor}
      flexDirection="column"
      {...getLayoutProps(rest)}
    >
      {children}
    </Box>
  )	
}

Block.defaultProps = {
  grow: true
}

export default Block;