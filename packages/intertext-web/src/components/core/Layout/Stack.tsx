import React from 'react';
import cc from 'classnames';
import { css } from '@emotion/react/macro';
import { v, c } from 'style/values';
import { Size } from '../../../style/values';

export const styles = css`
  .${c.STACK.name} {
    display: flex;
    align-items: baseline;
    width: 100%;

    &.${c.STACK_HORIZONTAL.name} {
      flex-direction: row;
      &.${c.STACK_SPACE_LARGE.name} {
        & > * {
          margin-right: var(${v.SPACING_SPACER_LARGE.name});
          &:last-child { margin-right: 0; }
        }
      }
      &.${c.STACK_SPACE_MEDIUM.name} {
        & > * {
          margin-right: var(${v.SPACING_SPACER_MEDIUM.name});
          &:last-child { margin-right: 0; }
        }
      }
      &.${c.STACK_SPACE_SMALL.name} {
        & > * {
          margin-right: var(${v.SPACING_SPACER_SMALL.name});
          &:last-child { margin-right: 0; }
        }
      }
      &.${c.STACK_SPACE_XSMALL.name} {
        & > * {
          margin-right: var(${v.SPACING_SPACER_XSMALL.name});
          &:last-child { margin-right: 0; }
        }
      }
    }

    &.${c.STACK_VERTICAL.name} {
      flex-direction: column;
      &.${c.STACK_SPACE_LARGE.name} {
        & > * {
          margin-bottom: var(${v.SPACING_SPACER_LARGE.name});
          &:last-child { margin-bottom: 0; }
        }
      }
      &.${c.STACK_SPACE_MEDIUM.name} {
        & > * {
          margin-bottom: var(${v.SPACING_SPACER_MEDIUM.name});
          &:last-child { margin-bottom: 0; }
        }
      }
      &.${c.STACK_SPACE_SMALL.name} {
        & > * {
          margin-bottom: var(${v.SPACING_SPACER_SMALL.name});
          &:last-child { margin-bottom: 0; }
        }
      }
      &.${c.STACK_SPACE_XSMALL.name} {
        & > * {
          margin-bottom: var(${v.SPACING_SPACER_XSMALL.name});
          &:last-child { margin-bottom: 0; }
        }
      }
    }
  }
`;

const Stack = ({
  children,
  size = Size.XSMALL,
  vertical,
}: {
  children: any
  size?: Size
  vertical?: boolean
}) => {

  return (
    <div
      className={cc({
        [c.STACK.name]: true,
        [c.STACK_VERTICAL.name]: vertical,
        [c.STACK_HORIZONTAL.name]: !vertical,
        [c.STACK_SPACE_XSMALL.name]: size === Size.XSMALL,
        [c.STACK_SPACE_SMALL.name]: size === Size.SMALL,
        [c.STACK_SPACE_MEDIUM.name]: size === Size.MEDIUM,
        [c.STACK_SPACE_LARGE.name]: size === Size.LARGE,
      })}
    >
      {children}
    </div>
  )	
}

export default Stack;