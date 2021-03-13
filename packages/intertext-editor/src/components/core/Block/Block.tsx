import React from 'react';
import { Box, useMultiStyleConfig } from '@chakra-ui/react'
import {
  Intent,
  Position,
  AlignContent,
  AlignItems,
  AlignSelf,
  FlexDirection,
  FlexWrap,
  FlexGrow,
  FlexShrink,
  FlexBasis,
  JustifyContent,
  LayoutDirection,
} from '../../../common/types';

const Block = ({
  children,
  intent,
  
  position = 'relative',
  alignContent = 'flex-start',
  alignItems = 'stretch',
  alignSelf = 'stretch',
  flexDirection = 'row',
  flexWrap = 'nowrap',
  flexGrow = 0,
  flexShrink = 1,
  flexBasis = 'auto',
  justifyContent = 'flex-start',
  layoutDirection = 'ltr',
}: {
  children?: any,
  className?: string
  intent?: Intent,
  
  position?: Position,
  alignContent?: AlignContent
  alignItems?: AlignItems
  alignSelf?: AlignSelf
  flexDirection?: FlexDirection
  flexWrap?: FlexWrap
  flexGrow?: FlexGrow
  flexShrink?: FlexShrink
  flexBasis?: FlexBasis
  justifyContent?: JustifyContent
  layoutDirection?: LayoutDirection
} ) => {

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
      
      sx={styles.base}
    >
      {children}
    </Box>
  )	
}

export default Block;