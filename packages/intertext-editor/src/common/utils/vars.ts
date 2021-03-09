import { Intent, Vars } from "../types"

type EmptyObj = {}
type PrepareSettings = {
  intent?: Intent
}

const handleIntents = (
  intent?: Intent
): EmptyObj | Record<keyof Intent, boolean> => {
  if (!intent) return {}
  return {
    default: intent === Intent.DEFAULT,
    error: intent === Intent.ERROR,
    info: intent === Intent.INFO,
    primary: intent === Intent.PRIMARY,
    secondary: intent === Intent.SECONDARY,
    success: intent === Intent.SUCCESS,
    warning: intent === Intent.WARNING,
  }
}

export const vars = <T>(
  args: Vars<T>,
  settings?: PrepareSettings
): (keyof T)[] => {
  const useArgs = {
    ...args,
    ...handleIntents(settings?.intent),
  }

  return Object.keys(useArgs).filter(
    (key) => !!useArgs[key as keyof T]
  ) as (keyof T)[]
}
