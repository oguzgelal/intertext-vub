import React, {FC} from 'react';
import {Box, Text, useApp, useInput} from 'ink';

const App: FC<{name?: string}> = ({name = 'Stranger'}) => {
  const { exit } = useApp()
  
  useInput((input/*, key*/) => {
    if (input === 'q') {
			exit();
		}
  })

  return (
    <Box flexDirection="column">
      <Text>Hello, <Text color="green">{name}</Text></Text>
    </Box>
  )
};

export default App;
