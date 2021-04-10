import React, { useEffect } from 'react';
import themeLight from 'revitail/src/styles/themeLight'
import { applyTheme } from 'revitail/src/styles/themeUtils'
import 'revitail/src/styles/index.css'

const Base = ({ children }) => {
  useEffect(() => {
    applyTheme(themeLight)
  }, [])
  return (
    <div>
      {children}
    </div>
  )
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <Base>
      <Story />
    </Base>
  ),
];