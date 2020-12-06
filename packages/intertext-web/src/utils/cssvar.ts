/**
 * Read CSS Variables
 * @param name CSS Variable Name
 */
export const read = (name: string) => (
  getComputedStyle(document.documentElement)
    .getPropertyValue(name)
)

/**
 * Write to a CSS Variable
 * @param name CSS Variable Name
 * @param value Value to write
 */
export const write = (name: string, value: string | number): void => {
  // TODO
}