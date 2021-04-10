import React, { FC } from 'react'
import cc from 'classnames'
import { Intent, LayoutProps, getLayoutProps } from '@intertext/engine'
import { getLayoutStyles, getLayoutClasses } from '../../utils/layout'

type BlockProps = LayoutProps & {
  children?: React.ReactNode,
  intent?: Intent,
}

const Block: FC<BlockProps> = ({
  children,
  intent,
  ...props
}) => {

  const layoutProps = getLayoutProps(props)

  return (
    <div
      style={getLayoutStyles(layoutProps)}
      className={cc({
        [getLayoutClasses(layoutProps)]: true,
        'p-2 mt-2 mb-2': true,
        'rounded-md': true,

        // background
        'bg-gray-100': !intent,
        'bg-accent-100': intent === 'accent',
        'bg-error-100': intent === 'error',
        'bg-warning-100': intent === 'warning',
        'bg-success-100': intent === 'success',
        'bg-info-100': intent === 'info',
        
        // border
        'border': true,
        'border-gray-600': !intent,
        'border-accent-600': intent === 'accent',
        'border-error-600': intent === 'error',
        'border-warning-600': intent === 'warning',
        'border-success-600': intent === 'success',
        'border-info-600': intent === 'info',
      })}
    >
      {children}
    </div>
  )
}

export default Block
