import React from 'react';
import cc from 'classnames';
import { v, c } from 'style/values';
import { css } from '@emotion/react/macro';
import { Size } from 'style/values';

export const styles = css`
  
  .${c.SPACER.name} {
    width: 100%;
    flex-shrink: 0;

    &.${c.SPACER_XSMALL.name} {
      height: var(${v.SPACING_SPACER_XSMALL.name});
    }
    &.${c.SPACER_SMALL.name} {
      height: var(${v.SPACING_SPACER_SMALL.name});
    }
    &.${c.SPACER_MEDIUM.name} {
      height: var(${v.SPACING_SPACER_MEDIUM.name});
    }
    &.${c.SPACER_LARGE.name} {
      height: var(${v.SPACING_SPACER_LARGE.name});
    }
  }
`;

const Spacer = ({
  size = Size.XSMALL,
}: {
  size?: Size
}) => {

  return (
    <div
      className={cc({
        [c.SPACER.name]: true,
        [c.SPACER_XSMALL.name]: size === Size.XSMALL,
        [c.SPACER_SMALL.name]: size === Size.SMALL,
        [c.SPACER_MEDIUM.name]: size === Size.MEDIUM,
        [c.SPACER_LARGE.name]: size === Size.LARGE,
      })}
    />
  )	
}

export default Spacer;