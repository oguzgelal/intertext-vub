import xml2js from 'xml2js';

export enum Intent {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

export enum Size {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  XSMALL = 'xsmall',
}

export enum Alignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export type Renderable = Renderable[] | Branch | boolean | string | number | undefined | null;

export type Block = {
  block: Renderable;
  pocketLeft?: Renderable;
  pocketRight?: Renderable;
  align?: Alignment;
  intent?: Intent;
  grow?: boolean;
};

export type Stack = {
  stack: Renderable;
  size?: Size;
  vertical?: boolean;
};

export type Spacer = {
  spacer: null | undefined;
  size?: Size;
};

export type Grid = {
  grid: Renderable;
  cols: number[];
  gap?: Size;
};

type TextBase = {
  intent?: Intent;
  muted?: boolean;
  bold?: boolean;
  italic?: boolean;
  underlined?: boolean;
};
export type Text = TextBase & { text: Renderable };
export type TextP = TextBase & { p: Renderable };
export type TextH1 = TextBase & { h1: Renderable };
export type TextH2 = TextBase & { h2: Renderable };
export type TextH3 = TextBase & { h3: Renderable };

export type Button = {
  button: Renderable;
  size?: Size.SMALL | Size.MEDIUM | Size.LARGE;
  align?: Alignment;
  intent?: Intent;
  fill?: boolean;
  disabled?: boolean;
  onClick: Commands;
};

export type Component = Block | Stack | Spacer | Grid | Text | TextP | TextH1 | TextH2 | TextH3 | Button;

export type Commands = unknown;

export type Branch = Component;

type XmlParseOutput = {
  '#name': string;
  $: Record<string, unknown>;
  $$: XmlParseOutput[];
  _: string;
};

/**
 * Engine class
 */

class Engine {
  public packages: Branch[] | undefined;
  private parser: xml2js.Parser;

  constructor() {
    this.parser = new xml2js.Parser({
      preserveChildrenOrder: true,
      explicitArray: true,
      explicitChildren: true,
      explicitRoot: true,
    });
  }

  public insert = (pack: Branch | Branch[]): void => {
    const packArr = Array.isArray(pack) ? pack : [pack];
    this.packages = [...(this.packages || []), ...packArr];
  };

  public insertXml = async (xmlString: string): Promise<void> => {
    this.insert(await this.parseXml(xmlString));
  };

  public parseXml = async (xmlString: string): Promise<Branch[]> => {
    // convert values of a node from string
    function parseAttrValues(node: Record<string, unknown>): Record<string, unknown> {
      return Object.keys(node ?? {}).reduce((acc, key) => {
        let parsed = node[key];
        if (typeof parsed === 'string') {
          parsed = parseAttrValueFromString(parsed);
        }
        return Object.assign({}, acc, parsed);
      }, {});
    }

    // convert string based values into values of a type
    function parseAttrValueFromString(attrValue: string): string | boolean | number[] {
      if (typeof attrValue !== 'string') return attrValue;
      // convert from string to boolean
      if (attrValue === 'true') return true;
      if (attrValue === 'false') return false;
      // parses things like '[1, 2, 3]'
      if (/\s*\[[\s*\d+\s*,]+\]\s*/gi.test(attrValue ?? '')) {
        return <number[]>JSON.parse(attrValue ?? '');
      }
      return attrValue;
    }

    /**
     * Fix complex attribute node names. ie:
     * { #name: block.pocketLeft } to { #name: pocketLeft }
     */
    function fixComplexAttrNodeName(node: XmlParseOutput): XmlParseOutput {
      return Object.assign({}, node, {
        '#name': (node['#name'] ?? '').split('.').slice(1).join('.'),
      });
    }

    function parseXmlJsonOutput(output: XmlParseOutput): Branch {
      const nodeName: string = output['#name'];
      const nodeValue: string = output['_'];
      const nodeAttrs: Record<string, unknown> = output['$'] ?? {};
      const nodeChildren: XmlParseOutput[] = output['$$'];

      const complexAttributes: Record<string, Renderable> = {};

      let children: Renderable | Record<string, Renderable> | Record<string, Renderable>[] = parseAttrValueFromString(
        nodeValue,
      );

      // handle children
      if (nodeChildren && nodeChildren.length > 0) {
        // seperate complex attributes from actual children. ie:
        // { #name: block.pocketLeft, ... }
        // complex attributes needs to be handled differently
        const [complexAttributesArray, nodeChildrenSafe] = nodeChildren.reduce<[XmlParseOutput[], XmlParseOutput[]]>(
          (acc, n) => {
            const childNodeName = n['#name'] || '';
            return childNodeName.split('.')[0] === nodeName ? [[...acc[0], n], acc[1]] : [acc[0], [...acc[1], n]];
          },
          [[], []],
        );

        // parse complex attribute children nodes
        complexAttributesArray.forEach((attrNode) => {
          const attrNodeFixed = fixComplexAttrNodeName(attrNode);
          const attrParsed = parseXmlJsonOutput(attrNodeFixed);
          // TODO:
          // @ts-ignore
          complexAttributes['#name'] = attrParsed[attrNode['#name']];
        });

        // parse actual children
        children = nodeChildrenSafe.map(parseXmlJsonOutput);
      }

      // TODO:
      // @ts-ignore
      return {
        [nodeName]: children,
        ...parseAttrValues(nodeAttrs),
      };
    }

    const output = await this.parser.parseStringPromise(xmlString);
    // console.log('output', output.root)
    const parsed = parseXmlJsonOutput(output.root);
    // console.log('parsed', parsed)

    // TODO:
    // @ts-ignore
    return parsed?.root;
  };

  // public evaluate = (branch: Branch) => {
  //   return branch;
  // }
}

export default Engine;
