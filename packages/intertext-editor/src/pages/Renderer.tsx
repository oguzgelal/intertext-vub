import React from 'react';

import Text from '../components/core/Text/Text';
import Block from '../components/core/Block/Block';
import Grid from '../components/core/Grid/Grid';
/*
import Button from 'components/core/Button';
*/
import { Renderable } from '@intertext/engine';

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
  if ('block' in branch) {
    return (
      <Block {...branch}>
        {renderChildren(branch['block'])}
      </Block>
    )
  }

  /**
   * Grid
   */
  if ('grid' in branch) {
    return (
      <Grid {...branch}>
        {renderChildren(branch['grid'])}
      </Grid>
    )
  }

  /**
   * Text
   */
  if (
    'text' in branch ||
    'p' in branch ||
    'h1' in branch ||
    'h2' in branch ||
    'h3' in branch
  ) {

    let child = null;
    if ('text' in branch) child = branch['text']
    if ('p' in branch) child = branch['p']
    if ('h1' in branch) child = branch['h1']
    if ('h2' in branch) child = branch['h2']
    if ('h3' in branch) child = branch['h3']

    const directRender = (
      typeof child === "string" ||
      typeof child === "number"
    )

    return (
      <Text
        {...branch}
        p={'p' in branch}
        h1={'h1' in branch}
        h2={'h2' in branch}
        h3={'h3' in branch}
        b={branch.bold}
        u={branch.underlined}
        i={branch.italic}
      >
        {directRender ? child : renderChildren(child)}
      </Text>
    )
  }

  /**
   * Button
   
  if ('button' in branch) {
    return (
      <Button
        size={branch.size}
        intent={branch.intent}
        fill={branch.fill}
        disabled={branch.disabled}
      >
        {renderChildren(branch['button'])}
      </Button>
    )
  }
  */
  
  return null
}

export default Renderer;