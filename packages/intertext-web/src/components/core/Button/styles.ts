import { ComponentMultiStyleConfig } from "@chakra-ui/theme";
import { mode } from "@chakra-ui/theme-tools"
import { Intent } from "@intertext/engine";

export const InxButton: ComponentMultiStyleConfig = {
  parts: ['base'],
  baseStyle: props => {
    const c: Intent = props.__intent ?? 'default';
    return {
      base: {
        bg: mode(`${c}.300`, `${c}.500`)(props),
        '&:hover': {
          bg: mode(`${c}.400`, `${c}.600`)(props),
        }
      }
    }
  }
}