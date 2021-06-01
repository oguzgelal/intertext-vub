// @ts-nocheck
import React, { FC, useEffect, useMemo } from "react"
import {
  Box,
  Button,
  Input as InputChakra,
  Text,
  Spinner,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react"
import { ArrowForwardIcon, SearchIcon, LinkIcon } from "@chakra-ui/icons"
import Input from "../components/core/Input/Input"
import Select from "../components/core/Select/Select"
import useIntertext from "../common/useIntertext"
import useColorMode from "../utils/colorMode"
import engine from "../common/engine"
import storage from "../common/storage"

type SearchProps = {}

const CenterText = ({ children }: { children: any }) => {
  const mode = useColorMode()
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Text
        display="flex"
        alignItems="center"
        justifyContent="center"
        color={mode("gray.300", "gray.700")}
      >
        {children}
      </Text>
    </Box>
  )
}

const shortcuts = [
  {
    title: "Demo",
    url: "https://intertext-backend-demo.herokuapp.com/demo",
  },
  {
    title: "Demo (local)",
    url: "http://localhost:8008/demo",
  },
  {
    title: "Recipes (local)",
    url: "http://localhost:8008/recipes",
  },
]

const Search: FC<SearchProps> = () => {
  const mode = useColorMode()

  const { url, urlSet, request, loading, packages } = useIntertext()

  /**
   * Register input renderer, integrate it with
   * the inputState
   */
  useEffect(() => {
    engine.renderer.registerInputRenderer(({ index, children, props }) => {
      const currentInputState =
        storage.get<Record<string, string>>("inputState") ?? {}
      return (
        <Input
          {...props}
          key={index}
          value={currentInputState[props.name]}
          onChange={(str) => {
            storage.set("inputState", (current = {}) => ({
              ...current,
              [props.name]: str,
            }))
          }}
        >
          {children}
        </Input>
      )
    })

    engine.renderer.registerSelectRenderer(({ index, children, props }) => {
      const currentInputState =
        storage.get<Record<string, string>>("inputState") ?? {}
      return (
        <Select
          {...props}
          key={index}
          value={currentInputState[props.name]}
          onChange={(str) => {
            storage.set("inputState", (current = {}) => ({
              ...current,
              [props.name]: str,
            }))
          }}
        >
          {children}
        </Select>
      )
    })
  }, [])

  return (
    <Box
      display="flex"
      flexFlow="column"
      borderLeft="1px"
      borderRight="1px"
      borderColor={mode<string>("gray.200", "gray.700")}
      width="100%"
      height="100%"
    >
      {/** search bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (loading) return
          request({
            url,
            navigate: true,
            strategy: "replace",
          })
        }}
      >
        <Box
          flexShrink={0}
          height="16"
          borderBottom="1px"
          borderColor={mode<string>("gray.200", "gray.700")}
          display="flex"
          alignItems="center"
          pl="4"
          pr="4"
          background={mode<string>("gray.50", "gray.900")}
        >
          <InputChakra
            value={url}
            disabled={loading}
            flexGrow={1}
            placeholder="https://..."
            background={mode<string>("white", "gray.800")}
            onChange={(e) => urlSet(e.target.value)}
          />
          <Button
            type="submit"
            disabled={loading}
            marginLeft="2"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
          >
            Go
          </Button>
          <Popover>
            <PopoverTrigger>
              <Button marginLeft="2" colorScheme="blue" variant="ghost">
                ?
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverHeader>Demo Links</PopoverHeader>
              <PopoverBody>
                {shortcuts.map((shortcut) => (
                  <Button
                    w="100%"
                    size="sm"
                    colorScheme="blue"
                    variant="ghost"
                    onClick={() => urlSet(shortcut.url)}
                    rightIcon={<LinkIcon w="3" />}
                  >
                    {shortcut.title}
                  </Button>
                ))}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </form>

      {/** contents */}
      <Box p="4" flexGrow={1} overflow="auto">
        {loading && (
          <CenterText>
            <Spinner size="xs" marginRight="2" />
            Loading
          </CenterText>
        )}
        {!loading && !packages && (
          <CenterText>
            <SearchIcon size="xs" marginRight="2" />
            Visit a URL to get started
          </CenterText>
        )}
        {/* For now, do not re-render when state values changes */}
        {useMemo(() => {
          if (!loading && packages) {
            return engine.renderer.render({ branch: packages })
          } else {
            return null
          }
        }, [loading, packages])}
      </Box>
    </Box>
  )
}

export default Search
