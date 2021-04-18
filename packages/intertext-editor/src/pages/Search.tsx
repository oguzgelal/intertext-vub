import React, { FC } from "react"
import { Box, Input, Button } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import useColorMode from "../utils/colorMode"
import Stage from './Stage'

type SearchProps = {}

const Search: FC<SearchProps> = () => {
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
            flexGrow={1}
            placeholder="https://..."
            background={mode<string>("white", "gray.800")}
          />
          <Button
            marginLeft="2"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
          >
            Go
          </Button>
        </Box>
      </form>
      
      {/** contents */}
      <Box
        p="4"
        flexGrow={1}
        overflow="auto"
      >
        <Stage />
      </Box>
    </Box>
  )
}

export default Search
