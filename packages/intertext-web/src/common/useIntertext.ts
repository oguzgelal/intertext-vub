import { useEffect, useState, useCallback } from "react"
import { Branch } from "@intertext/engine"
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
   * `execute`: Do not change the UI, execute response as a command
   * `ignore`: Do not change the UI, ignore response
   */
  strategy?: "replace" | "append" | "prepend" | "execute" | "ignore"

  /**
   * True if the request is based off of the `navigate` command
   */
  navigate?: boolean
}

const useIntertext = () => {
  const toast = useToast()

  const [url, urlSet] = useState("")
  const [loading, loadingSet] = useState(false)
  const [packages, packagesSet] = useState<Branch[] | null>(null)
  const [onloadBlock, onloadBlockSet] = useState(false)

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
          state: storage.get("state"),
          persist: storage.get("persist"),
          inputState: storage.get("inputState"),
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
            storage.set("inputState", () => ({}))
          }

          if (strategy === "replace") {
            packagesSet(res)
          } else if (strategy === "append") {
            packagesSet([...(packages || []), ...res])
          } else if (strategy === "prepend") {
            packagesSet([...res, ...(packages || [])])
          } else if (strategy === "execute") {
            engine.runner.run({ branch: res })
          } else if (strategy === "ignore") {
            /** do not make any changes, ignore res */
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
    [toast, packages, packagesSet]
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
      console.log(">>", props, !!props.clear)
      const key = props.persist ? "persist" : "state"
      if (props.clear) {
        storage.set<Record<string, unknown>>(key, (state = {}) => {
          const currentState = { ...state }
          delete currentState[props.key]
          return currentState
        })
      } else if (!props.state || props.state === "") {
        const currentState = storage.get<Record<string, undefined>>(key) ?? {}
        return currentState[props.key]
      } else {
        storage.set<Record<string, unknown>>(key, (state = {}) => ({
          ...state,
          [props.key]: props.state,
        }))
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
  }, [url, request])

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

  /**
   * Reset necessary states on mount
   */
  useEffect(() => {
    storage.set("state", () => ({}))
    storage.set("inputState", () => ({}))
  }, [])

  return {
    url,
    urlSet,
    loading,
    packages,
    request,
  }
}

export default useIntertext
