/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// run tests against both an individual parser
// and the generic parser module

export default ({ unit, integration }) => (title: string, testFn): void => {
  it(`[unit] ${title}`, (...args) => testFn({ parse: unit }, ...args));
  it(`[integration] ${title}`, (...args) => testFn({ parse: integration }, ...args))
}