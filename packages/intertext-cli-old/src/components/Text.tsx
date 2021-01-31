import React from 'react';

const Text = ({
  children,
}: {
  children?: any
}) => {
  return (
    <blessed-box>
      {children}
    </blessed-box>
  )	
}

Text.propTypes = {
}

export default Text;