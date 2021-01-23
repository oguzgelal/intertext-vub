import React from 'react';
import PropTypes from 'prop-types';
import { 
  Renderable,
  Block as BlockType,
  Text as TextType,
  TextP as TextPType,
  TextH1 as TextH1Type,
  TextH2 as TextH2Type,
  TextH3 as TextH3Type,
} from 'Engine/Engine'

import Text from 'components/core/Text';
import Block from 'components/core/Layout/Block';
import Button from 'components/core/Button';
import Spacer from 'components/core/Layout/Spacer';
import Grid from 'components/core/Layout/Grid';
import Screen from 'components/core/Layout/Screen';
import Stack from 'components/core/Layout/Stack';
import { Intent } from 'style/values';


const renderChildren = (data: Renderable | Renderable[]) => {
  if (Array.isArray(data)) {
    return data.map((c, i) => (
      <Renderer key={i} branch={c} />
    ))
  }

  return <Renderer branch={data} />
}

const Renderer = ({
  branch
}: {
  branch: Renderable | Renderable[]
}) => {

  if (Array.isArray(branch)) {
    return <>{renderChildren(branch)}</>
  }
  if (!branch) {
    return null;
  }
  if (
    typeof branch === "string" ||
    typeof branch === "number"
  ) {
    return <Text>{branch}</Text>
  }

  if (
    'cmp:text' in branch ||
    'cmp:text:p' in branch ||
    'cmp:Text:H1' in branch ||
    'cmp:text:h2' in branch ||
    'cmp:text:h3' in branch
  ) {
    return (
      <Text
        p={'cmp:text:p' in branch}
        h1={'cmp:Text:H1' in branch}
        h2={'cmp:text:h2' in branch}
        h3={'cmp:text:h3' in branch}
        b={branch.bold}
        u={branch.underlined}
        i={branch.italic}
        muted={branch.muted}
        intent={branch.intent}
      >
        {renderChildren(
          (branch as TextType)['cmp:text'] ||
          (branch as TextPType)['cmp:text:p'] ||
          (branch as TextH1Type)['cmp:Text:H1'] ||
          (branch as TextH2Type)['cmp:text:h2'] ||
          (branch as TextH3Type)['cmp:text:h3']
        )}
      </Text>
    )
  }
  
  if ('cmp:block' in branch) {
    const _block = branch as BlockType
    return (
      <Block 
        align={_block.align}
        intent={_block.intent}
        grow={_block.grow}
        pocketLeft={('pocketLeft' in _block) && renderChildren(_block.pocketLeft)}
        pocketRight={('pocketRight' in _block) && renderChildren(_block.pocketRight)}
      >
        {renderChildren(_block['cmp:block'])}
      </Block>
    )
  }

  // if ('cmp:stack' in branch)
  
  return null
}

Renderer.propTypes = {
}

export default Renderer;