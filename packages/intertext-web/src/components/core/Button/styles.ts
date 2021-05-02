import { ComponentMultiStyleConfig } from "@chakra-ui/theme";
import { getColor } from "@chakra-ui/theme-tools"
import { Intent } from "@intertext/engine";

export const InxButton: ComponentMultiStyleConfig = {
  parts: ['base'],
  baseStyle: props => {
    const c: Intent = props.__intent ?? 'default';
    return {
      base: {
        bg: getColor(props.theme, `${c}.300`),
        '&:hover': {
          bg: getColor(props.theme, `${c}.400`),
        }
      }
    }
  }
}