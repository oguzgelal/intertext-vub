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
    colorScheme: intent,
    yoooooo: true
  })

  return (
    <Box sx={styles.base}>
      
      {/** left pocket */}
      {pocketLeft && (
        <Box>{pocketLeft}</Box>
      )}
      
      {/** contents */}
      <Box colorScheme={intent}>
        {children}
      </Box>
      
      {/** right pocket */}
      {pocketRight && (
        <Box>{pocketRight}</Box>
      )}
    </Box>
  )	
}

export default Block;