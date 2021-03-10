import { ComponentSingleStyleConfig } from "@chakra-ui/theme";
import { mode, lighten, darken, getColor } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"

const colorSchemeDefault = (props: Dict) => {
  const { colorScheme: c } = props
  return {
    color: mode(`${c}.600`, `${c}.200`)(props)
  }
}

const variantMuted = (props: Dict) => {
  console.log('getColor', getColor(props.theme, 'current'))
  return {
    color: mode( lighten('current', 0.4), darken('current', 0.4))(props)
  }
}

export const Text: ComponentSingleStyleConfig = {
  baseStyle: props => ({
    fontSize: 'md',
    ...colorSchemeDefault(props)
  }),
  variants: {
    muted: variantMuted
  }
}

export const Heading: ComponentSingleStyleConfig = {
  baseStyle: props => ({
    ...colorSchemeDefault(props)
  }),
  sizes: {
    h1: {
      fontSize: '4xl'
    },
    h2: {
      fontSize: '2xl'
    },
    h3: {
      fontSize: 'lg'
    }
  },
  variants: {
    muted: variantMuted
  }
}