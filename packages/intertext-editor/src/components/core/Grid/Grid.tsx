import React from 'react';
import { Grid, useMultiStyleConfig } from '@chakra-ui/react'
import { Space, LayoutProps, getLayoutProps } from '@intertext/engine'

const InxGrid = ({
  children,
  gap = '4',
  cols,
  ...rest
}: LayoutProps & {
  children?: any
  gap?: Space,
  cols: number[],
}) => {

  const styles = useMultiStyleConfig('InxGrid', {})

  return (
    <Grid
      sx={{
        ...styles.base,
        ...getLayoutProps(rest),
      }}
      gridColumnGap={gap}
      gridRowGap={gap}
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