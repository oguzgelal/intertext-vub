import React from 'react';
import styled from '@emotion/styled/macro';

import Text from 'components/core/Text';

const Wrapper = styled.div`
  overflow: auto;
  min-height: 100%;
  width: 820px;
  border-left: 1px solid var(--inx-color-border);
  border-right: 1px solid var(--inx-color-border);
  padding: 22px;
  margin: auto;
`;

const Renderer = () => {
  return (
    <Wrapper>
      <Text h1>Heading 1</Text>
      <Text h2>Heading 2</Text>
      <Text h3>Heading 3</Text>
      <Text p>
        Lorem ipsum dolor sit amet, <Text muted>consectetur <Text b u>adipiscing</Text> elit. Etiam eu 
        fringilla lectus.</Text> Pellentesque <Text b>suscipit nisi libero, ac rhoncus libero </Text>
        molestie quis. <Text u>Sed facilisis eros</Text> lectus, non cursus turpis faucibus ut. 
        Phasellus tristique sapien ut lacus molestie ornare. Curabitur id ultrices mauris.
      </Text>
    </Wrapper>
  )	
}

export default Renderer;