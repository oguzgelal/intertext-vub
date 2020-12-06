import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

import Text from 'components/core/Text';

const Wrapper = styled.div`
  overflow: auto;
  min-height: 100%;
  width: 820px;
  border-left: 1px solid whitesmoke;
  border-right: 1px solid whitesmoke;
  padding: 22px;
  margin: auto;
`;

const Renderer = () => {
  return (
    <Wrapper>
      <Text>This is a text</Text>
    </Wrapper>
  )	
}

Renderer.propTypes = {
}

export default Renderer;