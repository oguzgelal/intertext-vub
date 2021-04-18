import { LayoutProps } from '../types/layout';
import attach from './attach';

export const defaultProps: LayoutProps = {
  position: 'relative',
  alignContent: 'flex-start',
  // alignSelf: 'stretch',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  flexGrow: '0',
  flexShrink: '1',
  flexBasis: 'auto',
  direction: 'ltr',
};

export const getLayoutProps = (
  props: LayoutProps,
  overrideDefault?: Partial<LayoutProps>,
): LayoutProps => {
  const layout: LayoutProps = {};
  attach(
    layout,
    'position',
    props.position ?? overrideDefault?.position ?? defaultProps.position,
  );
  attach(
    layout,
    'alignContent',
    props.alignContent ??
      overrideDefault?.alignContent ??
      defaultProps.alignContent,
  );
  attach(
    layout,
    'alignItems',
    props.alignItems ?? overrideDefault?.alignItems ?? defaultProps.alignItems,
  );
  attach(
    layout,
    'alignSelf',
    props.alignSelf ?? overrideDefault?.alignSelf ?? defaultProps.alignSelf,
  );
  attach(
    layout,
    'flexDirection',
    props.flexDirection ??
      overrideDefault?.flexDirection ??
      defaultProps.flexDirection,
  );
  attach(
    layout,
    'flexWrap',
    props.flexWrap ?? overrideDefault?.flexWrap ?? defaultProps.flexWrap,
  );
  attach(
    layout,
    'flexGrow',
    parseInt(
      `${
        props.flexGrow ??
        overrideDefault?.flexGrow ??
        defaultProps.flexGrow ??
        ''
      }`,
    ),
  );
  attach(
    layout,
    'flexShrink',
    parseInt(
      `${
        props.flexShrink ??
        overrideDefault?.flexShrink ??
        defaultProps.flexShrink ??
        ''
      }`,
    ),
  );
  attach(
    layout,
    'flexBasis',
    props.flexBasis ?? overrideDefault?.flexBasis ?? defaultProps.flexBasis,
  );
  attach(
    layout,
    'justifyContent',
    props.justifyContent ??
      overrideDefault?.justifyContent ??
      defaultProps.justifyContent,
  );
  attach(
    layout,
    'direction',
    props.direction ?? overrideDefault?.direction ?? defaultProps.direction,
  );
  attach(layout, 'width', props.width);
  attach(layout, 'minWidth', props.minWidth);
  attach(layout, 'maxWidth', props.maxWidth);
  attach(layout, 'height', props.height);
  attach(layout, 'minHeight', props.minHeight);
  attach(layout, 'maxHeight', props.maxHeight);
  attach(layout, 'left', props.left);
  attach(layout, 'right', props.right);
  attach(layout, 'top', props.top);
  attach(layout, 'bottom', props.bottom);
  attach(layout, 'marginTop', props.marginTop ?? props.margin);
  attach(layout, 'marginBottom', props.marginBottom ?? props.margin);
  attach(layout, 'marginLeft', props.marginLeft ?? props.margin);
  attach(layout, 'marginRight', props.marginRight ?? props.margin);
  attach(layout, 'paddingTop', props.paddingTop ?? props.padding);
  attach(layout, 'paddingBottom', props.paddingBottom ?? props.padding);
  attach(layout, 'paddingLeft', props.paddingLeft ?? props.padding);
  attach(layout, 'paddingRight', props.paddingRight ?? props.padding);

  return layout;
};
