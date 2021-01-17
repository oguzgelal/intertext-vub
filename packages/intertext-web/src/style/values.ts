import { css } from '@emotion/react/macro';
import { transparentize, darken } from 'polished';

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
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}
export enum Theme {
  DARK = 'dark',
  FIRE = 'fire',
}
export enum Size {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  XSMALL = 'xsmall',
}
export enum Alignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

/**
 * Class names
 */
export const c = {

  /** complementary */

  // intents
  INTENT_DEFAULT: cls('intent_default'),
  INTENT_PRIMARY: cls('intent_primary'),
  INTENT_SECONDARY: cls('intent_secondary'),
  INTENT_SUCCESS: cls('intent_success'),
  INTENT_WARNING: cls('intent_warning'),
  INTENT_ERROR: cls('intent_error'),
  INTENT_INFO: cls('intent_info'),

  // alignments
  ALIGN_LEFT: cls('align_left'),
  ALIGN_CENTER: cls('align_center'),
  ALIGN_RIGHT: cls('align_right'),

  /** components: layout */
  
  // screen
  SCREEN: cls('screen'),

  // spacer
  SPACER: cls('spacer'),
  SPACER_XSMALL: cls('spacer_xsmall'),
  SPACER_SMALL: cls('spacer_small'),
  SPACER_MEDIUM: cls('spacer_medium'),
  SPACER_LARGE: cls('spacer_large'),

  // block
  BLOCK: cls('block'),
  BLOCK_GROW: cls('block_grow'),
  BLOCK_CONTENTS: cls('block_contents'),
  BLOCK_POCKET: cls('block_pocket'),
  BLOCK_POCKET_LEFT: cls('block_pocket_left'),
  BLOCK_POCKET_RIGHT: cls('block_pocket_right'),

  // grid
  GRID: cls('grid'),
  GRID_GAP_XSMALL: cls('grid-gap-xsmall'),
  GRID_GAP_SMALL: cls('grid-gap-small'),
  GRID_GAP_MEDIUM: cls('grid-gap-medium'),
  GRID_GAP_LARGE: cls('grid-gap-large'),
  
  // stack
  STACK: cls('stack'),
  STACK_VERTICAL: cls('stack_vertical'),
  STACK_HORIZONTAL: cls('stack_horizontal'),
  STACK_SPACE_XSMALL: cls('stack_space_xsmall'),
  STACK_SPACE_SMALL: cls('stack_space_small'),
  STACK_SPACE_MEDIUM: cls('stack_space_medium'),
  STACK_SPACE_LARGE: cls('stack_space_large'),
  
  /** components: other */

  // texts
  TEXT: cls('text'),
  TEXT_DEFAULT: cls('text_default'),
  TEXT_HEADING: cls('text_heading'),
  TEXT_MUTED: cls('text_muted'),
  TEXT_BLOCK: cls('text_block'),
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
  BUTTON_DISABLED: cls('button_disabled'),
  BUTTON_SMALL: cls('button_small'),
  BUTTON_MEDIUM: cls('button_medium'),
  BUTTON_LARGE: cls('button_large'),

}

/**
 * Variable names + base theme values
 */
