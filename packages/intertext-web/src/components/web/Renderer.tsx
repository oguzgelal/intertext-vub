import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import Text from 'components/core/Text';
import Button from 'components/core/Button';
import Spacer from 'components/core/Layout/Spacer';
import Block from 'components/core/Layout/Block';
import Filler from 'components/web/Filler';
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
  overflow: auto;
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
        <Button fill onClick={() => themeSet(Theme.DARK)}>dark</Button>
        <Button fill onClick={() => themeSet(Theme.FIRE)}>fire</Button>
        
        <Spacer size={Size.MEDIUM} />
        
        <Text h3>Intent</Text>
        <Button intent={Intent.DEFAULT} fill onClick={() => intentSet(undefined)}>default</Button>
        <Button intent={Intent.PRIMARY} fill onClick={() => intentSet(Intent.PRIMARY)}>primary</Button>
        <Button intent={Intent.SECONDARY} fill onClick={() => intentSet(Intent.SECONDARY)}>secondary</Button>
        <Button intent={Intent.SUCCESS} fill onClick={() => intentSet(Intent.SUCCESS)}>success</Button>
        <Button intent={Intent.WARNING} fill onClick={() => intentSet(Intent.WARNING)}>warning</Button>
        <Button intent={Intent.ERROR} fill onClick={() => intentSet(Intent.ERROR)}>error</Button>
        <Button intent={Intent.INFO} fill onClick={() => intentSet(Intent.INFO)}>info</Button>
      </Side>

      {/** render styles here */}
      <Contents>

        {/** layout */}
        <Text h2 {...params}>Layout</Text>
        <Text h3 {...params}>Block</Text>
        <Text p {...params}>Every component is nested inside of a block</Text>
        <Block><Filler /></Block>
        <Text h3 {...params}>Block With Pockets</Text>
        <Text p {...params}>Every component is nested inside of a block</Text>
        <Block pocketLeft={<Filler />}><Filler /></Block>
        <Block pocketRight={<Filler />}><Filler /></Block>
        <Block
          pocketLeft={<Filler />}
          pocketRight={<Filler />}
        >
          <Filler />
        </Block>
        <Text h3 {...params}>Nested Blocks</Text>
        <Block>
          <Filler>
            <Block>
              <Filler>
                <Block><Filler /></Block>
                <Block><Filler /></Block>
                <Block><Filler /></Block>
              </Filler>
            </Block>
          </Filler>
        </Block>

        <Spacer size={Size.MEDIUM} />
        
        {/** typography */}
        <Text h3 {...params}>Typography</Text>

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