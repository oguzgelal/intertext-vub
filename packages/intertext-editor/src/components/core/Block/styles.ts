import { ComponentMultiStyleConfig } from "@chakra-ui/theme";
import { getColor, transparentize } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"
import { iff } from "../../../common/utils/conditions";

const getBgColor = (props: Dict) => {
  const c = props.__intent;
  if (!c) return 'transparent'
  return transparentize(getColor(props.theme, `${c}.400`), 0.15)(props.theme)
}

const getBorderColor = (props: Dict) => {
  const c = props.__intent;
  if (!c) return 'transparent'
  return `${c}.400`
}

const getIntentStyles = (props: Dict) => {
  const c = props.__intent;
  if (!c) return {}
  return {
    p: 2,
    bg: getBgColor(props),
    borderColor: getBorderColor(props),
    borderRadius: 'lg',
    borderWidth: 2,
  }
}

export const InxBlock: ComponentMultiStyleConfig = {
  parts: ['base', 'container', 'pocketLeft', 'pocketRight'],
  baseStyle: props => ({
    base: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 4,
      marginBottom: 4,
      '&:first-child': {
        marginTop: 0,
      },
      '&:last-child': {
        marginBottom: 0,
      }
    },
    container: {
      ...getIntentStyles(props),
      ...iff<object>([props.__block_grow, { flexGrow: 1 }])({})
    },
    pocketLeft: {
      marginRight: 3,
    },
    pocketRight: {
      marginLeft: 3,
    },
  })
}