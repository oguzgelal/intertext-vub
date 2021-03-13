import React from 'react';
import { Grid, useMultiStyleConfig } from '@chakra-ui/react'
import { Space } from '../../../types/space';

const InxGrid = ({
  children,
  gap = Size.XSMALL,
  cols,
}: {
  children?: any
  gap?: Size,
  cols: number[],
}) => {

  const styles = useMultiStyleConfig('InxGrid', {})

  return (
    <Grid
      sx={styles.base}
      templateColumns={{
        base: '1fr',
        md: cols.map(c => `${c}fr`).join(' '),
      }}
    >
      {children}
    </Grid>
  )	
}

export default InxGrid;