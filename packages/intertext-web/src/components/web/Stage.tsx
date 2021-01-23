import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Branch } from 'Engine/Engine';
import demo from '@intertext/utils/src/examples/demo.json'
import engine from './engine';
import Renderer from 'components/web/Renderer';
import Screen from 'components/core/Layout/Screen';

console.log('demo', demo)
engine.insert(demo as Branch[])

const Stage = () => {
  return (
    <Screen>
      {
        (engine.packages || []).map((branch, i) => (
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