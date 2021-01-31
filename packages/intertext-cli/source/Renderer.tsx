import React from 'react';
import { Renderable } from '@intertext/engine';
import Block from './components/Block'
import Text from './components/Text'

const renderChildren = (data: Renderable) => {
  if (Array.isArray(data)) {
    return <>{data.map((c, i) => <Renderer key={i} branch={c} />)}</>;
  }

  return <Renderer branch={data} />;
};

const Renderer = ({ branch }: { branch: Renderable }) => {

  /**
   * List of items
   */
  if (Array.isArray(branch)) {
    return <>{renderChildren(branch)}</>;
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
  if (typeof branch === 'string' || typeof branch === 'number') {
    return <Text>{branch}</Text>;
  }
  

  /**
   * Block
   */
  if ('block' in branch) {
    return (
      <Block
        // align={branch.align}
        // intent={branch.intent}
        // grow={branch.grow}
        // pocketLeft={'pocketLeft' in branch && renderChildren(branch.pocketLeft)}
        // pocketRight={'pocketRight' in branch && renderChildren(branch.pocketRight)}
      >
        {renderChildren(branch['block'])}
      </Block>
    );
  }
  

  /**
   * Stack
   
  if ('stack' in branch) {
    return (
      <Stack size={branch.size} vertical={branch.vertical}>
        {renderChildren(branch['stack'])}
      </Stack>
    );
  }
  */

  /**
   * Spacer
   
  if ('spacer' in branch) {
    return <Spacer size={branch.size} />;
  }
  */

  /**
   * Grid
   
  if ('grid' in branch) {
    return (
      <Grid cols={branch.cols} gap={branch.gap}>
        {renderChildren(branch['grid'])}
      </Grid>
    );
  }
  */

  /**
   * Text
   */
  if ('text' in branch || 'p' in branch || 'h1' in branch || 'h2' in branch || 'h3' in branch) {
    let child = null;
    if ('text' in branch) child = branch['text'];
    if ('p' in branch) child = branch['p'];
    if ('h1' in branch) child = branch['h1'];
    if ('h2' in branch) child = branch['h2'];
    if ('h3' in branch) child = branch['h3'];

    const directRender = typeof child === 'string' || typeof child === 'number';

    return (
      <Text
        // p={'p' in branch}
        // h1={'h1' in branch}
        // h2={'h2' in branch}
        // h3={'h3' in branch}
        // b={branch.bold}
        // u={branch.underlined}
        // i={branch.italic}
        // muted={branch.muted}
        // intent={branch.intent}
      >
        {directRender ? child : renderChildren(child)}
      </Text>
    );
  }
  

  /**
   * Button
   
  if ('button' in branch) {
    return (
      <Button
        size={branch.size}
        align={branch.align}
        intent={branch.intent}
        fill={branch.fill}
        disabled={branch.disabled}
      >
        {renderChildren(branch['button'])}
      </Button>
    );
  }
  */

  return null;
};

Renderer.propTypes = {};

export default Renderer;
