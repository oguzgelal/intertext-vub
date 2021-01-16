import React from 'react';
import cc from 'classnames';
import { Global, css } from '@emotion/react/macro';
import { v, c } from 'style/values';
import media from 'style/utils/media';

const styles = css`
  .${c.GRID.name} {
    display: grid;
    ${media('medium', css`
      grid-template-columns: 1fr !important;
    `)}
  }
`;

const Grid = ({
  cols,
  children,
}: {
  cols: number[],
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
        })}
      >
        {children}
      </div>
    </>
  )	
}

export default Grid;