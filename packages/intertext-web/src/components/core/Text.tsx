import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classnames';
import * as c from 'style/classNames';
import styled from '@emotion/styled/macro';

const Wrapper = styled.span``;

const Text = ({
  children,
  p,
  h1,
  h2,
  h3,
  b,
  i,
  u,
}: {
  children: string,
  p?: boolean,
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  b?: boolean,
  i?: boolean,
  u?: boolean,
}) => {
  return (
    <Wrapper
      className={cc({
        [c.TEXT.name]: true,
        [c.P.name]: p,
        [c.H1.name]: h1,
        [c.H2.name]: h2,
        [c.H3.name]: h3,
        [c.B.name]: b,
        [c.I.name]: i,
        [c.U.name]: u,
      })}
    >
      {children}
    </Wrapper>
  )	
}

Text.propTypes = {
}

export default Text;