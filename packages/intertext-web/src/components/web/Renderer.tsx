import React from 'react';
import PropTypes from 'prop-types';
import { Renderable } from 'Engine/Engine'

import Text from 'components/core/Text';
import Block from 'components/core/Layout/Block';
import Button from 'components/core/Button';
import Spacer from 'components/core/Layout/Spacer';
import Grid from 'components/core/Layout/Grid';
import Stack from 'components/core/Layout/Stack';


const renderChildren = (data: Renderable) => {
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
  branch: Renderable
}) => {

  /**
   * List of items
   */
  if (Array.isArray(branch)) {
    return <>{renderChildren(branch)}</>
  }

  /**
   * Nil
   */
  if (!branch) {
    return null;
  }

  /**
   * Direct values
   */
  if (
    typeof branch === "string" ||
    typeof branch === "number"
  ) {
    return <Text>{branch}</Text>
  }
  
  /**
   * Block
   */
  if ('cmp:block' in branch) {
    return (
      <Block 
        align={branch.align}
        intent={branch.intent}
        grow={branch.grow}
        pocketLeft={('pocketLeft' in branch) && renderChildren(branch.pocketLeft)}
        pocketRight={('pocketRight' in branch) && renderChildren(branch.pocketRight)}
      >
        {renderChildren(branch['cmp:block'])}
      </Block>
    )
  }

  /**
   * Stack
   */
  if ('cmp:stack' in branch) {
    return (
      <Stack
        size={branch.size}
        vertical={branch.vertical}
      >
        {renderChildren(branch['cmp:stack'])}
      </Stack>
    )
  }

  /**
   * Spacer
   */
  if ('cmp:spacer' in branch) {
    return (
      <Spacer size={branch.size} />
    )
  }

  /**
   * Grid
   */
  if ('cmp:grid' in branch) {
    return (
      <Grid
        cols={branch.cols}
        gap={branch.gap}
      >
        {renderChildren(branch['cmp:grid'])}
      </Grid>
    )
  }

  /**
   * Text
   */
  if (
    'cmp:text' in branch ||
    'cmp:text:p' in branch ||
    'cmp:text:h1' in branch ||
    'cmp:text:h2' in branch ||
    'cmp:text:h3' in branch
  ) {
    return (
      <Text
        p={'cmp:text:p' in branch}
        h1={'cmp:text:h1' in branch}
        h2={'cmp:text:h2' in branch}
        h3={'cmp:text:h3' in branch}
        b={branch.bold}
        u={branch.underlined}
        i={branch.italic}
        muted={branch.muted}
        intent={branch.intent}
      >
        {'cmp:text' in branch && renderChildren(branch['cmp:text'])}
        {'cmp:text:p' in branch && renderChildren(branch['cmp:text:p'])}
        {'cmp:text:h1' in branch && renderChildren(branch['cmp:text:h1'])}
        {'cmp:text:h2' in branch && renderChildren(branch['cmp:text:h2'])}
        {'cmp:text:h3' in branch && renderChildren(branch['cmp:text:h3'])}
      </Text>
    )
  }

  /**
   * Button
   */
  if ('cmp:button' in branch) {
    return (
      <Button
        size={branch.size}
        align={branch.align}
        intent={branch.intent}
        fill={branch.fill}
        disabled={branch.disabled}
      >
        {renderChildren(branch['cmp:button'])}
      </Button>
    )
  }
  
  return null
}

export default Renderer;