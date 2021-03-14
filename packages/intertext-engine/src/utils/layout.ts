import { LayoutProps } from '../types/layout'

export const defaultProps: LayoutProps = {
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

export const getLayoutProps = (props: LayoutProps): LayoutProps => {
  return {
    position: props.position ?? defaultProps.position,
    alignContent: props.alignContent ?? defaultProps.alignContent,
    alignItems: props.alignItems ?? defaultProps.alignItems,
    alignSelf: props.alignSelf ?? defaultProps.alignSelf,
    flexDirection: props.flexDirection ?? defaultProps.flexDirection,
    flexWrap: props.flexWrap ?? defaultProps.flexWrap,
    flexGrow: props.flexGrow ?? defaultProps.flexGrow,
    flexShrink: props.flexShrink ?? defaultProps.flexShrink,
    flexBasis: props.flexBasis ?? defaultProps.flexBasis,
    justifyContent: props.justifyContent ?? defaultProps.justifyContent,
    layoutDirection: props.layoutDirection ?? defaultProps.layoutDirection,
    width: props.width,
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    height: props.height,
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
    margin: props.margin,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,
    marginLeft: props.marginLeft,
    marginRight: props.marginRight,
    padding: props.padding,
    paddingTop: props.paddingTop,
    paddingBottom: props.paddingBottom,
    paddingLeft: props.paddingLeft,
    paddingRight: props.paddingRight,
  }
}