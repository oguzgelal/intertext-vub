import React, { useEffect } from 'react'
import themeLight from '../revitail/src/styles/themeLight'
import { applyTheme } from '../revitail/src/styles/themeUtils'
import Block from './components/Block/Block'

type AppProps = {}

const App: React.FC = ({}: AppProps) => {
  useEffect(() => {
    applyTheme(themeLight)
  }, [])
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Block intent="accent">Test</Block>
      asdfadsf
    </div>
  )
}

export default App
