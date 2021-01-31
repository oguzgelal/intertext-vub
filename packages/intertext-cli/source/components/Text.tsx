import React from 'react';
import { Text as InkText } from 'ink'

const Text = ({
  children,
}: {
  children?: any
}) => {
  return (
    <InkText>
      {children}
    </InkText>
  )	
}

Text.propTypes = {
}

export default Text;