const PREFIX = "@inx__"

const getItem = (key: string): string | null => {
  return localStorage.getItem(`${PREFIX}${key}`)
}

const setItem = (key: string, value: string): void => {
  localStorage.setItem(`${PREFIX}${key}`, value)
}

const set = <T>(key: string, getValue: (current: T | undefined) => T) => {
  let currentParsed
  try {
    const current = getItem(key)
    if (current) {
      currentParsed = (JSON.parse(current) as T)
    }
  } catch (e) {
    console.log('ERROR: cannot set storage', e)
  }

  const newVal = getValue(currentParsed)
  setItem(key, JSON.stringify(newVal))
}

const get = <T>(key: string): T | null => {
  const val = getItem(key)
  try {
    if (val) {
      return JSON.parse(val) as T
    } else {
      return null
    }
  } catch (e) {
    return null
  }
}

const ls = {
  get,
  set,
  getItem,
  setItem,
}

export default ls
