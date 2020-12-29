import React from 'react';
import cc from 'classnames';
import { v, c, Alignment } from 'style/values';
import { Global, css } from '@emotion/react/macro';
import { Size, Intent } from '../../style/values';
import { attachIntentClasses, applyIntentStyles } from '../../style/utils/intent'
import Text from './Text';

const styles = css`

  .${c.BUTTON.name} {
    border: var(${v.BORDER_FOCUS_SIZE.name}) var(${v.BORDER_FOCUS_STYLE.name}) transparent;
    background: var(${v.COLOR_BUTTON.name});
    border-radius: var(${v.BORDER_RADIUS_MEDIUM.name});
    flex-shrink: 0;
    
    &:hover {
      cursor: pointer;
      background: var(${v.COLOR_BUTTON_HOVER.name});
    }
    &:focus {
      outline: none;
      border: var(${v.BORDER_FOCUS_SIZE.name}) var(${v.BORDER_FOCUS_STYLE.name}) var(${v.COLOR_TEXT.name});
    }

    ${applyIntentStyles(({ vColor, vColorHover, vColorInverted }) => css`
      background-color: var(${vColor});
      .${c.TEXT.name} {
        color: var(${vColorInverted});
      }
      &:hover {
        background-color: var(${vColorHover});
      }
      &:focus {
        background: var(${v.COLOR_BUTTON.name});
        border: var(${v.BORDER_FOCUS_SIZE.name}) var(${v.BORDER_FOCUS_STYLE.name}) var(${vColorHover});
        .${c.TEXT.name} {
          color: var(${vColor});
        }
      }
    `, { selector: s => `&.${s}`})}

    &.${c.BUTTON_SMALL.name} {
      min-height: var(${v.SPACING_BUTTON_HEIGHT_SMALL.name});
      padding: 0 var(${v.SPACING_BUTTON_PADDING_SMALL.name});
      & > .${c.TEXT.name} {
        font-size: 0.7rem;
      }
    }
    &.${c.BUTTON_MEDIUM.name} {
      min-height: var(${v.SPACING_BUTTON_HEIGHT_MEDIUM.name});
      padding: 0 var(${v.SPACING_BUTTON_PADDING_MEDIUM.name});
      & > .${c.TEXT.name} {
        font-size: 0.9rem;
      }
    }
    &.${c.BUTTON_LARGE.name} {
      min-height: var(${v.SPACING_BUTTON_HEIGHT_LARGE.name});
      padding: 0 var(${v.SPACING_BUTTON_PADDING_LARGE.name});
      & > .${c.TEXT.name} {
        font-size: 1rem;
      }
    }
    
    &.${c.BUTTON_FILL.name} {
      width: 100%;
    }
  }
`;

const Button = ({
  children,
  size = Size.MEDIUM,
  intent,
  fill,
  onClick,
}: {
  children: any,
  size?: Size.SMALL | Size.MEDIUM | Size.LARGE,
  intent?: Intent,
  fill?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}) => {

  return (
    <>
      <Global styles={styles} />
      <button
        onClick={onClick}
        className={cc({
          [c.BUTTON.name]: true,
          [c.BUTTON_FILL.name]: fill,
          [c.BUTTON_SMALL.name]: size === Size.SMALL,
          [c.BUTTON_MEDIUM.name]: size === Size.MEDIUM,
          [c.BUTTON_LARGE.name]: size === Size.LARGE,
          ...attachIntentClasses(intent),
        })}
      >
        <Text
          block
          align={Alignment.LEFT}
          intent={intent}
        >
          {children}
        </Text>
      </button>
    </>
  )	
}

export default Button;