import React from 'react';
import { Box } from 'ink'
// import { Alignment } from '@intertext/engine';

const Block = ({
  // align,
  children,
}: {
  // align?: Alignment
  children?: any
}) => {
  return (
    <Box>
      {children}
    </Box>
  )	
}

Block.propTypes = {
}

export default Block;