/**
 * Read CSS Variables
 * @param name CSS Variable Name
 */
export const read = (name: string) => {
  const x = getComputedStyle(document.documentElement)
  .getPropertyValue(name)
  console.log(x);
  return x;
}

/**
 * Write to a CSS Variable
 * @param name CSS Variable Name
 * @param value Value to write
 */
export const write = (name: string, value: string | number): void => {
  // TODO
}