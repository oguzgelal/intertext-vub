import { Dict } from "@chakra-ui/utils"
import { ComponentMultiStyleConfig } from "@chakra-ui/theme";
import { mode } from "@chakra-ui/theme-tools"
import { merge } from './../../../utils/conditions'

const getIntentStyles = (props: Dict) => {
  const c = props.__intent;
  if (!c) return {}
  return {
    // bg: getBgColor(props),
    // borderColor: getBorderColor(props),
    // borderRadius: 'lg',
    // borderWidth: 2,
    // padding: 2,
  }
}

export const InxInput: ComponentMultiStyleConfig = {
  parts: ['base'],
  baseStyle: props => {

    /**
     * base styles
     */
    const base = merge(
      {
        display: 'flex',
        backgroundColor: mode('white', 'gray.800')(props),
        marginTop: 2,
        marginBottom: 2,
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        }
      },
      getIntentStyles(props),
    )

    return {
      base
    }
  }
}