import React from 'react';
import cc from 'classnames';
import { Global, css } from '@emotion/react/macro';
import { v, c, Alignment, Intent } from 'style/values';
import { attachAlignmentClasses } from 'style/utils/alignment';
import { applyIntentStyles, attachIntentClasses } from 'style/utils/intent';

const styles = css`

  .${c.BLOCK.name} {
    display: flex;
    position: relative;
    padding: var(${v.SPACING_BLOCK_PADDING.name});
    padding-top: calc(var(${v.SPACING_BLOCK_PADDING.name}) / 2);
    padding-bottom: calc(var(${v.SPACING_BLOCK_PADDING.name}) / 2);
    width: 100%;
    
    &:first-of-type {
      padding-top: var(${v.SPACING_BLOCK_PADDING.name});
    }
    &:last-of-type {
      padding-bottom: var(${v.SPACING_BLOCK_PADDING.name});
    }
    
    /** block contents */

    .${c.BLOCK_CONTENTS.name} {
      width: 100%;
      flex-grow: 1;
      flex-shrink: 1;
      border-radius: var(${v.BORDER_RADIUS.name});
    }
    
    /** block pockets */

    .${c.BLOCK_POCKET.name} {
      flex-shrink: 0;
    }
    .${c.BLOCK_POCKET_LEFT.name} {
      margin-right: var(${v.SPACING_BLOCK_PADDING.name});
    }
    .${c.BLOCK_POCKET_RIGHT.name} {
      margin-left: var(${v.SPACING_BLOCK_PADDING.name});
    }

    /** intents */

    ${applyIntentStyles(({ vColor, vColorBg }) => css`
      & > .${c.BLOCK_CONTENTS.name} {
        background-color: var(${vColorBg});
        padding: var(${v.SPACING_BLOCK_PADDING.name});
        border:
          var(${v.BORDER_BLOCK_SIZE.name})
          var(${v.BORDER_BLOCK_STYLE.name}) 
          var(${vColor});
      }
      & > .${c.BLOCK_POCKET.name} {
        background-color: transparent;
        padding: var(${v.SPACING_BLOCK_PADDING.name});
        border:
          var(${v.BORDER_BLOCK_SIZE.name})
          var(${v.BORDER_BLOCK_STYLE.name}) 
          transparent;
        
        &.${c.BLOCK_POCKET_LEFT.name} {
          padding-left: 0;
          border-left: none;
        }
        &.${c.BLOCK_POCKET_RIGHT.name} {
          padding-right: 0;
          border-right: none;
        }
      }
    `, {
      selector: s => `&.${s}`,
      exclude: s => s === Intent.DEFAULT,
    })}

    /** alignments */
    &.${c.ALIGN_LEFT.name} { text-align: left; }
    &.${c.ALIGN_CENTER.name} { text-align: center; }
    &.${c.ALIGN_RIGHT.name} { text-align: right; }
  }

  /** override block under grid */
  .${c.GRID.name} {
    .${c.BLOCK.name} {
      &:first-of-type {
        padding-top: calc(var(${v.SPACING_BLOCK_PADDING.name}) / 2);
      }
      &:last-of-type {
        padding-bottom: calc(var(${v.SPACING_BLOCK_PADDING.name}) / 2);
      }
    }
  }

  /** override text blocks */
  .${c.BLOCK__TEXT.name} {
    &.${c.TEXT_DEFAULT.name} {
      margin-top: var(${v.SPACING_TEXT_DEFAULT.name});
    }
    &.${c.TEXT_H1.name} {
      margin-top: var(${v.SPACING_TEXT_H1.name});
    }
    &.${c.TEXT_H2.name} {
      margin-top: var(${v.SPACING_TEXT_H2.name});
    }
    &.${c.TEXT_H3.name} {
      margin-top: var(${v.SPACING_TEXT_H3.name});
    }
    &:last-of-type {
      margin-bottom: 0;
    }
    &:first-of-type {
      margin-top: 0;
    }
  }

  /** override button blocks */
  .${c.BLOCK__BUTTON.name} {}
`;

export type BlockProps = {
  children?: any,
  className?: string
  align?: Alignment,
  intent?: Intent,
  pocketLeft?: any,
  pocketRight?: any,
} 

const Block = ({
  children,
  className,
  align,
  intent,
  pocketLeft,
  pocketRight,
}: BlockProps) => {

  const classNameWrapper = cc({
    [c.BLOCK.name]: true,
    ...attachAlignmentClasses({ align }),
    ...attachIntentClasses({ intent }),
  })

  const classNameContents = cc({
    [c.BLOCK_CONTENTS.name]: true,
  })

  const classNameLeftPocket = cc({
    [c.BLOCK_POCKET.name]: true,
    [c.BLOCK_POCKET_LEFT.name]: true,
  })
  
  const classNameRightPocket = cc({
    [c.BLOCK_POCKET.name]: true,
    [c.BLOCK_POCKET_RIGHT.name]: true,
  })

  return (
    <>
      <Global styles={styles} />
      <div className={`${classNameWrapper || ''} ${className || ''}`}>
        
        {/** left pocket */}
        {pocketLeft && (
          <div className={classNameLeftPocket}>{pocketLeft}</div>
        )}
        
        {/** contents */}
        <div className={classNameContents}>
          {children}
        </div>
        
        {/** right pocket */}
        {pocketRight && (
          <div className={classNameRightPocket}>{pocketRight}</div>
        )}
      </div>
    </>
  )	
}

export default Block;