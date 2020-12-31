import React from 'react';
import cc from 'classnames';
import { v, c } from 'style/values';
import { Global, css } from '@emotion/react/macro';
import { Alignment } from '../../../style/values';
import { attachAlignmentClasses } from '../../../style/utils/alignment';

const styles = css`
  
  .${c.BLOCK.name} {
    width: 100%;
    padding: var(${v.SPACING_BLOCK_PADDING.name});

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
} 

const Block = ({
  children,
  className,
  align,
}: BlockProps) => {

  const classNameComputed = cc({
    [c.BLOCK.name]: true,
    ...attachAlignmentClasses(align),
  })

  return (
    <>
      <Global styles={styles} />
      <div className={`${classNameComputed || ''} ${className || ''}`}>
        {children}
      </div>
    </>
  )	
}

export default Block;