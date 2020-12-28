import { css } from '@emotion/react/macro';
import { transparentize, darken, lighten } from 'polished';

type IntertextStyleNameDef = {
  name: string,
  description?: string,
  value?: string | number
}

// Create class name
const cls = (str: string): IntertextStyleNameDef => ({
  name: `inx__${str}`,
});

// Create variable name
const vr = (str: string, value: string | number): IntertextStyleNameDef => ({
  name: `--inx-${str}`,
  value,
});

/**
 * Types
 */
export enum Intent {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}
export enum Theme {
  DARK = 'dark'
}

/**
 * Class names
 */
export const c = {

  // intents:
  // these class names are complementary, gets attached to the
  // rest of the class names to give the element an intent
  INTENT_SUCCESS: cls('intent_success'),
  INTENT_WARNING: cls('intent_warning'),
  INTENT_ERROR: cls('intent_error'),
  INTENT_INFO: cls('intent_info'),

  // texts:
  TEXT: cls('text'),
  TEXT_DEFAULT: cls('text_default'),
  TEXT_HEADING: cls('text_heading'),
  TEXT_MUTED: cls('text_muted'),
  TEXT_P: cls('text_p'),
  TEXT_H1: cls('text_h1'),
  TEXT_H2: cls('text_h2'),
  TEXT_H3: cls('text_h3'),
  TEXT_B: cls('text_b'),
  TEXT_I: cls('text_i'),
  TEXT_U: cls('text_u'),

  // button
  BUTTON: cls('button'),
  BUTTON_FILL: cls('button_fill'),
}

/**
 * Variable names + base theme values
 */
export const v = {
  
  /** colors */
  
  COLOR_PRIMARY: vr('color-primary', '#5465FF'),
  COLOR_PRIMARY_LIGHT: vr('color-primary-light', lighten(0.2, '#5465FF')),
  COLOR_PRIMARY_DARK: vr('color-primary-dark', darken(0.2, '#5465FF')),
  COLOR_PRIMARY_MUTED: vr('color-primary-muted', transparentize(0.5, '#5465FF')),
  
  COLOR_SECONDARY: vr('color-secondary', '#9798FF'),
  COLOR_SECONDARY_LIGHT: vr('color-secondary-light', lighten(0.2, '#9798FF')),
  COLOR_SECONDARY_DARK: vr('color-secondary-dark', darken(0.2, '#9798FF')),
  COLOR_SECONDARY_MUTED: vr('color-secondary-muted', transparentize(0.5, '#9798FF')),
  
  COLOR_ERROR: vr('color-error', '#FF5A65'),
  COLOR_ERROR_LIGHT: vr('color-error-light', lighten(0.2, '#FF5A65')),
  COLOR_ERROR_DARK: vr('color-error-dark', darken(0.2, '#FF5A65')),
  COLOR_ERROR_MUTED: vr('color-error-muted', transparentize(0.5, '#FF5A65')),
  
  COLOR_WARNING: vr('color-warning', '#FFC555'),
  COLOR_WARNING_LIGHT: vr('color-warning-light', lighten(0.2, '#FFC555')),
  COLOR_WARNING_DARK: vr('color-warning-dark', darken(0.2, '#FFC555')),
  COLOR_WARNING_MUTED: vr('color-warning-muted', transparentize(0.5, '#FFC555')),
  
  COLOR_SUCCESS: vr('color-success', '#17C27D'),
  COLOR_SUCCESS_LIGHT: vr('color-success-light', lighten(0.2, '#17C27D')),
  COLOR_SUCCESS_DARK: vr('color-success-dark', darken(0.2, '#17C27D')),
  COLOR_SUCCESS_MUTED: vr('color-success-muted', transparentize(0.5, '#17C27D')),
  
  COLOR_INFO: vr('color-info', '#00AAFF'),
  COLOR_INFO_LIGHT: vr('color-info-light', lighten(0.2, '#00AAFF')),
  COLOR_INFO_DARK: vr('color-info-dark', darken(0.2, '#00AAFF')),
  COLOR_INFO_MUTED: vr('color-info-muted', transparentize(0.5, '#00AAFF')),

  /** colors functional */
  
  COLOR_TEXT: vr('color-text', '#212529'),
  COLOR_TEXT_MUTED: vr('color-text-muted', transparentize(0.5, '#212529')),
  COLOR_BACKGROUND: vr('color-background', '#fff'),
  COLOR_BACKGROUND_PAPER: vr('color-background-paper', '#f8f9fa'),
  COLOR_BORDER: vr('color-border', '#e9ecef'),

  /** font family */

  FONT_FAMILY: vr('font-family', `-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji`),
  FONT_FAMILY_MONO: vr('font-family-mono', `SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace`),

  /** font weights */
  
  FONT_WEIGHT_DEFAULT: vr('font-weight-default', 400),
  FONT_WEIGHT_BOLD: vr('font-weight-bold', 700),
  FONT_WEIGHT_H1: vr('font-weight-h1', 700),
  FONT_WEIGHT_H2: vr('font-weight-h2', 700),
  FONT_WEIGHT_H3: vr('font-weight-h3', 700),

  /** font sizes */
  
  FONT_SIZE_ROOT: vr('font-size-root', '16px'),
  FONT_SIZE_DEFAULT: vr('font-size-default', '1rem'),
  FONT_SIZE_TEXT_H1: vr('font-size-text-h1', '2.8rem'),
  FONT_SIZE_TEXT_H2: vr('font-size-text-h2', '2rem'),
  FONT_SIZE_TEXT_H3: vr('font-size-text-h3', '1.2rem'),
  FONT_SIZE_TEXT_SECONDARY: vr('font-size-text-secondary', '0.7rem'),

  /** line heights */
  
  LINE_HEIGHT_DEFAULT: vr('line-height-default', '1.4rem'),
  LINE_HEIGHT_H1: vr('line-height-h1', '2rem'),
  LINE_HEIGHT_H2: vr('line-height-h2', '1.8rem'),
  LINE_HEIGHT_H3: vr('line-height-h3', '1.6rem'),

  /** spacing */
  
  SPACING_TEXT_DEFAULT: vr('spacing-text-default', '0.6rem'),
  SPACING_TEXT_H1: vr('spacing-text-h1', '1.6rem'),
  SPACING_TEXT_H2: vr('spacing-text-h2', '1rem'),
  SPACING_TEXT_H3: vr('spacing-text-h3', '0.8rem'),

}

/**
 * Construct and export base styles
 */
export const base = css`
  
  /** Construct css variables */
  :root {
    ${Object
        .values(v)
        .map(val => `${val.name}: ${val.value};`)
        .join('\n')}
  }

  /**
   * Base global styles
   */

  html, body, #root {
    width: 100%;
    height: 100%;
    font-size: var(${v.FONT_SIZE_ROOT.name});
    background-color: var(${v.COLOR_BACKGROUND.name});
  }

  html, body, * {
    box-sizing: border-box;
  }

  /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;