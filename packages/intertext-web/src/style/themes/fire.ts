import { css } from '@emotion/react/macro';

export default css`
  
  @import url('https://fonts.googleapis.com/css2?family=Redressed&display=swap');

  :root {

    --inx-font-family: 'Redressed', cursive;
    --inx-font-size-root: 20px;

    --inx-color-background: #370617;
    --inx-color-background-paper: #1b0000;
    --inx-color-text: #e9ecef;
    --inx-color-text-muted: #adb5bd;
    --inx-color-border: #2d0000;
    --inx-color-button: #2d0000;
    --inx-color-button-hover: #280000;
    --inx-color-button-muted: #240000;
    
    --inx-border-radius: 0;
    --inx-border-focus-size: 4px;
    --inx-border-focus-style: dashed;
    --inx-border-block-size: 4px;
    --inx-border-block-style: dashed;

  }

  .inx__text_heading.inx__intent_default {
    text-shadow: 0px -2px 4px #fff,
                 0px -2px 10px #FF3,
                 0px -10px 20px #F90,
                 0px -20px 40px #C33;
  }
`;
