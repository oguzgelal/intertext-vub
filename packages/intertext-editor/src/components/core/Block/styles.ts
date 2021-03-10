import { ComponentMultiStyleConfig } from "@chakra-ui/theme";
import { mode, getColor, transparentize } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"

const getBgColor = (props: Dict) => {
  console.log('?????', props)
  const c = props.colorScheme;
  console.log('ccccc', c)
  if (!c) return mode('white', 'black')(props)
  return transparentize(getColor(props.theme, `${c}.300`), 0.8)(props.theme)
}

export const InxBlock: ComponentMultiStyleConfig = {
  parts: ['base', 'container', 'pocketLeft', 'pocketRight'],
  baseStyle: props => ({
    base: {
      bg: getBgColor(props)
    },
    container: {
    },
    pocketLeft: {
    },
    pocketRight: {
    },
  })
}