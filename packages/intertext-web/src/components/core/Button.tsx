import React from 'react';
import cc from 'classnames';
import { Global, css } from '@emotion/react/macro';
import { v, c, Alignment, Size, Intent } from 'style/values';
import { attachIntentClasses, applyIntentStyles } from 'style/utils/intent'
import Text from 'components/core/Text';
import Block, { BlockProps } from 'components/core/Layout/Block';

const styles = css`

  .${c.BUTTON.name} {
    padding: 0;
    border: var(${v.BORDER_FOCUS_SIZE.name}) var(${v.BORDER_FOCUS_STYLE.name}) transparent;
    background: var(${v.COLOR_BUTTON.name});
    border-radius: var(${v.BORDER_RADIUS.name});
    flex-shrink: 0;
    user-select: none;
    
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

    & > .${c.BLOCK__TEXT.name} {
      margin: 0;
    }

    &.${c.BUTTON_SMALL.name} {
      min-height: var(${v.SPACING_BUTTON_HEIGHT_SMALL.name});
      & > .${c.BLOCK__TEXT.name} {
        padding: 0 var(${v.SPACING_BUTTON_PADDING_SMALL.name});
        & > .${c.TEXT.name} {
          font-size: 0.7rem;
        }
      }
    }
    &.${c.BUTTON_MEDIUM.name} {
      min-height: var(${v.SPACING_BUTTON_HEIGHT_MEDIUM.name});
      & > .${c.BLOCK__TEXT.name} {
        padding: 0 var(${v.SPACING_BUTTON_PADDING_MEDIUM.name});
        & > .${c.TEXT.name} {
          font-size: 0.9rem;
        }
      }
    }
    &.${c.BUTTON_LARGE.name} {
      min-height: var(${v.SPACING_BUTTON_HEIGHT_LARGE.name});
      & > .${c.BLOCK__TEXT.name} {
        padding: 0 var(${v.SPACING_BUTTON_PADDING_LARGE.name});
        & > .${c.TEXT.name} {
          font-size: 1rem;
        }
      }
    }
    
    &.${c.BUTTON_FILL.name} {
      width: 100%;
    }
  }
`;

type ButtonProps = {
  children: any,
  block?: BlockProps,
  size?: Size.SMALL | Size.MEDIUM | Size.LARGE,
  intent?: Intent,
  fill?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

const Button = ({
  children,
  block = {},
  size = Size.MEDIUM,
  intent,
  fill,
  onClick,
}: ButtonProps) => {

  const blockClassNames = cc({
    [c.BLOCK__BUTTON.name]: true,
  });

  const classNames = cc({
    [c.BUTTON.name]: true,
    [c.BUTTON_FILL.name]: fill,
    [c.BUTTON_SMALL.name]: size === Size.SMALL,
    [c.BUTTON_MEDIUM.name]: size === Size.MEDIUM,
    [c.BUTTON_LARGE.name]: size === Size.LARGE,
    ...attachIntentClasses(intent),
  });

  return (
    <Block {...block} className={blockClassNames}>
      <Global styles={styles} />
      <button
        onClick={onClick}
        className={classNames}
      >
        <Text
          block={{ align: Alignment.LEFT }}
          intent={intent}
        >
          {children}
        </Text>
      </button>
    </Block>
  )	
}

export default Button;