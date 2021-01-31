#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import App from './ui';
// import meow from 'meow';
// import FullScreen from './FullScreen'

/*
const cli = meow(`
  Usage
    $ intertext-cli

  Options
    --name  Your name

  Examples
    $ intertext-cli --name=Jane
    Hello, Jane
`, {
  flags: {
    name: {
      type: 'string'
    }
  }
});
*/

/*
render(
  <FullScreen>
    <App />
  </FullScreen>
)
*/

render(<App />)