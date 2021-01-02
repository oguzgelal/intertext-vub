import React from 'react';
import cc from 'classnames';
import { v, c } from 'style/values';
import { Global, css } from '@emotion/react/macro';
import { Alignment } from '../../../style/values';
import { attachAlignmentClasses } from '../../../style/utils/alignment';

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
    
    /** block parts */
    .${c.BLOCK_CONTENTS.name} {
      flex-grow: 1;
      flex-shrink: 1;
      width: 100%;
    }
    .${c.BLOCK_POCKET.name} {
      flex-shrink: 0;
    }
    .${c.BLOCK_POCKET_LEFT.name} {
      margin-right: var(${v.SPACING_BLOCK_PADDING.name});
    }
    .${c.BLOCK_POCKET_RIGHT.name} {
      margin-left: var(${v.SPACING_BLOCK_PADDING.name});
    }

    /** alignments */
    &.${c.ALIGN_LEFT.name} { text-align: left; }
    &.${c.ALIGN_CENTER.name} { text-align: center; }
    &.${c.ALIGN_RIGHT.name} { text-align: right; }
  }
`;

export type BlockProps = {
  children?: any,
  className?: string
  align?: Alignment,
  pocketLeft?: any,
  pocketRight?: any,
} 

const Block = ({
  children,
  className,
  align,
  pocketLeft,
  pocketRight,
}: BlockProps) => {

  const classNameWrapper = cc({
    [c.BLOCK.name]: true,
    ...attachAlignmentClasses(align),
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