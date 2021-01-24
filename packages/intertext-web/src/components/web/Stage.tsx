import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import demo from '@intertext/utils/src/examples/demo.json'
import demoXml from '@intertext/utils/src/examples/demo.xml'

import engine from './engine';
import Renderer from 'components/web/Renderer';
import Screen from 'components/core/Layout/Screen';
import { Branch } from 'Engine/Engine';

console.log('demo', demo)
console.log('demoXml', demoXml)
// engine.insert(demo as Branch[])
window.engine = engine

declare global {
  interface Window { engine: any; }
}

const Stage = () => {

  const [packages, packagesSet] = useState<Branch[]>([])

  useEffect(() => {
    fetch(demoXml)
      .then(response => response.text())
      .then(engine.parseXml)
      .then(packagesSet);
  }, [])

  return (
    <Screen>
      {
        packages.map((branch, i) => (
          <Renderer
            key={i}
            branch={branch}
          />
        ))
      }
    </Screen>
  )
}

Stage.propTypes = {
}

export default Stage;