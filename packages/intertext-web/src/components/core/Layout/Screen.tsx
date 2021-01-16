import React from 'react';
import cc from 'classnames';
import { Global, css } from '@emotion/react/macro';
import { v, c } from 'style/values';
import media from 'style/utils/media';

const styles = css`
  .${c.SCREEN.name} {
    flex-grow: 1;
    overflow: auto;
    min-height: 100%;
    height: auto;
    border-left: 1px solid var(--inx-color-border);
    border-right: 1px solid var(--inx-color-border);
    padding: ${v.SPACING_SCREEN_PADDING_TB_LARGE.value}  ${v.SPACING_SCREEN_PADDING_LR_LARGE.value};
    
    ${media('large', css`
      padding: ${v.SPACING_SCREEN_PADDING_TB_MEDIUM.value}  ${v.SPACING_SCREEN_PADDING_LR_MEDIUM.value};
    `)}
    ${media('medium', css`
      padding: ${v.SPACING_SCREEN_PADDING_TB_SMALL.value}  ${v.SPACING_SCREEN_PADDING_LR_SMALL.value};
    `)}
  }
`;

const Screen = ({
  children,
}: {
  children?: any
}) => {

  return (
    <>
      <Global styles={styles} />
      <div
        className={cc({
          [c.SCREEN.name]: true,
        })}
      >
        {children}
      </div>
    </>
  )	
}

export default Screen;