import { ComponentMultiStyleConfig } from "@chakra-ui/theme";

export const InxCollapse: ComponentMultiStyleConfig = {
  parts: ['base'],
  baseStyle: () => ({
    base: {
      marginTop: 4,
      marginBottom: 4,
    }
  })
}