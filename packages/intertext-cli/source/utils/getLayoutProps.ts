import { LayoutProps, getLayoutProps } from '@intertext/engine';

const layoutProps = (props: LayoutProps) => {
  const engineProps = getLayoutProps(props)

  return {
    ...engineProps
  }
}

export default layoutProps