import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { markdown } from '@intertext/utils';
const Wrapper = styled.div``;

const Markdown = ({
  children,
}: {
  children: string
}) => {

  const parsed = markdown('test 3');

  return (
    <Wrapper>Hello 3</Wrapper>
  )	
}

export default Markdown;