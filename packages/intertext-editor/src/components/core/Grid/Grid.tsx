import React from 'react';
import { Grid, useMultiStyleConfig } from '@chakra-ui/react'
import { Size } from '../../../common/types';

const InxGrid = ({
  children,
  gap = Size.XSMALL,
  cols,
}: {
  children?: any
  gap?: Size,
  cols: number[],
}) => {

  const styles = useMultiStyleConfig('InxGrid', {
    __gap: gap
  })

  return (
    <Grid
      sx={styles.base}
      templateColumns={cols.map(c => `${c}fr`).join(' ')}
    >
      {children}
    </Grid>
  )	
}

export default InxGrid;