// @ts-nocheck
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

export type Renderable = 
  | Renderable[]
  | Branch
  | string
  | number
  | undefined
  | null

export type Block = {
  'block': Renderable
  pocketLeft?: Renderable
  pocketRight?: Renderable
  align?: Alignment
  intent?: Intent
  grow?: boolean
}

export type Stack = {
  'stack': Renderable
  size?: Size
  vertical?: boolean
}

export type Spacer = {
  'spacer': null | undefined
  size?: Size
}

export type Grid = {
  'grid': Renderable
  cols: number[]
  gap?: Size
}

type TextBase = {
  intent?: Intent
  muted?: boolean
  bold?: boolean
  italic?: boolean
  underlined?: boolean
}
export type Text = TextBase & { 'text': Renderable }
export type TextP = TextBase & { 'p': Renderable }
export type TextH1 = TextBase & { 'h1': Renderable }
export type TextH2 = TextBase & { 'h2': Renderable }
export type TextH3 = TextBase & { 'h3': Renderable }

export type Button = {
  'button': Renderable
  size?: Size.SMALL | Size.MEDIUM | Size.LARGE
  align?: Alignment
  intent?: Intent
  fill?: boolean
  disabled?: boolean
  onClick: Commands
}

export type Components = 
  | Block
  | Stack
  | Spacer
  | Grid
  | Text
  | TextP
  | TextH1
  | TextH2
  | TextH3
  | Button


export type Commands = unknown

export type Branch = Components

type XmlParseOutput = {
  '#name': string
  '$': Record<string, unknown>
  '$$': XmlParseOutput[]
  '_': string
}

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
      explicitRoot: true
    })
  }

  public insert = (pack: Branch | Branch[]) => {
    const packArr = Array.isArray(pack) ? pack : [pack];
    this.packages = [...(this.packages || []), ...packArr];
  }

  public insertXml = async (xmlString: string) => {
    this.insert(await this.parseXml(xmlString))
  }

  public parseXml = async (xmlString: string): Promise<Branch[]> => {
    
    function parseAttrValueFromString(attrValue) {
      if (attrValue === 'true') return true
      if (attrValue === 'false') return false
      if (/\s*\[[\s*\d+\s*,]+\]\s*/gi.test(attrValue)) {
        return JSON.parse(attrValue)
      }
      return attrValue;
    }

    function parseJsonOutput(output: XmlParseOutput): Branch | Branch[] {
      const nodeName = output['#name']
      const nodeValue = output['_']
      const nodeAttrs = output['$']
      const nodeChildren = output['$$']

      let children = parseAttrValueFromString(nodeValue || null);
      let nodeComplexAttrs = {}
      
      // handle children
      if (nodeChildren && nodeChildren.length > 0) {

        // separet complex attributes from actual children
        const [nodeComplexAttrNodes, nodeChildrenSafe] = nodeChildren
          .reduce((acc, n) => {
            const childNodeName = n['#name'] || ''
            const hasComplexAttrSyntax = childNodeName.indexOf('.') !== -1
            const childNodeNameParts = childNodeName.split('.')
            const complexAttrMatch = childNodeNameParts[0] === nodeName
            if (hasComplexAttrSyntax && complexAttrMatch) {
              const nameFixed = { ...n, '#name': childNodeNameParts.slice(1).join('.') }
              return [ [ ...acc[0], nameFixed ], acc[1] ]
            }
            return [ acc[0], [ ...acc[1], n ] ]
          }, [[],[]])

        // parse complex attribute nodes
        if (nodeComplexAttrNodes && nodeComplexAttrNodes.length > 0) {
          nodeComplexAttrs = nodeComplexAttrNodes.reduce((acc, attrNode) => {
            const complexAttrParsed = parseJsonOutput(attrNode)
            return {
              ...acc,
              [attrNode['#name']]: complexAttrParsed[attrNode['#name']]
            }
          }, {})
        }

        // parse actual children
        children = nodeChildrenSafe
          .map(parseJsonOutput)
      }

      const attrsCombined = {
        ...nodeAttrs,
        ...nodeComplexAttrs
      }
      
      // convert str values of attrs
      const attrsConverted = Object
        .keys(attrsCombined)
        .reduce((acc, key) => ({
          ...acc,
          [key]: parseAttrValueFromString(
            attrsCombined[key]
          )
        }), {})

      return {
        [nodeName]: children,
        ...attrsConverted
      }
    }
    
    const output = await this.parser.parseStringPromise(xmlString)
    // console.log('output', output.root)
    const parsed = parseJsonOutput(output.root) as Branch[]
    // console.log('parsed', parsed)
    return parsed?.root
  }

  // public evaluate = (branch: Branch) => {
  //   return branch;
  // }
}

export default Engine;
