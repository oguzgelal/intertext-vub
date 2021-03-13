import { Size } from './size'
import { Space } from './space'

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
export type FlexBasis = 'auto' | Size

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
