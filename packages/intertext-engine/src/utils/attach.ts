const attach = (
  obj: Record<string, unknown>,
  key: string,
  value: unknown
): void => {
  if (value) {
    obj[key] = value
  }
}

export default attach;