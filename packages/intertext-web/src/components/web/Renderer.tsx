import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import Text from 'components/core/Text';
import { Global } from '@emotion/react/macro';
import { Intent } from '../../style/values';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 100%;
`;

const Contents = styled.div`
  flex-grow: 1;
  overflow: auto;
  min-height: 100%;
  height: auto;
  border-left: 1px solid var(--inx-color-border);
  border-right: 1px solid var(--inx-color-border);
  padding: 62px 222px;
`;

const Side = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 320px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  min-height: 100%;
  padding: 22px;
`;

const Renderer = () => {

  const [ theme, themeSet ] = useState();
  const [ intent, intentSet ] = useState<Intent>();

  // common parameters to apply to every component instance 
  const params = {
    intent
  } 

  return (
    <Wrapper>
      
      {/** settings */}
      <Side>
        <Text p b>Theme</Text>
        <div style={{ display: 'flex' }}>
          <button>light</button>
          <button>dark</button>
        </div>
        <div style={{ height: 22 }} />
        
        <Text p b>Intent</Text>
        <div style={{ display: 'flex' }}>
          <button onClick={() => intentSet(undefined)}>default</button>
          <button onClick={() => intentSet(Intent.SUCCESS)}>success</button>
          <button onClick={() => intentSet(Intent.WARNING)}>warning</button>
          <button onClick={() => intentSet(Intent.ERROR)}>error</button>
          <button onClick={() => intentSet(Intent.INFO)}>info</button>
        </div>
      </Side>

      {/** render styles here */}
      <Contents>
        <Text h1 {...params}>Heading 1</Text>
        <Text h2 {...params}>Heading 2</Text>
        <Text h3 {...params}>Heading 3</Text>
        <Text p {...params}>
          Lorem ipsum dolor sit amet, <Text muted {...params}>consectetur <Text b u {...params}>adipiscing</Text> elit. Etiam eu 
          fringilla lectus.</Text> Pellentesque <Text b {...params}>suscipit nisi libero, ac rhoncus libero </Text>
          molestie quis. <Text u {...params}>Sed facilisis eros</Text> lectus, non cursus turpis faucibus ut. 
          Phasellus tristique sapien ut lacus molestie ornare. Curabitur id ultrices mauris.
        </Text>
      </Contents>
    </Wrapper>
  )	
}

export default Renderer;