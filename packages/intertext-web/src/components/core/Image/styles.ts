import { ComponentMultiStyleConfig } from "@chakra-ui/theme";
import { merge } from './../../../utils/conditions'

export const InxImage: ComponentMultiStyleConfig = {
  parts: ['base'],
  baseStyle: props => {

    /**
     * base styles
     */
    const base = merge({})

    return {
      base
    }
  }
}