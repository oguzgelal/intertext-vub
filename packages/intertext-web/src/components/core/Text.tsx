import React from 'react';
import cc from 'classnames';
import { v, c } from 'style/values';
import { Global, css } from '@emotion/react/macro';
import type { Intent } from '../../style/values';
import { attachIntentClasses, applyIntentStyles } from '../../style/utils/intent'

const styles = css`

  .${c.TEXT.name} {
    -webkit-font-smoothing: antialiased;
  }

  /** default styles */
  .${c.TEXT_DEFAULT.name} {
    color: var(${v.COLOR_TEXT.name});
    font-family: var(${v.FONT_FAMILY_DEFAULT.name});
    font-weight: var(${v.FONT_WEIGHT_DEFAULT.name});
    line-height: var(${v.LINE_HEIGHT_DEFAULT.name});
    font-size: var(${v.FONT_SIZE_DEFAULT.name});
    margin-bottom: var(${v.SPACING_TEXT_DEFAULT.name});
    &:last-child {
      margin-bottom: 0;
    }
  }

  /** heading styles */
  .${c.TEXT_HEADING.name} {
    display: block;
    color: var(${v.COLOR_TEXT.name});
    font-family: var(${v.FONT_FAMILY_DEFAULT.name});
    &:last-child {
      margin-bottom: 0;
    }
  }

  /** muted styles */
  .${c.TEXT_MUTED.name} {
    color: var(${v.COLOR_TEXT_MUTED.name});    

    & > .${c.TEXT.name} {
      color: var(${v.COLOR_TEXT_MUTED.name});
    }
  }

  /** intent styles */
  ${applyIntentStyles(({ vColor, vColorMuted }) => css`
    color: var(${vColor});
    
    & > .${c.TEXT.name} {
      color: var(${vColor});
    }

    .${c.TEXT_MUTED.name} {
      color: var(${vColorMuted});
      & > .${c.TEXT.name} {
        color: var(${vColorMuted});
      }
    }
  `)}

  .${c.TEXT_H1.name} {
    font-size: var(${v.FONT_SIZE_TEXT_H1.name});
    font-weight: var(${v.FONT_WEIGHT_H1.name});
    line-height: var(${v.LINE_HEIGHT_H1.name});
    margin-bottom: var(${v.SPACING_TEXT_H1.name});
  }
  .${c.TEXT_H2.name} {
    font-size: var(${v.FONT_SIZE_TEXT_H2.name});
    font-weight: var(${v.FONT_WEIGHT_H2.name});
    line-height: var(${v.LINE_HEIGHT_H2.name});
    margin-bottom: var(${v.SPACING_TEXT_H2.name});
  }
  .${c.TEXT_H3.name} {
    font-size: var(${v.FONT_SIZE_TEXT_H3.name});
    font-weight: var(${v.FONT_WEIGHT_H3.name});
    line-height: var(${v.LINE_HEIGHT_H3.name});
    margin-bottom: var(${v.SPACING_TEXT_H3.name});
  }
  .${c.TEXT_P.name} {
    display: block;
  }
  .${c.TEXT_B.name} {
    font-weight: var(${v.FONT_WEIGHT_BOLD.name});
  }
  .${c.TEXT_I.name} {
    text-decoration: italic;
  }
  .${c.TEXT_U.name} {
    text-decoration: underline;
  }
`;

const Text = ({
  children,
  muted,
  intent,
  p,
  h1,
  h2,
  h3,
  b,
  i,
  u,
}: {
  children: any,
  muted?: boolean,
  intent?: Intent,
  p?: boolean,
  h?: boolean,
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  b?: boolean,
  i?: boolean,
  u?: boolean,
}) => {

  const heading: boolean = !!(h1 || h2 || h3);

  return (
    <>
      <Global styles={styles} />
      <span
        className={cc({
          [c.TEXT.name]: true,
          [c.TEXT_DEFAULT.name]: !heading,
          [c.TEXT_HEADING.name]: heading,
          [c.TEXT_MUTED.name]: muted,
          [c.TEXT_P.name]: p,
          [c.TEXT_H1.name]: h1,
          [c.TEXT_H2.name]: h2,
          [c.TEXT_H3.name]: h3,
          [c.TEXT_B.name]: b,
          [c.TEXT_I.name]: i,
          [c.TEXT_U.name]: u,
          ...attachIntentClasses(intent),
        })}
      >
        {children}
      </span>
    </>
  )	
}

export default Text;