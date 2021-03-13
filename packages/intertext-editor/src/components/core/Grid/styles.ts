import { ComponentMultiStyleConfig } from "@chakra-ui/theme";
import { Size } from '../../../common/types';
import { first } from './../../../common/utils/conditions'

export const InxGrid: ComponentMultiStyleConfig = {
  parts: ['base'],
  baseStyle: props => ({
    base: {
      marginTop: 4,
      marginBottom: 4,
      '& > *': {
        marginTop: '0 !important',
        marginBottom: '0 !important',
      },
      gridGap: first(
        [props.__gap === Size.LARGE, 12],
        [props.__gap === Size.MEDIUM, 9],
        [props.__gap === Size.SMALL, 6],
        [props.__gap === Size.XSMALL, 3],
      )(2)
    }
  })
}