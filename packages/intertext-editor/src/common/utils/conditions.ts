export const iff = <T>(...args: [boolean, T][]) => (fallback?: T): T | undefined => {
  for(let ind in args) {
    const current = args[ind]
    if (current[0]) return current[1]
  }
  return fallback
}