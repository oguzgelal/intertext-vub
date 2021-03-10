import React from 'react';
import { Stack, useMultiStyleConfig } from '@chakra-ui/react'
import { Size } from '../../../common/types';

const InxStack = ({
  children,
  gap = Size.XSMALL,
  vertical,
}: {
  children: any
  gap?: Size
  vertical?: boolean
}) => {

  const styles = useMultiStyleConfig('InxStack', {
    __gap: gap
  })

  return (
    <Stack
      sx={styles.base}
      direction={vertical ? "column" : "row"}
    >
      {children}
    </Stack>
  )	
}

export default InxStack;