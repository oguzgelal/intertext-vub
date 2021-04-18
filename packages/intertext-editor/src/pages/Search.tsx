import React, { FC, useState } from "react"
import { Box, Input, Button, Text, Spinner } from "@chakra-ui/react"
import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons"
import useColorMode from "../utils/colorMode"
import Stage from "./Stage"

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

const Search: FC<SearchProps> = () => {
  const [loading, loadingSet] = useState(false)
  const mode = useColorMode()

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
          if (loading) {
            return
          }
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
          <Input
            disabled={loading}
            flexGrow={1}
            placeholder="https://..."
            background={mode<string>("white", "gray.800")}
          />
          <Button
            disabled={loading}
            marginLeft="2"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
          >
            Go
          </Button>
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
        {!loading && (
          <CenterText>
            <SearchIcon size="xs" marginRight="2" />
            Visit a URL to get started
          </CenterText>
        )}
      </Box>
    </Box>
  )
}

export default Search
