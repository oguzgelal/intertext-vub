import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react/macro';
import reportWebVitals from 'reportWebVitals';
import { base, global } from 'style';

import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={[ base, global ]} />
    <App />
  </React.StrictMode>
, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
