import React from 'react';
import cc from 'classnames';
import { Global, css } from '@emotion/react/macro';
import { v, c } from 'style/values';

const styles = css`
  .${c.STACK.name} {
  }
`;

const Stack = ({
  children,
}: {
  children?: any
}) => {

  return (
    <>
      <Global styles={styles} />
      <div
        className={cc({
          [c.STACK.name]: true,
        })}
      >
        {children}
      </div>
    </>
  )	
}

export default Stack;