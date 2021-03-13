import React from 'react';
import { Box, useMultiStyleConfig } from '@chakra-ui/react'
import { Intent, Alignment } from '../../../common/types';

const Block = ({
  children,
  align,
  intent,
  grow = true,
}: {
  children?: any,
  className?: string
  align?: Alignment,
  intent?: Intent,
  grow?: boolean,
} ) => {

  const styles = useMultiStyleConfig('InxBlock', {
    __intent: intent,
    __block_grow: grow,
  })

  return (
    <Box sx={styles.base}>
      {children}
    </Box>
  )	
}

export default Block;