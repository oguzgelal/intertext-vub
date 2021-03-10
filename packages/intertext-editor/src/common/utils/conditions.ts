export const iff = <T>(condition: boolean, result: T, fallback?: T): T | undefined => {
  if (condition) return result
  return fallback
}

export const chain = <T>(args: [boolean, T][], fallback?: T): T | undefined => {
  for(let ind in args) {
    const current = args[ind]
    if (current[0]) return current[1]
  }
  return fallback
}