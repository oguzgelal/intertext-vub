import { ComponentMultiStyleConfig } from "@chakra-ui/theme";
import { mode, getColor, transparentize } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"

const getBgColor = (props: Dict) => {
  const c = props.colorScheme;
  if (!c) return mode('white', 'black')(props)
  return transparentize(getColor(props.theme, `${c}.400`), 0.15)(props.theme)
}

const getBorderColor = (props: Dict) => {
  const c = props.colorScheme;
  if (!c) return mode('white', 'black')(props)
  return `${c}.400`
}

export const InxBlock: ComponentMultiStyleConfig = {
  parts: ['base', 'container', 'pocketLeft', 'pocketRight'],
  baseStyle: props => ({
    base: {
      p: 2,
      bg: getBgColor(props),
      borderRadius: 'lg',
      borderWidth: 2,
      borderColor: getBorderColor(props),
      marginTop: 2,
      marginBottom: 2,
      '&:first-child': {
        marginTop: 0,
      },
      '&:last-child': {
        marginBottom: 0,
      }
    },
    container: {
    },
    pocketLeft: {
    },
    pocketRight: {
    },
  })
}