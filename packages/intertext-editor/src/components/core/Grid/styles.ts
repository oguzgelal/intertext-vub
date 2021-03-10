import { ComponentMultiStyleConfig } from "@chakra-ui/theme";
import { iff } from './../../../common/utils/conditions'
import { Size } from '../../../common/types';

export const InxGrid: ComponentMultiStyleConfig = {
  parts: ['base'],
  baseStyle: props => ({
    base: {
      marginTop: 4,
      marginBottom: 4,
      '& > *': {
        margin: 0,
      },
      gridGap: iff(
        [props.__gap === Size.LARGE, 12],
        [props.__gap === Size.MEDIUM, 9],
        [props.__gap === Size.SMALL, 6],
        [props.__gap === Size.XSMALL, 3],
      )(2)
    }
  })
}