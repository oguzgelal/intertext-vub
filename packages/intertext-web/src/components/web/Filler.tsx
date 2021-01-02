import React from 'react';
import { css } from '@emotion/css';


const Filler = () => (
  <div
    className={css`
      width: 100%;
      min-width: 50px;
      height: 40px;
      background-color: #bde0fe;
      border-radius: 4px;
      opacity: 0.5;
      display: flex;
      align-items: center;
      justify-items: center;
    `}
  />
)	

export default Filler;