import React from 'react';
import { Box, useMultiStyleConfig } from '@chakra-ui/react'
import { Intent } from '../../../types/types';

const Block = ({
  children,
  intent,
}: {
  children?: any,
  className?: string
  intent?: Intent,
}) => {

  const styles = useMultiStyleConfig('InxBlock', {
    __intent: intent,
  })

  return (
    <Box
      position={position}
      alignContent={alignContent}
      alignItems={alignItems}
      alignSelf={alignSelf}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
      flexBasis={flexBasis}
      justifyContent={justifyContent}
      direction={layoutDirection}
      
      sx={styles.base}
    >
      {children}
    </Box>
  )	
}

export default Block;