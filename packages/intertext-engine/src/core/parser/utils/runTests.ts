/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// run tests against both an individual parser
// and the generic parser module

import parser from '../parser'

export default runner => (title: string, testFn): void => {
  it(`[unit] ${title}`, (...args) => {
    testFn({ parse: pack => runner(pack)?.package }, ...args)
  })
  it(`[integration] ${title}`, (...args) => {
    testFn({ parse: pack => parser([pack])[0] }, ...args)
  })
}