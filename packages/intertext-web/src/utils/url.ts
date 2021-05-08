const KEY = 'u'

export const splitUrl = (url: string): [string | null, string | null] => {
  try {
    const urlParts = new URL(url)
    return [urlParts.origin ?? null, urlParts.pathname ?? null]
  } catch (e) {
    return [null, null]
  }
}

export const resolveUrl = (currentFullUrl: string, newPath: string): string | null => {
  const [origin] = splitUrl(currentFullUrl)
  if (origin) {
    if (newPath && newPath[0] !== "/") {
      throw new Error("Path needs to start with a slash")
    }
    return `${origin}${newPath}`    
  }
  
  return null
}

export const getInxUrlFromWindowLocHref = (): string | null => {
  const currentUrl = window.location.href
  try {
    const currentUrlObj = new URL(currentUrl)
    return currentUrlObj.searchParams.get(KEY) ?? null
  } catch (e) {
    return null
  }
}

export const setInxUrlToWinLocHref = (url: string) => {
  const winHref = new URL(window.location.href);
  winHref.searchParams.set(KEY, url);
  window.history.pushState({}, '', winHref.href);
}