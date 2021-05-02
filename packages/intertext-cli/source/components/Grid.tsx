import React from 'react';
import { Box, Text } from 'ink';
import { Intent, Space, LayoutProps } from '@intertext/engine';
import getLayoutProps from '../utils/getLayoutProps'

const Grid = ({
  children,
  gap = '4',
  cols,
  ...rest
}: LayoutProps & {
  children?: any
  gap?: Space,
  cols: number[],
}) => {

  const useChildren = Array.isArray(children)
    ? children
    : [children]
  
  // react-ink grid won't support wrapping,
  // so it needs to be simulated
  const itemCount = useChildren.length
  const colCount = cols.length;
  const rowCount = Math.ceil(itemCount / colCount)  

  // const colSum = props.cols.reduce((acc, c) => acc + c, 0)

  return (
    <Box flexGrow={1}>
      {Array.from(Array(rowCount)).map((_, rowIndex) => (
        <Box
          key={`row-${rowIndex}`}
          flexGrow={1}
          // flexShrink={0}
          // flexDirection="column"
          // width="100%"
        >
          {cols.map((colBasis, colIndex) => (
            <Box
              key={`row-${rowIndex}-col-${colIndex}`}
              // flexDirection="row"
              alignItems="flex-start"
              flexBasis={colBasis}
              flexGrow={1}
              flexShrink={0}
            >
              {useChildren[(rowIndex * colCount) + colIndex]}
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