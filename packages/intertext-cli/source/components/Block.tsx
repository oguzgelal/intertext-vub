import React from 'react';
import { Box } from 'ink'
import { Alignment, Intent } from '@intertext/engine';

const Block = ({
  children,
  // align,
  intent,
  // grow = true,
  // pocketLeft,
  // pocketRight,
}: {
  children?: any,
  className?: string
  align?: Alignment,
  intent?: Intent,
  grow?: boolean,
  pocketLeft?: any,
  pocketRight?: any,
}) => {

  let paddingX: number | undefined = 1;
  let paddingY: number | undefined;
  let borderStyle: "round" | "single" | "double" | "bold" | "singleDouble" | "doubleSingle" | "classic" | undefined;
  let borderColor: string | undefined;

  if (!!intent && intent !== Intent.DEFAULT) {
    paddingY = 1
    borderStyle = 'round'
    borderColor = '#00AAFF'
  }

  return (
    <Box
      paddingX={paddingX}
      paddingY={paddingY}
      borderStyle={borderStyle}
      borderColor={borderColor}
    >
      {children}
    </Box>
  )	
}

Block.propTypes = {
}

export default Block;