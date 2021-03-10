import React from 'react';
import { Grid, useMultiStyleConfig } from '@chakra-ui/react'
import { Size } from '../../../common/types';

const InxGrid = ({
  cols,
  gap = Size.XSMALL,
  children,
}: {
  cols: number[],
  gap?: Size,
  children?: any
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