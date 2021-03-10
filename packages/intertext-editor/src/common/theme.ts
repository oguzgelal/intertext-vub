import { theme, extendTheme } from "@chakra-ui/react"
import { Intent } from './types'
import { Text, Heading } from '../components/core/Text/styles'

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
    Text,
    Heading
  }
})

console.log('themeExtended', themeExtended)

export default themeExtended