import { Size } from './size';
import { Space } from './space';

export type Display = 'inline' | 'block' | 'flex' | 'inline-flex';
export type Position = 'relative' | 'absolute';

export type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'center'
  | 'space-between'
  | 'space-around';

export type AlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';

export type AlignSelf =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export type FlexGrow = string | number;
export type FlexShrink = string | number;
export type FlexBasis = 'auto' | Size;

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type LayoutDirection = 'ltr' | 'rtl';

export type LayoutProps = {
  display?: Display;
  position?: Position;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  flexGrow?: FlexGrow;
  flexShrink?: FlexShrink;
  flexBasis?: FlexBasis;
  justifyContent?: JustifyContent;
  direction?: LayoutDirection;
  top?: Space | undefined;
  bottom?: Space | undefined;
  left?: Space | undefined;
  right?: Space | undefined;
  margin?: Space | undefined;
  marginTop?: Space | undefined;
  marginBottom?: Space | undefined;
  marginLeft?: Space | undefined;
  marginRight?: Space | undefined;
  padding?: Space | undefined;
  paddingTop?: Space | undefined;
  paddingBottom?: Space | undefined;
  paddingLeft?: Space | undefined;
  paddingRight?: Space | undefined;
  width?: Size | undefined;
  minWidth?: Size | undefined;
  maxWidth?: Size | undefined;
  height?: Size | undefined;
  minHeight?: Size | undefined;
  maxHeight?: Size | undefined;
};
