#!/usr/bin/env node
import React, { useState, useEffect } from 'react';
import { Text, render, useApp, useInput } from 'ink';
import fetch from 'node-fetch';
import meow from 'meow';
import { Branch } from '@intertext/engine'
import engine from './engine'

const cli = meow(`
	Usage
	  $ foo <input>

	Options
	  --url, -u  Visit an Intertext URL

	Examples
	  $ inx -u example.com
`, {
	flags: {
		url: {
			type: 'string',
			alias: 'u'
		}
	}
});

const App = () => {
  const { exit } = useApp()
  const [loading, loadingSet] = useState(true)
  const [packages, packagesSet] = useState<Branch[] | null>(null)

  const url = cli.flags.url
  const useUrl = url === 'local'
    ? 'http://localhost:8008/demo'
    : url

  const load = () => {
    if (!useUrl) {
      throw new Error('No URL provided')
    }

    loadingSet(true)
    fetch(useUrl)
      .then((response) => response.text())
      .then(engine.parseXml)
      .then((res) => {
        packagesSet(res)
        loadingSet(false)
      })
      .catch((err) => {
        loadingSet(false)
        throw new Error('Failed to parse')
      })
  }

  useEffect(() => {
    load()
  }, [])
  
  useInput((input/*, key*/) => {
    if (input === 'q') {
			exit();
		}
  })

  return (
    <>
      {loading && <Text>Loading...</Text>}
      {!loading && (
        engine.renderer.render({ branch: packages })
      )}
    </>
  )
};

render(<App />)