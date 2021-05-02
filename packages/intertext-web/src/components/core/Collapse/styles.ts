import { ComponentMultiStyleConfig } from "@chakra-ui/theme";

export const InxCollapse: ComponentMultiStyleConfig = {
  parts: ['base'],
  baseStyle: () => ({
    base: {
      marginTop: 4,
      marginBottom: 4,
      border: '1px',
      borderRadius: '8',
      borderColor: 'rgba(0, 0, 0, .03)',
      overflow: 'hidden',
    }
  })
}