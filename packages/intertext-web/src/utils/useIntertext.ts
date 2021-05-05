import { useState } from "react"
import { Branch } from "@intertext/engine"
import { useToast } from "@chakra-ui/react"
import engine from "../common/engine"

type ReqTypes = {
  /**
   * Internal navigation
   */
  path: string

  /**
   * What to do with the response
   * `replace`: Replace response with current page content (default)
   * `append`: Append responses to the end of the page
   * `prepend`: Prepend responses to the beginning of the page
   */
  strategy?: "replace" | "append" | "prepend",
}

const useIntertext = () => {
  const [url, urlSet] = useState("")
  const [loading, loadingSet] = useState(false)
  const [packages, packagesSet] = useState<Branch[] | null>(null)
  const [inputState, inputStateSet] = useState({})

  const setInputValue = (name: string, value: string) => inputStateSet({
    ...inputState,
    [name]: value
  })

  // client state (volatile)
  const [state, stateSet] = useState(false)
  
  const toast = useToast()

  /**
   * Generic request function
   */
  const request = ({
    path,
    strategy = "replace",
  }: ReqTypes) => {
    
    if (!url) {
      throw new Error("URL not set")
    }

    if (path && path[0] !== "/") {
      throw new Error("Path needs to start with a slash")
    }

    const urlParts = new URL(url)
    const urlBase = urlParts.origin
    const urlPath = urlParts.pathname

    loadingSet(true)
    fetch(`${urlBase}${path ?? urlPath}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        state,
        inputState,
      })
    })
      .then((response) => {
        console.log('response', response)
        return response.text()
      })
      .then(engine.parseXml)
      .then((res) => {

        if (!res || res.length === 0) {
          console.warn('Server returned empty response')
          return;
        }

        if (strategy === "replace") {
          packagesSet(res)
        } else if (strategy === "append") {
          packagesSet([...(packages || []), ...res])
        } else if (strategy === 'prepend') {
          packagesSet([...res, ...(packages || [])])
        } else {
          throw new Error('Unknown strategy')
        }

        loadingSet(false)
      })
      .catch((err) => {
        console.log('err', err)
        loadingSet(false)
        toast({
          title: "Error",
          description: (err as Error).message ?? "Something went wrong",
          duration: 3000,
          isClosable: true,
          status: "error",
        })
      })
  }

  return {
    url,
    urlSet,
    state,
    stateSet,
    setInputValue,
    loading,
    packages,
    request,
  }
}

export default useIntertext
