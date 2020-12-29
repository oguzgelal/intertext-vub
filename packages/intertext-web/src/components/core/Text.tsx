import React from 'react';
import cc from 'classnames';
import { v, c } from 'style/values';
import { Global, css } from '@emotion/react/macro';
import { Alignment, Intent } from '../../style/values';
import { attachIntentClasses, applyIntentStyles } from '../../style/utils/intent';
import { attachAlignmentClasses } from '../../style/utils/alignment';

const styles = css`

  .${c.TEXT.name} {
    -webkit-font-smoothing: antialiased;
    color: var(${v.COLOR_TEXT.name});

    /** muted styles */
    &.${c.TEXT_MUTED.name} {
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

      &.${c.TEXT_MUTED.name} {
        color: var(${vColorMuted});
        & > .${c.TEXT.name} {
          color: var(${vColorMuted});
        }
      }
    `, { selector: s => `&.${s}` })}

    /** default styles */
    &.${c.TEXT_DEFAULT.name} {
      font-family: var(${v.FONT_FAMILY.name});
      font-weight: var(${v.FONT_WEIGHT_DEFAULT.name});
      line-height: var(${v.LINE_HEIGHT_DEFAULT.name});
      font-size: var(${v.FONT_SIZE_DEFAULT.name});
      margin-bottom: var(${v.SPACING_TEXT_DEFAULT.name});
      &:last-child {
        margin-bottom: 0;
      }
    }

    /** heading styles */
    &.${c.TEXT_HEADING.name} {
      font-family: var(${v.FONT_FAMILY.name});
      &:last-child {
        margin-bottom: 0;
      }
    }

    /** alignments */
    &.${c.ALIGN_LEFT.name} { text-align: left; }
    &.${c.ALIGN_CENTER.name} { text-align: center; }
    &.${c.ALIGN_RIGHT.name} { text-align: right; }

    &.${c.TEXT_BLOCK.name} {
      display: block;
      width: 100%;
    }
    &.${c.TEXT_H1.name} {
      font-size: var(${v.FONT_SIZE_TEXT_H1.name});
      font-weight: var(${v.FONT_WEIGHT_H1.name});
      line-height: var(${v.LINE_HEIGHT_H1.name});
      margin-bottom: var(${v.SPACING_TEXT_H1.name});
    }
    &.${c.TEXT_H2.name} {
      font-size: var(${v.FONT_SIZE_TEXT_H2.name});
      font-weight: var(${v.FONT_WEIGHT_H2.name});
      line-height: var(${v.LINE_HEIGHT_H2.name});
      margin-bottom: var(${v.SPACING_TEXT_H2.name});
    }
    &.${c.TEXT_H3.name} {
      font-size: var(${v.FONT_SIZE_TEXT_H3.name});
      font-weight: var(${v.FONT_WEIGHT_H3.name});
      line-height: var(${v.LINE_HEIGHT_H3.name});
      margin-bottom: var(${v.SPACING_TEXT_H3.name});
    }
    &.${c.TEXT_P.name} {
    }
    &.${c.TEXT_B.name} {
      font-weight: var(${v.FONT_WEIGHT_BOLD.name});
    }
    &.${c.TEXT_I.name} {
      text-decoration: italic;
    }
    &.${c.TEXT_U.name} {
      text-decoration: underline;
    }
  }
`;

const Text = ({
  children,
  muted,
  intent,
  block,
  align,
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
  block?: boolean,
  align?: Alignment,
  p?: boolean,
  h?: boolean,
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  b?: boolean,
  i?: boolean,
  u?: boolean,
}) => {

  const isHeading: boolean = !!(h1 || h2 || h3);
  const isBlock: boolean = !!(block || isHeading || p);

  return (
    <>
      <Global styles={styles} />
      <span
        className={cc({
          [c.TEXT.name]: true,
          [c.TEXT_DEFAULT.name]: !isHeading,
          [c.TEXT_HEADING.name]: isHeading,
          [c.TEXT_MUTED.name]: muted,
          [c.TEXT_BLOCK.name]: isBlock,
          [c.TEXT_P.name]: p,
          [c.TEXT_H1.name]: h1,
          [c.TEXT_H2.name]: h2,
          [c.TEXT_H3.name]: h3,
          [c.TEXT_B.name]: b,
          [c.TEXT_I.name]: i,
          [c.TEXT_U.name]: u,
          ...attachIntentClasses(intent),
          ...attachAlignmentClasses(align),
        })}
      >
        {children}
      </span>
    </>
  )	
}

export default Text;