import { ComponentSingleStyleConfig } from "@chakra-ui/theme";
import { mode, getColor, lighten, darken } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"

const getTextColor = (props: Dict, delta?: number) => {
  const c = props.colorScheme ?? 'gray'
  let toneLight = 600;
  let toneDark = 200;

  if (c === 'gray') {
    toneLight = 800;
    toneDark = 100;
  }

  toneLight += delta ?? 0
  toneDark += delta ?? 0

  return mode(`${c}.${toneLight}`, `${c}.${toneDark}`)(props)
}

const variantMuted = (props: Dict) => {
  const currentColor = getTextColor(props, mode(-400, 400)(props))
  const currentColorValue = getColor(props.theme, currentColor)
  return {
    color: mode(
      lighten(currentColorValue, 0.9)(props.theme),
      darken(currentColorValue, 0.9)(props.theme)
    )(props)
  }
}

export const Text: ComponentSingleStyleConfig = {
  baseStyle: props => ({
    fontSize: 'md',
    color: getTextColor(props)
  }),
  variants: {
    muted: variantMuted
  }
}

export const Heading: ComponentSingleStyleConfig = {
  baseStyle: props => ({
    color: getTextColor(props)
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
    muted: props => variantMuted(props)
  }
}