const PREFIX = '@inx__'

const getItem = (key: string): string | null => {
  return localStorage.getItem(`${PREFIX}${key}`)
}

const setItem = (key: string, value: string): void => {
  localStorage.setItem(`${PREFIX}${key}`, value)
}

const ls = {
  getItem,
  setItem
}

export default ls