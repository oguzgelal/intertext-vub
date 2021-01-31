import React from 'react';
import blessed from 'blessed';
import { render } from 'react-blessed';
// import Stage from './Stage';

const App = () => {
  // return <Stage />;
  return (
    <blessed-layout layout="inline">
      <blessed-box>1</blessed-box>
      <blessed-box>2</blessed-box>
      <blessed-box>3</blessed-box>
      <blessed-box>4</blessed-box>
      <blessed-box>5</blessed-box>
    </blessed-layout>
  )
};

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Intertext CLI',
});

screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

render(<App />, screen);
