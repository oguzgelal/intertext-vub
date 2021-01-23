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
  'cmp:block': Renderable
  pocketLeft?: Renderable
  pocketRight?: Renderable
  align?: Alignment
  intent?: Intent
  grow?: boolean
}

export type Stack = {
  'cmp:stack': Renderable
  size?: Size
  vertical?: boolean
}

export type Spacer = {
  'cmp:spacer': null | undefined
  size?: Size
}

export type Grid = {
  'cmp:grid': Renderable
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
export type Text = TextBase & { 'cmp:text': Renderable }
export type TextP = TextBase & { 'cmp:text:p': Renderable }
export type TextH1 = TextBase & { 'cmp:text:h1': Renderable }
export type TextH2 = TextBase & { 'cmp:text:h2': Renderable }
export type TextH3 = TextBase & { 'cmp:text:h3': Renderable }

export type Button = {
  'cmp:button': Renderable
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

/**
 * Engine class
 */

class Engine {
  public packages: Branch[] | undefined;

  insert(pack: Branch | Branch[]) {
    const packArr = Array.isArray(pack) ? pack : [pack];
    this.packages = [...(this.packages || []), ...packArr];
  }

  evaluate(branch: Branch) {
    return branch;
  }
}

export default Engine;
