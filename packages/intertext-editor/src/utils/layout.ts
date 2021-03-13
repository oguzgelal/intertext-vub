import {
  Position,
  AlignContent,
  AlignItems,
  AlignSelf,
  FlexDirection,
  FlexWrap,
  FlexGrow,
  FlexShrink,
  FlexBasis,
  JustifyContent,
  LayoutDirection,
} from '../types/layout';

import { Size } from '../types/size'
import { Space } from '../types/space'

export type LayoutProps = {
  position?: Position,
  alignContent?: AlignContent
  alignItems?: AlignItems
  alignSelf?: AlignSelf
  flexDirection?: FlexDirection
  flexWrap?: FlexWrap
  flexGrow?: FlexGrow
  flexShrink?: FlexShrink
  flexBasis?: FlexBasis
  justifyContent?: JustifyContent
  layoutDirection?: LayoutDirection
  width?: Size | undefined
  minWidth?: Size | undefined
  maxWidth?: Size | undefined
  height?: Size | undefined
  minHeight?: Size | undefined
  maxHeight?: Size | undefined
  margin?: Space | undefined
  marginTop?: Space | undefined
  marginBottom?: Space | undefined
  marginLeft?: Space | undefined
  marginRight?: Space | undefined
  padding?: Space | undefined
  paddingTop?: Space | undefined
  paddingBottom?: Space | undefined
  paddingLeft?: Space | undefined
  paddingRight?: Space | undefined
}

export const defaultLayoutProps: LayoutProps = {
  position: 'relative',
  alignContent: 'flex-start',
  alignItems: 'stretch',
  alignSelf: 'stretch',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: 'auto',
  justifyContent: 'flex-start',
  layoutDirection: 'ltr',
}