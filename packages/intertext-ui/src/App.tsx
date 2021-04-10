import React, { useEffect } from 'react'
import Button from './components/Button/Button'
import themeLight from './styles/themeLight'
import { applyTheme } from './styles/themeUtils'

type AppProps = {}

const App: React.FC = ({}: AppProps) => {
  useEffect(() => {
    applyTheme(themeLight)
  }, [])
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-5xl mb-[1rem]">
        React + Tailwind JIT + Vite Starter
      </h1>
      <div>
        <Button iconLeft="Plus" intent="accent">
          Add
        </Button>
      </div>
    </div>
  )
}

export default App
