import React from 'react';
import cc from 'classnames';
import { css } from '@emotion/react/macro';
import { v, c, Alignment, Size, Intent } from 'style/values';
import { attachAlignmentClasses } from 'style/utils/alignment';
import { attachIntentClasses, applyIntentStyles } from 'style/utils/intent'

export const styles = css`

  .${c.BUTTON.name} {
    padding: 0;
    border: var(${v.BORDER_FOCUS_SIZE.name}) var(${v.BORDER_FOCUS_STYLE.name}) transparent;
    background: var(${v.COLOR_BUTTON.name});
    border-radius: var(${v.BORDER_RADIUS.name});
    flex-shrink: 0;
    user-select: none;

    /** text styles */
    color: var(${v.COLOR_TEXT.name});
    font-family: var(${v.FONT_FAMILY.name});
    font-weight: var(${v.FONT_WEIGHT_DEFAULT.name});
    line-height: var(${v.LINE_HEIGHT_DEFAULT.name});
    font-size: var(${v.FONT_SIZE_DEFAULT.name});
    
    &:hover {
      cursor: pointer;
      background: var(${v.COLOR_BUTTON_HOVER.name});
    }
    &:focus {
      outline: none;
      border: var(${v.BORDER_FOCUS_SIZE.name}) var(${v.BORDER_FOCUS_STYLE.name}) var(${v.COLOR_TEXT.name});
    }

    /** alignments */
    &.${c.ALIGN_LEFT.name} { text-align: left; }
    &.${c.ALIGN_CENTER.name} { text-align: center; }
    &.${c.ALIGN_RIGHT.name} { text-align: right; }
    
    &.${c.BUTTON_DISABLED.name} {
      background-color: var(${v.COLOR_BUTTON_MUTED.name});
      color: var(${v.COLOR_TEXT_MUTED.name});
      &:hover {
        cursor: default;
      }
    }

    ${applyIntentStyles(({ vColor, vColorHover, vColorInverted, vColorMuted }) => css`
      background-color: var(${vColor});
      color: var(${vColorInverted});
      &:hover {
        background-color: var(${vColorHover});
      }
      &:focus {
        background: var(${v.COLOR_BUTTON.name});
        border: var(${v.BORDER_FOCUS_SIZE.name}) var(${v.BORDER_FOCUS_STYLE.name}) var(${vColorHover});
        color: var(${vColor});
      }
      &.${c.BUTTON_DISABLED.name} {
        background-color: var(${vColorMuted});
        &:hover {
          cursor: default;
        }
      }
    `, { selector: s => `&.${s}`})}

    .${c.BLOCK.name} {
      .${c.BLOCK_CONTENTS.name}, 
      .${c.BLOCK_POCKET.name} {
        display: flex;
        align-items: center;
      }
    }

    &.${c.BUTTON_SMALL.name} {
      min-height: var(${v.SPACING_BUTTON_HEIGHT_SMALL.name});
      padding: 0 var(${v.SPACING_BUTTON_PADDING_SMALL.name});
      font-size: 0.7rem;
    }
    &.${c.BUTTON_MEDIUM.name} {
      min-height: var(${v.SPACING_BUTTON_HEIGHT_MEDIUM.name});
      padding: 0 var(${v.SPACING_BUTTON_PADDING_MEDIUM.name});
      font-size: 0.9rem;
    }
    &.${c.BUTTON_LARGE.name} {
      min-height: var(${v.SPACING_BUTTON_HEIGHT_LARGE.name});
      padding: 0 var(${v.SPACING_BUTTON_PADDING_LARGE.name});
      font-size: 1rem;
    }
    &.${c.BUTTON_FILL.name} {
      width: 100%;
    }
  }
`;

const Button = ({
  children,
  size = Size.MEDIUM,
  align = Alignment.LEFT,
  intent,
  fill,
  onClick,
  disabled,
}: {
  children?: any,
  size?: Size.SMALL | Size.MEDIUM | Size.LARGE,
  align?: Alignment,
  intent?: Intent,
  fill?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  disabled?: boolean
}) => {

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cc({
        [c.BUTTON.name]: true,
        [c.BUTTON_FILL.name]: fill,
        [c.BUTTON_SMALL.name]: size === Size.SMALL,
        [c.BUTTON_MEDIUM.name]: size === Size.MEDIUM,
        [c.BUTTON_LARGE.name]: size === Size.LARGE,
        [c.BUTTON_DISABLED.name]: disabled,
        ...attachAlignmentClasses({ align }),
        ...attachIntentClasses({ intent }),
      })}
    >
      {children}
    </button>
  )	
}

export default Button;