import { theme, extendTheme } from "@chakra-ui/react"
import { Intent } from '@intertext/engine'
import { InxText } from '../components/core/Text/styles'
import { InxBlock } from '../components/core/Block/styles'
import { InxGrid } from '../components/core/Grid/styles'
import { InxCollapse } from '../components/core/Collapse/styles'

const colors: Record<Intent, Record<number, string>> = {
  'default': theme.colors.gray,
  'primary': theme.colors.blue,
  'error': theme.colors.red,
  'success': theme.colors.green,
  'warning': theme.colors.orange,
  'info': theme.colors.cyan,
}

export default extendTheme({
  config: {
    cssVarPrefix: "inx",
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  colors,
  components: {
    InxText,
    InxBlock,
    InxGrid,
    InxCollapse,
  }
})