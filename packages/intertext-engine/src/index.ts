import parseXml from './utils/parseXml';
import { Branch } from './types/renderable';
import Renderer from './Renderer';
import Runner from './Runner';

/**
 * type exports
 */

export { Size } from './types/size';
export { Space } from './types/space';
export { Intent } from './types/theme';
export {
  AlignContent,
  AlignItems,
  AlignSelf,
  FlexBasis,
  FlexDirection,
  FlexGrow,
  FlexShrink,
  FlexWrap,
  JustifyContent,
  LayoutDirection,
  LayoutProps,
  Position,
} from './types/layout';

export { Branch, Renderable } from './types/renderable';

export {
  Block,
  Grid,
  Text,
  TextH1,
  TextH2,
  TextH3,
  TextP,
  Button,
  Component,
} from './types/components';

export { Command } from './types/commands';

/**
 * other exports
 */

export {
  getLayoutProps,
  defaultProps as defaultLayoutProps,
} from './utils/layout';

/**
 * Engine class
 */

class Engine {
  public packages: Branch[] | undefined;
  public runner: Runner = new Runner();
  public renderer: Renderer = new Renderer(this.runner);

  public insert = (pack: Branch | Branch[]): void => {
    const packArr = Array.isArray(pack) ? pack : [pack];
    this.packages = [...(this.packages || []), ...packArr];
  };

  public insertXml = async (xmlString: string): Promise<void> => {
    this.insert(await this.parseXml(xmlString));
  };

  // TODO: consider rewriting in htmlparser2
  // https://github.com/fb55/htmlparser2
  public parseXml = async (xmlString: string): Promise<Branch[]> => {
    return parseXml(xmlString);
  };
}

export default Engine;
