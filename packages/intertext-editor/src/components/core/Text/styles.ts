import { ComponentMultiStyleConfig } from "@chakra-ui/theme";
import { mode, getColor, lighten, darken } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"
import { chain } from './../../../common/utils/conditions';

const getTextColor = (props: Dict, delta?: number) => {
  const c = props.colorScheme ?? 'gray'
  let toneLight = 600;
  let toneDark = 200;

  if (c === 'gray') {
    toneLight = 800;
    toneDark = 100;
  }

  toneLight += delta ?? 0
  toneDark += delta ?? 0

  return mode(`${c}.${toneLight}`, `${c}.${toneDark}`)(props)
}

const getMutedColor = (props: Dict) => {
  const currentColor = getTextColor(props, mode(-400, 400)(props))
  const currentColorValue = getColor(props.theme, currentColor)
  return mode(
    lighten(currentColorValue, 0.9)(props.theme),
    darken(currentColorValue, 0.9)(props.theme)
  )(props)
}

export const InxText: ComponentMultiStyleConfig = {
  parts: ['heading', 'text'],
  baseStyle: props => {
    const shared = {
      color: chain(
        [[props['__text_muted'], getMutedColor(props)]],
        getTextColor(props)
      )
    }

    return {
      heading: {
        ...shared,
        fontFamily: "heading",
        fontWeight: "bold",
        ...chain([
          [props['__text_h1'], {
            fontSize: ["4xl", null, "5xl"],
            lineHeight: 1,
            marginTop: 12,
            marginBottom: 2, 
          }],
          [props['__text_h2'], {
            fontSize: ["2xl", null, "3xl"],
            lineHeight: [1.2, null, 1],
            marginTop: 8,
            marginBottom: 1,
          }],
          [props['__text_h3'], {
            fontSize: ["xl", null, "2xl"],
            lineHeight: [1.33, null, 1.2],
            marginTop: 6,
            marginBottom: 0.5,
          }]
        ]),
      },
      text: {
        ...shared,
        fontSize: 'md'
      },
    }
  }
}
