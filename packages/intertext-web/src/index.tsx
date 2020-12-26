import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Global, ThemeProvider } from '@emotion/react/macro';
import reportWebVitals from 'reportWebVitals';
import theme, { global } from 'style/theme';
import baseTheme from 'style/themes/base';
import darkTheme from 'style/themes/dark';

import App from 'App';

const ThemeSwitcher = () => {
  const [ theme, themeSet ] = useState('light');
  console.log('baseTheme', baseTheme);
  return (
    <>
      <Global styles={[
        global,
        baseTheme,
        theme === 'dark' && darkTheme,
      ].filter(Boolean)} />
      <button onClick={() => themeSet('light')}>light</button>
      <button onClick={() => themeSet('dark')}>dark</button>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <ThemeSwitcher />
    </ThemeProvider>
  </React.StrictMode>
, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
