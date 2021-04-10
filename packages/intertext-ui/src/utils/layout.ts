import { LayoutProps } from '@intertext/engine'
import cc from 'classnames'
import getMargins from './getMargins'
import getPaddings from './getPaddings'

export const getLayoutClasses = (layoutProps: LayoutProps) => cc({
  [getMargins(layoutProps)]: true,
  [getPaddings(layoutProps)]: true,
})

export const getLayoutStyles = (layoutProps: LayoutProps) => ({
  position: layoutProps.position,
  alignContent: layoutProps.alignContent,
  alignItems: layoutProps.alignItems,
  alignSelf: layoutProps.alignSelf,
  flexDirection: layoutProps.flexDirection,
  flexWrap: layoutProps.flexWrap,
  flexGrow: parseInt(`${layoutProps.flexGrow ?? 0}`),
  flexShrink: parseInt(`${layoutProps.flexShrink ?? 0}`),
  flexBasis: parseInt(`${layoutProps.flexBasis ?? 0}`),
  justifyContent: layoutProps.justifyContent,
  direction: layoutProps.direction,
  top: layoutProps.top,
  bottom: layoutProps.bottom,
  left: layoutProps.left,
  right: layoutProps.right,
  width: layoutProps.width,
  minWidth: layoutProps.minWidth,
  maxWidth: layoutProps.maxWidth,
  height: layoutProps.height,
  minHeight: layoutProps.minHeight,
  maxHeight: layoutProps.maxHeight,
})