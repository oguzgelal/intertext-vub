import React from 'react';
import blessed from 'blessed';
import { render } from 'react-blessed';

const App = () => {
  return <blessed-box>Hello World!</blessed-box>;
};

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Developer Dashboard',
});

screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

render(<App />, screen);