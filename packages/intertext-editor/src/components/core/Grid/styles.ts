import { ComponentMultiStyleConfig } from "@chakra-ui/theme";

export const InxGrid: ComponentMultiStyleConfig = {
  parts: ['base'],
  baseStyle: props => ({
    base: {
      marginTop: 4,
      marginBottom: 4,
      '& > *': {
        marginTop: '0 !important',
        marginBottom: '0 !important',
      }
    }
  })
}