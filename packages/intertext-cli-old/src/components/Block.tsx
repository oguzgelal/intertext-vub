import React from 'react';
import { Alignment } from '@intertext/engine'
import blessed from 'blessed';
import { render } from 'react-blessed';

const Block = ({
  align,
  children,
}: {
  align?: Alignment
  children?: any
}) => {
  return (
    <blessed-box>
      {children}
    </blessed-box>
  )	
}

Block.propTypes = {
}

export default Block;