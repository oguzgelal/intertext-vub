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
    padding: var(${v.SPACING_SCREEN_PADDING_TB_LARGE.name}) var(${v.SPACING_SCREEN_PADDING_LR_LARGE.name});
    ${media('large', css`
      padding: var(${v.SPACING_SCREEN_PADDING_TB_MEDIUM.name}) var(${v.SPACING_SCREEN_PADDING_LR_MEDIUM.name});
    `)}
    ${media('medium', css`
      padding: var(${v.SPACING_SCREEN_PADDING_TB_SMALL.name}) var(${v.SPACING_SCREEN_PADDING_LR_SMALL.name});
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