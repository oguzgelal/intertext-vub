import React, { useEffect } from 'react'
import Button from 'revitail/src/components/Button/Button'
import themeLight from 'revitail/src/styles/themeLight'
import { applyTheme } from 'revitail/src/styles/themeUtils'

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
        <Button
          iconLeft={{icon: 'Cloud'}}
          intent="accent"
        >
          Add
        </Button>
      </div>
    </div>
  )
}

export default App
