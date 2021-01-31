#!/usr/bin/env node
import React from 'react';
import { render, useApp, useInput } from 'ink';
import Stage from './Stage';

const App = () => {
  const { exit } = useApp()
  
  useInput((input/*, key*/) => {
    if (input === 'q') {
			exit();
		}
  })

  return (
    <Stage />
  )
};

render(<App />)