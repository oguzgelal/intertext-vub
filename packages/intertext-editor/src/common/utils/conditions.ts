import { merge as _merge } from 'lodash'
import { SystemStyleObject, ThemingPropsThunk } from '@chakra-ui/react';

export const first = <T>(...args: [boolean, T][]) => (fallback?: T): T | undefined => {
  for(let ind in args) {
    const current = args[ind]
    if (current[0]) return current[1]
  }
  return fallback
}

export const apply = (
  parameters: Record<string, Record<string, unknown>>,
  conditions: Record<string, unknown>
): Record<string, unknown> => {
  return Object.keys(parameters).reduce((acc, key) => (
    !!conditions[key]
      ? { ...acc, ...parameters[key] }
      : {}
  ), {})
}

export const merge = (...styles: ThemingPropsThunk<SystemStyleObject>[]) => {
  return _merge({}, ...styles)
}