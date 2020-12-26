import React from 'react';
import cc from 'classnames';
import * as c from 'style/classNames';
import { Global, css } from '@emotion/react/macro';

const styles = css`
  .${c.TEXT.name} { }
  .${c.TEXT_DEFAULT.name} {
    color: var(--inx-color-text);
    font-family: var(--inx-font-family-sans);
    font-weight: var(--inx-font-weight-default);
    line-height: var(--inx-line-height-default);
    font-size: var(--inx-font-size-default);
    margin-bottom: var(--inx-spacing-text-default);
    &:last-child {
      margin-bottom: 0;
    }
  }
  .${c.TEXT_MUTED.name} {
    color: var(--inx-color-text-muted);
    & > .${c.TEXT_DEFAULT.name} {
      color: var(--inx-color-text-muted);
    }
  }
  .${c.TEXT_HEADING.name} {
    display: block;
    color: var(--inx-color-text);
    font-family: var(--inx-font-family-heading);
    &:last-child {
      margin-bottom: 0;
    }
  }
  .${c.TEXT_H1.name} {
    font-size: var(--inx-font-size-text-h1);
    font-weight: var(--inx-font-weight-h1);
    line-height: var(--inx-line-height-h1);
    margin-bottom: var(--inx-spacing-text-h1);
  }
  .${c.TEXT_H2.name} {
    font-size: var(--inx-font-size-text-h2);
    font-weight: var(--inx-font-weight-h2);
    line-height: var(--inx-line-height-h2);
    margin-bottom: var(--inx-spacing-text-h2);
  }
  .${c.TEXT_H3.name} {
    font-size: var(--inx-font-size-text-h3);
    font-weight: var(--inx-font-weight-h3);
    line-height: var(--inx-line-height-h3);
    margin-bottom: var(--inx-spacing-text-h3);
  }
  .${c.TEXT_P.name} {
    display: block;
  }
  .${c.TEXT_B.name} {
    font-weight: var(--inx-font-weight-bold);
  }
  .${c.TEXT_I.name} {
    text-decoration: italic;
  }
  .${c.TEXT_U.name} {
    text-decoration: underline;
  }
`;

const Text = ({
  children,
  p,
  h1,
  h2,
  h3,
  b,
  i,
  u,
  muted,
}: {
  children: any,
  p?: boolean,
  h?: boolean,
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  b?: boolean,
  i?: boolean,
  u?: boolean,
  muted?: boolean,
}) => {

  const heading: boolean = !!(h1 || h2 || h3);

  return (
    <>
      <Global styles={styles} />
      <span
        className={cc({
          [c.TEXT.name]: true,
          [c.TEXT_DEFAULT.name]: !heading,
          [c.TEXT_HEADING.name]: heading,
          [c.TEXT_MUTED.name]: muted,
          [c.TEXT_P.name]: p,
          [c.TEXT_H1.name]: h1,
          [c.TEXT_H2.name]: h2,
          [c.TEXT_H3.name]: h3,
          [c.TEXT_B.name]: b,
          [c.TEXT_I.name]: i,
          [c.TEXT_U.name]: u,
        })}
      >
        {children}
      </span>
    </>
  )	
}

export default Text;