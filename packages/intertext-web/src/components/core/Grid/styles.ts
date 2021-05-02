import { ComponentMultiStyleConfig } from "@chakra-ui/theme";

export const InxGrid: ComponentMultiStyleConfig = {
  parts: ['base'],
  baseStyle: () => ({
    base: {
      marginTop: 2,
      marginBottom: 2,
      '& > *': {
        marginTop: '0 !important',
        marginBottom: '0 !important',
      }
    }
  })
}