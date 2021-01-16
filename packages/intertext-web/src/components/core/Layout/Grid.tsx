import React from 'react';
import cc from 'classnames';
import { Global, css } from '@emotion/react/macro';
import { v, c } from 'style/values';
import media from 'style/utils/media';
import { Size } from 'style/values';

const styles = css`
  .${c.GRID.name} {
    display: grid;
    width: 100%;

    &.${c.GRID_GAP_XSMALL.name} {
      row-gap: var(${v.SPACING_SPACER_XSMALL.name});
      column-gap: var(${v.SPACING_SPACER_XSMALL.name});
    }
    &.${c.GRID_GAP_SMALL.name} {
      row-gap: var(${v.SPACING_SPACER_SMALL.name});
      column-gap: var(${v.SPACING_SPACER_SMALL.name});
    }
    &.${c.GRID_GAP_MEDIUM.name} {
      row-gap: var(${v.SPACING_SPACER_MEDIUM.name});
      column-gap: var(${v.SPACING_SPACER_MEDIUM.name});
    }
    &.${c.GRID_GAP_LARGE.name} {
      row-gap: var(${v.SPACING_SPACER_LARGE.name});
      column-gap: var(${v.SPACING_SPACER_LARGE.name});
    }

    ${media('medium', css`
      grid-template-columns: 1fr !important;
    `)}
  }
`;

const Grid = ({
  cols,
  gap = Size.XSMALL,
  children,
}: {
  cols: number[],
  gap?: Size,
  children?: any
}) => {

  return (
    <>
      <Global styles={styles} />
      <div
        style={{
          gridTemplateColumns: cols
            .map(c => `${c}fr`)
            .join(' ')
        }}
        className={cc({
          [c.GRID.name]: true,
          [c.GRID_GAP_XSMALL.name]: gap === Size.XSMALL,
          [c.GRID_GAP_SMALL.name]: gap === Size.SMALL,
          [c.GRID_GAP_MEDIUM.name]: gap === Size.MEDIUM,
          [c.GRID_GAP_LARGE.name]: gap === Size.LARGE,
        })}
      >
        {children}
      </div>
    </>
  )	
}

export default Grid;