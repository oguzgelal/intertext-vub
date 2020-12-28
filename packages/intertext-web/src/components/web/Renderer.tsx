import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import Text from 'components/core/Text';
import Button from 'components/core/Button';
import Spacer from 'components/core/Spacer';
import { Global } from '@emotion/react/macro';
import { Intent, Size, Theme } from '../../style/values';
import darkTheme from '../../style/themes/dark';
import fireTheme from '../../style/themes/fire';

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

  const [ theme, themeSet ] = useState<Theme>();
  const [ intent, intentSet ] = useState<Intent>();

  // common parameters to apply to every component instance 
  const params = {
    intent
  } 

  return (
    <Wrapper>

      {/** apply themes */}
      <Global
        styles={[
          theme === Theme.DARK && darkTheme,
          theme === Theme.FIRE && fireTheme,
        ].filter(Boolean)}
      />
      
      {/** settings */}
      <Side>
        <Text h3>Theme</Text>
        <Button fill onClick={() => themeSet(undefined)}>base</Button>
        <Spacer size={Size.XSMALL} />
        <Button fill onClick={() => themeSet(Theme.DARK)}>dark</Button>
        <Spacer size={Size.XSMALL} />
        <Button fill onClick={() => themeSet(Theme.FIRE)}>fire</Button>
        
        <Spacer size={Size.MEDIUM} />
        
        <Text h3>Intent</Text>
        <Button fill onClick={() => intentSet(undefined)}>default</Button>
        <Spacer size={Size.XSMALL} />
        <Button fill onClick={() => intentSet(Intent.PRIMARY)}>primary</Button>
        <Spacer size={Size.XSMALL} />
        <Button fill onClick={() => intentSet(Intent.SECONDARY)}>secondary</Button>
        <Spacer size={Size.XSMALL} />
        <Button fill onClick={() => intentSet(Intent.SUCCESS)}>success</Button>
        <Spacer size={Size.XSMALL} />
        <Button fill onClick={() => intentSet(Intent.WARNING)}>warning</Button>
        <Spacer size={Size.XSMALL} />
        <Button fill onClick={() => intentSet(Intent.ERROR)}>error</Button>
        <Spacer size={Size.XSMALL} />
        <Button fill onClick={() => intentSet(Intent.INFO)}>info</Button>
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