import React from 'react';
import { Box, useMultiStyleConfig } from '@chakra-ui/react'
import { Intent, Alignment } from '../../../common/types';

const Block = ({
  children,
  align,
  intent,
  grow = true,
  pocketLeft,
  pocketRight,
}: {
  children?: any,
  className?: string
  align?: Alignment,
  intent?: Intent,
  grow?: boolean,
  pocketLeft?: any,
  pocketRight?: any,
} ) => {

  const styles = useMultiStyleConfig('InxBlock', {
    __intent: intent,
  })

  return (
    <Box sx={styles.base}>
      
      {/** left pocket */}
      {pocketLeft && (
        <Box sx={styles.pocketLeft}>
          {pocketLeft}
        </Box>
      )}
      
      {/** contents */}
      <Box sx={styles.container}>
        {children}
      </Box>
      
      {/** right pocket */}
      {pocketRight && (
        <Box sx={styles.pocketRight}>
          {pocketRight}
        </Box>
      )}
    </Box>
  )	
}

export default Block;