import * as React from "react"
import { ChakraProvider, Grid, Box } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../components/ColorModeSwitcher"
import theme from '../common/theme'
import Stage from './Stage'

console.log('theme', theme)

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Box
          justifySelf="center"
          w={{ base: '100%', md: '75%', lg: '50%' }}
        >
          <Stage />
        </Box>
      </Grid>
    </Box>
  </ChakraProvider>
)
