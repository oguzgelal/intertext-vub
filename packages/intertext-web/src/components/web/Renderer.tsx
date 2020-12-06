import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

import Markdown from 'components/core/Markdown';

const Wrapper = styled.div``;

const Renderer = () => {
  return (
    <Wrapper>
      <Markdown>### Hello, world</Markdown>
    </Wrapper>
  )	
}

Renderer.propTypes = {
}

export default Renderer;