export const v = {
  
  /** colors */

  COLOR_PRIMARY: vr('color-primary', '#5465FF'),
  COLOR_PRIMARY_HOVER: vr('color-primary-hover', darken(0.03, '#5465FF')),
  COLOR_PRIMARY_MUTED: vr('color-primary-muted', transparentize(0.5, '#5465FF')),
  COLOR_PRIMARY_BG: vr('color-primary-bg', transparentize(0.85, '#5465FF')),
  COLOR_PRIMARY_INVERTED: vr('color-primary-inverted', '#fff'),
  
  COLOR_SECONDARY: vr('color-secondary', '#9798FF'),
  COLOR_SECONDARY_HOVER: vr('color-secondary-hover', darken(0.03, '#9798FF')),
  COLOR_SECONDARY_MUTED: vr('color-secondary-muted', transparentize(0.5, '#9798FF')),
  COLOR_SECONDARY_BG: vr('color-secondary-bg', transparentize(0.85, '#9798FF')),
  COLOR_SECONDARY_INVERTED: vr('color-secondary-inverted', '#fff'),
  
  COLOR_ERROR: vr('color-error', '#FF5A65'),
  COLOR_ERROR_HOVER: vr('color-error-hover', darken(0.03, '#FF5A65')),
  COLOR_ERROR_MUTED: vr('color-error-muted', transparentize(0.5, '#FF5A65')),
  COLOR_ERROR_BG: vr('color-error-bg', transparentize(0.85, '#FF5A65')),
  COLOR_ERROR_INVERTED: vr('color-error-inverted', '#fff'),
  
  COLOR_WARNING: vr('color-warning', '#FFAD0A'),
  COLOR_WARNING_HOVER: vr('color-warning-hover', darken(0.03, '#FFAD0A')),
  COLOR_WARNING_MUTED: vr('color-warning-muted', transparentize(0.5, '#FFAD0A')),
  COLOR_WARNING_BG: vr('color-warning-bg', transparentize(0.85, '#FFAD0A')),
  COLOR_WARNING_INVERTED: vr('color-warning-inverted', '#fff'),
  
  COLOR_SUCCESS: vr('color-success', '#17C27D'),
  COLOR_SUCCESS_HOVER: vr('color-success-hover', darken(0.03, '#17C27D')),
  COLOR_SUCCESS_MUTED: vr('color-success-muted', transparentize(0.5, '#17C27D')),
  COLOR_SUCCESS_BG: vr('color-success-bg', transparentize(0.85, '#17C27D')),
  COLOR_SUCCESS_INVERTED: vr('color-success-inverted', '#fff'),
  
  COLOR_INFO: vr('color-info', '#00AAFF'),
  COLOR_INFO_HOVER: vr('color-info-hover', darken(0.03, '#00AAFF')),
  COLOR_INFO_MUTED: vr('color-info-muted', transparentize(0.5, '#00AAFF')),
  COLOR_INFO_BG: vr('color-info-bg', transparentize(0.85, '#00AAFF')),
  COLOR_INFO_INVERTED: vr('color-info-inverted', '#fff'),

  /** colors functional */
  
  COLOR_TEXT: vr('color-text', '#212529'),
  COLOR_TEXT_MUTED: vr('color-text-muted', transparentize(0.5, '#212529')),
  COLOR_BACKGROUND: vr('color-background', '#fff'),
  COLOR_BACKGROUND_PAPER: vr('color-background-paper', '#f8f9fa'),
  COLOR_BORDER: vr('color-border', '#e9ecef'),
  COLOR_BUTTON: vr('color-button', '#F3F5F7'),
  COLOR_BUTTON_HOVER: vr('color-button-hover', darken(0.03, '#F3F5F7')),
  COLOR_BUTTON_MUTED: vr('color-button-muted', transparentize(0.5, '#F3F5F7')),

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

  // all sizes are relative, uses `rem` units and are calculated against
  // the root value. to change the scale of everything, use `font-size-root`
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

  /** borders */

  BORDER_RADIUS: vr('border-radius', '0.2rem'),
  BORDER_FOCUS_SIZE: vr('border-focus-size', '0.15rem'),
  BORDER_FOCUS_STYLE: vr('border-focus-style', 'solid'),
  BORDER_BLOCK_SIZE: vr('border-block-size', '0.15rem'),
  BORDER_BLOCK_STYLE: vr('border-block-style', 'solid'),

  /** spacing */
  
  SPACING_SPACER_XSMALL: vr('spacing-spacer-xsmall', '0.4rem'),
  SPACING_SPACER_SMALL: vr('spacing-spacer-small', '0.6rem'),
  SPACING_SPACER_MEDIUM: vr('spacing-spacer-medium', '1.2rem'),
  SPACING_SPACER_LARGE: vr('spacing-spacer-large', '1.6rem'),
  
  SPACING_TEXT_DEFAULT: vr('spacing-text-default', '0'),
  SPACING_TEXT_H1: vr('spacing-text-h1', '2rem'),
  SPACING_TEXT_H2: vr('spacing-text-h2', '1.8rem'),
  SPACING_TEXT_H3: vr('spacing-text-h3', '1.4rem'),

  SPACING_BUTTON_HEIGHT_SMALL: vr('spacing-button-height-small', '1.2rem'),
  SPACING_BUTTON_HEIGHT_MEDIUM: vr('spacing-button-height-medium', '2.2rem'),
  SPACING_BUTTON_HEIGHT_LARGE: vr('spacing-button-height-large', '3.2rem'),
  SPACING_BUTTON_PADDING_SMALL: vr('spacing-button-padding-small', '0.5rem'),
  SPACING_BUTTON_PADDING_MEDIUM: vr('spacing-button-padding-medium', '1rem'),
  SPACING_BUTTON_PADDING_LARGE: vr('spacing-button-padding-large', '1.8rem'),

  SPACING_BLOCK_PADDING: vr('spacing-block-padding', '0.4rem'),
  SPACING_SCREEN_PADDING_TB_LARGE: vr('spacing-screen-padding-tb-large', '62px'),
  SPACING_SCREEN_PADDING_LR_LARGE: vr('spacing-screen-padding-lr-large', '222px'),
  SPACING_SCREEN_PADDING_TB_MEDIUM: vr('spacing-screen-padding-tb-medium', '42px'),
  SPACING_SCREEN_PADDING_LR_MEDIUM: vr('spacing-screen-padding-lr-medium', '102px'),
  SPACING_SCREEN_PADDING_TB_SMALL: vr('spacing-screen-padding-tb-small', '12px'),
  SPACING_SCREEN_PADDING_LR_SMALL: vr('spacing-screen-padding-lr-small', '12px'),

}
