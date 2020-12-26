/**
 * This is the base theme, some or all of the variables
 * can be overriden to apply a custom theme.
 */

import { css } from '@emotion/react/macro';
import { darken, lighten } from 'polished';

export default css`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=IBM+Plex+Sans+Condensed:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=IBM+Plex+Serif:ital@0;1&display=swap');

  :root {

    /** colors */
    --inx-color-primary: #5465FF;
    --inx-color-primary-light: ${lighten(0.2, '#5465FF')};
    --inx-color-primary-dark: ${darken(0.2, '#5465FF')};
    --inx-color-secondary: #9798FF;
    --inx-color-secondary-light: ${lighten(0.2, '#9798FF')};
    --inx-color-secondary-dark: ${darken(0.2, '#9798FF')};
    --inx-color-error: #FF5A65;
    --inx-color-error-light: ${lighten(0.2, '#FF5A65')};
    --inx-color-error-dark: ${darken(0.2, '#FF5A65')};
    --inx-color-warning: #FFC555;
    --inx-color-warning-light: ${lighten(0.2, '#FFC555')};
    --inx-color-warning-dark: ${darken(0.2, '#FFC555')};
    --inx-color-success: #17C27D;
    --inx-color-success-light: ${lighten(0.2, '#17C27D')};
    --inx-color-success-dark: ${darken(0.2, '#17C27D')};
    --inx-color-info: #00AAFF;
    --inx-color-info-light: ${lighten(0.2, '#00AAFF')};
    --inx-color-info-dark: ${darken(0.2, '#00AAFF')};
    
    /** colors functional */
    --inx-color-text: #474554;
    --inx-color-text-muted: #898698;
    --inx-color-background: #fff;
    --inx-color-background-paper: #f7f7f8;
    --inx-color-border: #E9E9EC;

    /** font family */
    --inx-font-family-sans: 'IBM Plex Sans', sans-serif;
    --inx-font-family-sans-condensed: 'IBM Plex Sans Condensed', sans-serif;
    --inx-font-family-heading: 'IBM Plex Sans', sans-serif;
    --inx-font-family-mono: 'IBM Plex Mono', monospace;
    --inx-font-family-serif: 'IBM Plex Sans', sans-serif;

    /** font weights */
    --inx-font-weight-default: 400;
    --inx-font-weight-bold: 700;
    --inx-font-weight-h1: 700;
    --inx-font-weight-h2: 700;
    --inx-font-weight-h3: 700;

    /** font sizes */
    --inx-font-size-root: 18px;
    --inx-font-size-default: 1rem;
    --inx-font-size-text-h1: 2rem;
    --inx-font-size-text-h2: 1.4rem;
    --inx-font-size-text-h3: 1.2rem;
    --inx-font-size-text-secondary: 0.7rem;

    /** line heights */
    --inx-line-height-default: 1.3rem;
    --inx-line-height-h1: 2rem;
    --inx-line-height-h2: 1.4rem;
    --inx-line-height-h3: 1.2rem;

    /** spacing */
    --inx-spacing-text-default: 0.6rem;
    --inx-spacing-text-h1: 1.2rem;
    --inx-spacing-text-h2: 1rem;
    --inx-spacing-text-h3: 0.8rem;
  }
`;
