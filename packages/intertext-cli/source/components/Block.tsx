import React from 'react';
import { Box } from 'ink'
import { Alignment, Intent } from '@intertext/engine';

const Block = (props: {
  children?: any,
  className?: string
  align?: Alignment,
  intent?: Intent,
  grow?: boolean,
  pocketLeft?: any,
  pocketRight?: any,
}) => {

  let borderStyle: "round" | "single" | "double" | "bold" | "singleDouble" | "doubleSingle" | "classic" | undefined;
  let borderColor: string | undefined;

  if (!!props.intent && props.intent !== Intent.DEFAULT) {
    borderStyle = 'round'
    borderColor = '#00AAFF'
  }

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      flexGrow={props.grow ? 1 : 0}
    >
      {props.pocketLeft && <Box paddingRight={1}>{props.pocketLeft}</Box>}
      <Box
        paddingX={1}
        paddingY={0}
        borderStyle={borderStyle}
        borderColor={borderColor}
        flexDirection="column"
        flexGrow={props.grow ? 1 : 0}
      >
        {props.children}
      </Box>
      {props.pocketRight && <Box paddingLeft={1}>{props.pocketRight}</Box>}
    </Box>
  )	
}

Block.defaultProps = {
  grow: true
}

export default Block;