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

export type Units =
  | 0
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'

export type Percent =
  | '5%'
  | '10%'
  | '15%'
  | '20%'
  | '25%'
  | '30%'
  | '35%'
  | '40%'
  | '45%'
  | '50%'
  | '55%'
  | '60%'
  | '65%'
  | '70%'
  | '75%'
  | '80%'
  | '85%'
  | '90%'
  | '95%'
  | '100%'


export type Position =
  | 'relative'
  | 'absolute'

export type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'center'
  | 'space-between'
  | 'space-around'

export type AlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'


export type AlignSelf =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'

export type FlexDirection =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'

export type FlexWrap =
  | 'wrap'
  | 'nowrap'
  | 'wrap-reverse'

export type FlexGrow = number
export type FlexShrink = number
export type FlexBasis = 'auto' | Units

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type LayoutDirection =
  | 'ltr'
  | 'rtl'

export type Width = Percent | undefined
export type Height = Percent | undefined
export type MaxWidth = Percent | undefined
export type MinWidth = Percent | undefined
export type MaxHeight = Percent | undefined
export type MinHeight = Percent | undefined

export type Margin = Units
export type MarginTop = Units
export type MarginBottom = Units
export type MarginLeft = Units
export type MarginRight = Units

export type Padding = Units
export type PaddingTop = Units
export type PaddingBottom = Units
export type PaddingLeft = Units
export type PaddingRight = Units