import { theme, extendTheme } from "@chakra-ui/react"
import { Intent } from './types'
import { InxText } from '../components/core/Text/styles'
import { InxBlock } from '../components/core/Block/styles'

const themeExtended = extendTheme({
  config: {
    cssVarPrefix: "inx",
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  colors: {
    [Intent.DEFAULT]: theme.colors.gray,
    [Intent.PRIMARY]: theme.colors.blue,
    [Intent.SECONDARY]: theme.colors.blue,
    [Intent.ERROR]: theme.colors.red,
    [Intent.SUCCESS]: theme.colors.green,
    [Intent.WARNING]: theme.colors.orange,
    [Intent.INFO]: theme.colors.cyan,
  },
  components: {
    InxText,
    InxBlock,
  }
})

console.log('themeExtended', themeExtended)

export default themeExtended