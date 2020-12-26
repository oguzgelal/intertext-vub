import { css } from '@emotion/react/macro';
import { darken, lighten } from 'polished';

type IntertextStyleNameDef = {
  name: string,
  description?: string,
  value?: string | number
}

const cls = (str: string): IntertextStyleNameDef => ({
  name: `inx__${str}`,
});

const vr = (str: string, value: string | number): IntertextStyleNameDef => ({
  name: `--inx-${str}`,
  value,
});

/**
 * Class names
 */
export const c = {
  
  /** text */
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
}

/**
 * Variable names + base theme values
 */
export const v = {
  
  /** colors */
  COLOR_PRIMARY: vr('color-primary', '#5465FF'),
  COLOR_PRIMARY_LIGHT: vr('color-primary-light', lighten(0.2, '#5465FF')),
  COLOR_PRIMARY_DARK: vr('color-primary-dark', darken(0.2, '#5465FF')),
  COLOR_SECONDARY: vr('color-secondary', '#9798FF'),
  COLOR_SECONDARY_LIGHT: vr('color-secondary-light', lighten(0.2, '#9798FF')),
  COLOR_SECONDARY_DARK: vr('color-secondary-dark', darken(0.2, '#9798FF')),
  COLOR_ERROR: vr('color-error', '#FF5A65'),
  COLOR_ERROR_LIGHT: vr('color-error-light', lighten(0.2, '#FF5A65')),
  COLOR_ERROR_DARK: vr('color-error-dark', darken(0.2, '#FF5A65')),
  COLOR_WARNING: vr('color-warning', '#FFC555'),
  COLOR_WARNING_LIGHT: vr('color-warning-light', lighten(0.2, '#FFC555')),
  COLOR_WARNING_DARK: vr('color-warning-dark', darken(0.2, '#FFC555')),
  COLOR_SUCCESS: vr('color-success', '#17C27D'),
  COLOR_SUCCESS_LIGHT: vr('color-success-light', lighten(0.2, '#17C27D')),
  COLOR_SUCCESS_DARK: vr('color-success-dark', darken(0.2, '#17C27D')),
  COLOR_INFO: vr('color-info', '#00AAFF'),
  COLOR_INFO_LIGHT: vr('color-info-light', lighten(0.2, '#00AAFF')),
  COLOR_INFO_DARK: vr('color-info-dark', darken(0.2, '#00AAFF')),

  /** colors functional */
  COLOR_TEXT: vr('color-text', '#474554'),
  COLOR_TEXT_MUTED: vr('color-text-muted', '#898698'),
  COLOR_BACKGROUND: vr('color-background', '#fff'),
  COLOR_BACKGROUND_PAPER: vr('color-background-paper', '#f7f7f8'),
  COLOR_BORDER: vr('color-border', '#E9E9EC'),

  /** font family */
  FONT_FAMILY_SANS: vr('font-family-sans', "'IBM Plex Sans', sans-serif"),
  FONT_FAMILY_SANS_CONDENSED: vr('font-family-sans-condensed', "'IBM Plex Sans Condensed', sans-serif"),
  FONT_FAMILY_HEADING: vr('font-family-heading', "'IBM Plex Sans', sans-serif"),
  FONT_FAMILY_MONO: vr('font-family-mono', "'IBM Plex Mono', monospace"),
  FONT_FAMILY_SERIF: vr('font-family-serif', "'IBM Plex Sans', sans-serif"),

  /** font weights */
  FONT_WEIGHT_DEFAULT: vr('font-weight-default', 400),
  FONT_WEIGHT_BOLD: vr('font-weight-bold', 700),
  FONT_WEIGHT_H1: vr('font-weight-h1', 700),
  FONT_WEIGHT_H2: vr('font-weight-h2', 700),
  FONT_WEIGHT_H3: vr('font-weight-h3', 700),

  /** font sizes */
  FONT_SIZE_ROOT: vr('font-size-root', '18px'),
  FONT_SIZE_DEFAULT: vr('font-size-default', '1rem'),
  FONT_SIZE_TEXT_H1: vr('font-size-text-h1', '2rem'),
  FONT_SIZE_TEXT_H2: vr('font-size-text-h2', '1.4rem'),
  FONT_SIZE_TEXT_H3: vr('font-size-text-h3', '1.2rem'),
  FONT_SIZE_TEXT_SECONDARY: vr('font-size-text-secondary', '0.7rem'),

  /** line heights */
  LINE_HEIGHT_DEFAULT: vr('line-height-default', '1.3rem'),
  LINE_HEIGHT_H1: vr('line-height-h1', '2rem'),
  LINE_HEIGHT_H2: vr('line-height-h2', '1.4rem'),
  LINE_HEIGHT_H3: vr('line-height-h3', '1.2rem'),

  /** spacing */
  SPACING_TEXT_DEFAULT: vr('spacing-text-default', '0.6rem'),
  SPACING_TEXT_H1: vr('spacing-text-h1', '1.2rem'),
  SPACING_TEXT_H2: vr('spacing-text-h2', '1rem'),
  SPACING_TEXT_H3: vr('spacing-text-h3', '0.8rem'),

}

/**
 * Construct and export base styles
 */

export const base = css`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=IBM+Plex+Sans+Condensed:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=IBM+Plex+Serif:ital@0;1&display=swap');

  :root {
    ${Object
        .values(v)
        .map(val => `${val.name}: ${val.value};`)
        .join('\n')}
  }
`;