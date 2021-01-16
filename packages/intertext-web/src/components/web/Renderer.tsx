import React, { useState } from 'react';
import { Global } from '@emotion/react/macro';
import styled from '@emotion/styled/macro';

import Text from 'components/core/Text';
import Button from 'components/core/Button';
import Spacer from 'components/core/Layout/Spacer';
import Block from 'components/core/Layout/Block';
import Grid from 'components/core/Layout/Grid';
import Screen from 'components/core/Layout/Screen';

import { Intent, Size, Theme } from 'style/values';
import darkTheme from 'style/themes/dark';
import fireTheme from 'style/themes/fire';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 100%;
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
  const params = { intent }
  const hasDefIntent = !intent || intent === Intent.DEFAULT;
  const blockParams = {
    intent: hasDefIntent ? Intent.INFO : intent
  }

  const blockFiller = <div style={{ width: 20, height: 20 }} />

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
      <Screen>

        {/** layout */}

        <Text h2 {...params}>Layout</Text>
        
        {/** -- */}
        <Text h3 {...params}>Block</Text>
        <Text p {...params}>
          Blocks are the basic building block of Intertext, every component is 
          nested inside of a block. {hasDefIntent && <Text muted {...params}>Blocks shown here falls to the 
          <Text b {...params}> Info</Text> intent for demonstration purpose.</Text>}
        </Text>
        <Spacer size={Size.SMALL} />
        <Block {...blockParams}>
          <Text p {...params} intent={blockParams.intent}>This is some text</Text>
        </Block>
        
        {/** -- */}
        <Text h3 {...params}>Nested Blocks</Text>
        <Text p {...params}>
          Blocks can contain other blocks, or elements (which are wrapped in 
          blocks of their own)
        </Text>
        <Spacer size={Size.SMALL} />
        <Block {...blockParams}>
          <Block {...blockParams}>
            <Block {...blockParams}>{blockFiller}</Block>
          </Block>
          <Block {...blockParams}>
            <Block {...blockParams}>{blockFiller}</Block>
            <Block {...blockParams}>{blockFiller}</Block>
          </Block>
        </Block>
        
        {/** -- */}
        <Text h3 {...params}>Block With Pockets</Text>
        <Text p {...params}>
          Blocks come with pockets on either side, that can contain other blocks 
          or elements. Pockets should be used for positioning items that are directly 
          related to whatever is in the block, such as action items. On smaller screens, 
          pockets will not wrap and positioned in line with the block.
        </Text>
        <Spacer size={Size.SMALL} />
        <Block {...blockParams} pocketLeft={<Text intent={blockParams.intent}>Left</Text>}>
          {blockFiller}
        </Block>
        <Block {...blockParams} pocketRight={<Text intent={blockParams.intent}>Right</Text>}>
          {blockFiller}
        </Block>
        <Block
          {...blockParams}
          pocketLeft={<Text intent={blockParams.intent}>Left</Text>}
          pocketRight={<Text intent={blockParams.intent}>Right</Text>}
        >
          {blockFiller}
        </Block>

        {/** -- */}
        <Text h3 {...params}>Grid</Text>
        <Text p {...params}>
          Components could be displayed in a grid layout, as well as side by side using
          this technique. This component works similarly to css-grid, accepts a column template
          and positions its children based on it.
        </Text>
        <Spacer size={Size.SMALL} />
        <Grid cols={[1, 1, 1, 1, 1, 1]}>
          {[1, 1, 1, 1, 1, 1].map((fr, i) => (
            <Block {...blockParams} key={i}>
              <Text p {...params} intent={blockParams.intent}>{fr}</Text>
            </Block>
          ))}
        </Grid>
        <Grid cols={[2, 3, 1]}>
          {[2, 3, 1].map((fr, i) => (
            <Block {...blockParams} key={i}>
              <Text p {...params} intent={blockParams.intent}>{fr}</Text>
            </Block>
          ))}
        </Grid>
        <Grid cols={[1, 4, 1]}>
          {[1, 4, 1].map((fr, i) => (
            <Block {...blockParams} key={i}>
              <Text p {...params} intent={blockParams.intent}>{fr}</Text>
            </Block>
          ))}
        </Grid>
        <Grid cols={[3, 1]}>
          {[3, 1].map((fr, i) => (
            <Block {...blockParams} key={i}>
              <Text p {...params} intent={blockParams.intent}>{fr}</Text>
            </Block>
          ))}
        </Grid>
        <Grid cols={[1, 3]}>
          {[1, 3].map((fr, i) => (
            <Block {...blockParams} key={i}>
              <Text p {...params} intent={blockParams.intent}>{fr}</Text>
            </Block>
          ))}
        </Grid>

        <Spacer size={Size.MEDIUM} />
        
        {/** typography */}

        <Text h2 {...params}>Typography</Text>
        <Text p {...params}>
          Lorem ipsum dolor sit amet, <Text muted {...params}>consectetur <Text b u {...params}>adipiscing</Text> elit. Etiam eu 
          fringilla lectus.</Text> Pellentesque <Text b {...params}>suscipit nisi libero, ac rhoncus libero </Text>
          molestie quis. <Text u {...params}>Sed facilisis eros</Text> lectus, non cursus turpis faucibus ut. 
          Phasellus tristique sapien ut lacus molestie ornare. Curabitur id ultrices mauris.
        </Text>
        <Text h1 {...params}>Heading 1</Text>
        <Text h2 {...params}>Heading 2</Text>
        <Text h3 {...params}>Heading 3</Text>
      </Screen>
    </Wrapper>
  )	
}

export default Renderer;