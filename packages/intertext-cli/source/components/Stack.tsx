import React from 'react';
// import { Size } from '@intertext/engine';
import { Box } from 'ink';

const Stack = (props: {
  children?: any,
  // size?: Size,
  vertical?: boolean,
}) => {

  return (
    <Box
      flexGrow={1}
      flexDirection={props.vertical ? 'column' : 'row'}
    >
      {props.children}
    </Box>
  )	
}

Stack.propTypes = {
}

export default Stack;