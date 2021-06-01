import Runner from './Runner';
import {
  Grid,
  Block,
  Button,
  Input,
  Select,
  Collapse,
  Image,
  TextGeneral,
} from './types/components';
import { Renderable } from './types/renderable';

type RenderArgs<T> = {
  children: Renderable;
  props: T;
  index?: number;
};

type RendererFn<T> = (args: RenderArgs<T>) => unknown;

class Renderer {
  private literalRenderer: RendererFn<undefined> = () => null;
  private blockRenderer: RendererFn<Block> = () => null;
  private gridRenderer: RendererFn<Grid> = () => null;
  private textRenderer: RendererFn<TextGeneral> = () => null;
  private buttonRenderer: RendererFn<Button> = () => null;
  private inputRenderer: RendererFn<Input> = () => null;
  private selectRenderer: RendererFn<Select> = () => null;
  private collapseRenderer: RendererFn<Collapse> = () => null;
  private imageRenderer: RendererFn<Image> = () => null;

  constructor(private runner: Runner) {}

  /**
   * Register a renderer
   */
  public registerLiteralRenderer = (fn: RendererFn<unknown>): void => {
    this.literalRenderer = fn;
  };
  public registerBlockRenderer = (fn: RendererFn<Block>): void => {
    this.blockRenderer = fn;
  };
  public registerGridRenderer = (fn: RendererFn<Grid>): void => {
    this.gridRenderer = fn;
  };
  public registerTextRenderer = (fn: RendererFn<TextGeneral>): void => {
    this.textRenderer = fn;
  };
  public registerButtonRenderer = (fn: RendererFn<Button>): void => {
    this.buttonRenderer = fn;
  };
  public registerInputRenderer = (fn: RendererFn<Input>): void => {
    this.inputRenderer = fn;
  };
  public registerSelectRenderer = (fn: RendererFn<Select>): void => {
    this.selectRenderer = fn;
  };
  public registerCollapseRenderer = (fn: RendererFn<Collapse>): void => {
    this.collapseRenderer = fn;
  };
  public registerImageRenderer = (fn: RendererFn<Image>): void => {
    this.imageRenderer = fn;
  };

  /**
   * Main render function
   */
  public render = (args: { branch: Renderable; index?: number }): unknown => {
    // List of items
    if (Array.isArray(args.branch)) {
      return args.branch.map((branch, index) => {
        return this.render({ index, branch });
      });
    }

    // Literal values
    if (typeof args.branch === 'string' || typeof args.branch === 'number') {
      return this.literalRenderer({
        index: args.index,
        props: undefined,
        children: args.branch,
      });
    }

    // State values
    // `state` command can also be used as a component
    // to display the value of the state variable
    if (args.branch && 'state' in args.branch) {
      return this.literalRenderer({
        index: args.index,
        props: undefined,
        children: this.runner.run({
          branch: args.branch,
        }) as string,
      });
    }

    // Block
    if (args.branch && 'block' in args.branch) {
      return this.blockRenderer({
        index: args.index,
        children: args.branch['block'],
        props: { ...args.branch },
      });
    }

    // Grid
    if (args.branch && 'grid' in args.branch) {
      return this.gridRenderer({
        index: args.index,
        children: args.branch['grid'],
        props: { ...args.branch },
      });
    }

    // Button
    if (args.branch && 'button' in args.branch) {
      return this.buttonRenderer({
        index: args.index,
        children: args.branch['button'],
        props: { ...args.branch },
      });
    }

    // Input
    if (args.branch && 'input' in args.branch) {
      return this.inputRenderer({
        index: args.index,
        children: args.branch['input'],
        props: { ...args.branch },
      });
    }

    // Select
    if (args.branch && 'select' in args.branch) {
      return this.selectRenderer({
        index: args.index,
        children: args.branch['select'],
        props: { ...args.branch },
      });
    }

    // Collapse
    if (args.branch && 'collapse' in args.branch) {
      return this.collapseRenderer({
        index: args.index,
        children: args.branch['collapse'],
        props: { ...args.branch },
      });
    }

    // Image
    if (args.branch && 'img' in args.branch) {
      return this.imageRenderer({
        index: args.index,
        children: args.branch['img'],
        props: { ...args.branch },
      });
    }

    // Text
    if (
      args.branch &&
      ('text' in args.branch ||
        'p' in args.branch ||
        'h1' in args.branch ||
        'h2' in args.branch ||
        'h3' in args.branch)
    ) {
      let child = null;
      if ('text' in args.branch) child = args.branch['text'];
      if ('p' in args.branch) child = args.branch['p'];
      if ('h1' in args.branch) child = args.branch['h1'];
      if ('h2' in args.branch) child = args.branch['h2'];
      if ('h3' in args.branch) child = args.branch['h3'];

      // render aliases
      return this.textRenderer({
        index: args.index,
        children: child,
        props: { ...args.branch },
      });
    }

    /**
     * Component-like commands:
     * Below are commands that can be top level
     */

    // Onload
    if (args.branch && 'onload' in args.branch) {
      this.runner.run({
        branch: args.branch,
      });
    }

    return null;
  };
}

export default Renderer;
