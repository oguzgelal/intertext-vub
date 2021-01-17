import { css } from '@emotion/react/macro';
import { v } from 'style/values';

import { styles as blockStyles } from 'components/core/Layout/Block';
import { styles as gridStyles } from 'components/core/Layout/Grid';
import { styles as screenStyles } from 'components/core/Layout/Screen';
import { styles as spacerStyles } from 'components/core/Layout/Spacer';
import { styles as stackStyles } from 'components/core/Layout/Stack';
import { styles as buttonStyles } from 'components/core/Button';
import { styles as textStyles } from 'components/core/Text';

/**
 * Compose global styles from each component
 */
export const global = css`
  ${blockStyles}
  ${gridStyles}
  ${screenStyles}
  ${spacerStyles}
  ${stackStyles}
  ${buttonStyles}
  ${textStyles}
`

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
    background-color: var(${v.COLOR_BACKGROUND.name});
    color: var(${v.COLOR_TEXT.name});
    font-size: var(${v.FONT_SIZE_ROOT.name});
    font-family: var(${v.FONT_FAMILY.name});
    font-weight: var(${v.FONT_WEIGHT_DEFAULT.name});
    line-height: var(${v.LINE_HEIGHT_DEFAULT.name});
  }

  html, body, * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
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
