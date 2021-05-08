import { useEffect, useState, useCallback } from "react"
import { Branch, Command } from "@intertext/engine"
import { useToast } from "@chakra-ui/react"
import engine from "./engine"
import storage from "../common/storage"
import {
  splitUrl,
  resolveUrl,
  getInxUrlFromWindowLocHref,
  setInxUrlToWinLocHref,
} from "../utils/url"

type ReqTypes = {
  /**
   * Request url
   */
  url: string

  /**
   * What to do with the response
   * `replace`: Replace response with current page content (default)
   * `append`: Append responses to the end of the page
   * `prepend`: Prepend responses to the beginning of the page
   */
  strategy?: "replace" | "append" | "prepend"

  /**
   * True if the request is based off of the `navigate` command
   */
  navigate?: boolean
}

const useIntertext = () => {
  const toast = useToast()

  const [state, stateSet] = useState<Record<string, unknown>>({})
  const [url, urlSet] = useState("")
  const [loading, loadingSet] = useState(false)
  const [packages, packagesSet] = useState<Branch[] | null>(null)
  const [inputState, inputStateSet] = useState<Record<string, string>>({})
  const [onloadBlock, onloadBlockSet] = useState(false)

  /**
   * Set the value of an input field
   */
  const setInputValue = useCallback(
    (name: string, value: string) =>
      inputStateSet({
        ...inputState,
        [name]: value,
      }),
    [inputState, inputStateSet]
  )

  /**
   * Get URL origin
   */
  useEffect(() => {
    const [origin] = splitUrl(url)
    if (origin) {
      // set base URL so it can be accessed other
      // components or renderers when needed
      storage.setItem("urlBase", origin)
    }
  }, [url])

  /**
   * Generic request function
   */
  const request = useCallback(
    ({ url, strategy = "replace", navigate = false }: ReqTypes) => {
      const [origin, path] = splitUrl(url)

      if (!origin) {
        throw new Error("URL not set")
      }

      const fullUrl = `${origin}${path}`

      // update inx address bar
      urlSet(fullUrl)

      // update browser address bar and state
      // allow further onload events
      if (navigate) {
        onloadBlockSet(false)
        setInxUrlToWinLocHref(fullUrl)
      }

      loadingSet(true)
      fetch(fullUrl, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          state,
          inputState,
        }),
      })
        .then((response) => response.text())
        .then((out) => engine.parseXml(out))
        .then((res) => {
          if (!res || res.length === 0) {
            console.warn("Server returned empty response")
            return
          }

          if (strategy === "replace") {
            packagesSet(res)
          } else if (strategy === "append") {
            packagesSet([...(packages || []), ...res])
          } else if (strategy === "prepend") {
            packagesSet([...res, ...(packages || [])])
          } else {
            throw new Error("Unknown strategy")
          }

          loadingSet(false)
        })
        .catch((err) => {
          console.log("err", err)
          loadingSet(false)
          toast({
            title: "Error",
            description: (err as Error).message ?? "Something went wrong",
            duration: 3000,
            isClosable: true,
            status: "error",
          })
        })
    },
    [toast, inputState, packages, packagesSet, state]
  )

  /**
   * Register commands
   */
  useEffect(() => {
    /**
     * Register `state` command
     * if value empty, return current state value
     * otherwise, set the client state
     */
    engine.runner.registerStateCommand(({ props }) => {
      if (!props.state || props.state === "") {
        return state[props.key]
      } else {
        stateSet({
          ...state,
          [props.key]: props.state,
        })
      }
    })

    /**
     * Register request runner
     */
    engine.runner.registerRequestCommand(({ props }) => {
      return request({
        url: resolveUrl(url, props.endpoint) ?? "",
        strategy: props.strategy,
      })
    })

    /**
     * Register navigate runner
     */
    engine.runner.registerNavigateCommand(({ props }) => {
      return request({
        url: resolveUrl(url, props.endpoint) ?? "",
        strategy: "replace",
        navigate: true,
      })
    })
  }, [url, state, stateSet, setInputValue, inputState, request])

  /**
   * Control the flow of "onload"
   * Register & unregister onload command based on the onload
   * block state. Below effect will run every time onload block state
   * is toggled, thus the flow can also be controlled programmatically
   */
  useEffect(() => {
    if (!onloadBlock) {
      onloadBlockSet(true)
      engine.runner.registerOnLoadCommand(({ props }) => {
        engine.runner.registerOnLoadCommand(() => null)
        engine.runner.run({ branch: props.onload })
      })
    }
  }, [onloadBlock, onloadBlockSet])

  /**
   * Set URL from url address bar
   */
  useEffect(() => {
    const triggerNavChange = () => {
      const currentUrl = getInxUrlFromWindowLocHref()
      if (currentUrl) {
        urlSet(currentUrl)
        request({ url: currentUrl })
      }
    }

    triggerNavChange()
    window.onpopstate = triggerNavChange

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    url,
    urlSet,
    state,
    stateSet,
    inputState,
    setInputValue,
    loading,
    packages,
    request,
  }
}

export default useIntertext
