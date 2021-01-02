import React from 'react';
import { css } from '@emotion/css';


const Filler = ({ children } : { children?: any }) => (
  <div
    className={css`
      width: 100%;
      height: 100%;
      min-width: 50px;
      min-height: 40px;
      background-color: rgba(162, 210, 255, 0.25);
      border: 2px solid #a2d2ff;
      border-radius: 4px;
    `}
  >
    {children}
  </div>
)	

export default Filler;