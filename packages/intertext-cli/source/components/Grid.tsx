import React from 'react';
import { Box, Text } from 'ink';

const Grid = (props: {
  cols: number[],
  children?: any
}) => {

  const children = Array.isArray(props.children)
    ? props.children
    : [props.children]
  
  // react-ink grid won't support wrapping,
  // so it needs to be simulated
  const itemCount = children.length
  const colCount = props.cols.length;
  const rowCount = Math.ceil(itemCount / colCount)  

  // const colSum = props.cols.reduce((acc, c) => acc + c, 0)

  return (
    <Box flexGrow={1}>
      {Array.from(Array(rowCount)).map((_, rowIndex) => (
        <Box
          key={`row-${rowIndex}`}
          flexGrow={1}
          flexDirection="column"
          // width="100%"
        >
          {props.cols.map((colBasis, colIndex) => (
            <Box
              key={`row-${rowIndex}-col-${colIndex}`}
              alignItems="flex-start"
              flexBasis={colBasis}
              // flexGrow={1}
              // flexShrink={0}
            >
              {children[(rowIndex * colCount) + colIndex]}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  )	
}

Grid.propTypes = {
}

export default Grid;