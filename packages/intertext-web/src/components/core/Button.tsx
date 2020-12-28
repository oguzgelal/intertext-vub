import React from 'react';
import cc from 'classnames';
import { v, c } from 'style/values';
import { Global, css } from '@emotion/react/macro';
import type { Intent } from '../../style/values';
import { attachIntentClasses, applyIntentStyles } from '../../style/utils/intent'

const styles = css`
  
  .${c.BUTTON.name} {
  }
  
  .${c.BUTTON_FILL.name} {
    width: 100%;
  }
`;

const Button = ({
  children,
  intent,
  fill,
  onClick,
}: {
  children: any,
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
          ...attachIntentClasses(intent),
        })}
      >
        {children}
      </button>
    </>
  )	
}

export default Button;