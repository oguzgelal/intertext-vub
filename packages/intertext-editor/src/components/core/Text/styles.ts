import { ComponentMultiStyleConfig } from "@chakra-ui/theme";
import { mode } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"
import { merge } from './../../../common/utils/conditions'

const getTextColor = (props: Dict) => {
  const c = props.__intent ?? 'gray'
  let toneLight = 500;
  let toneDark = 200;

  if (c === 'gray') {
    toneLight = 800;
    toneDark = 100;
  }

  return mode(`${c}.${toneLight}`, `${c}.${toneDark}`)(props)
}

export const InxText: ComponentMultiStyleConfig = {
  parts: ['heading', 'text'],
  baseStyle: props => {

    /**
     * shared between heading & text
     */
    const shared = merge(
      {
        color: getTextColor(props),
      },
      props['__text_muted'] && { opacity: 0.6 },
      props['__text_bold'] && { fontWeight: "bold" },
      props['__text_italic'] && { fontStyle: "italic" },
      props['__text_underlined'] && { textDecoration: "underline" },
    );

    /**
     * heading styles
     */
    const heading = merge(
      {
        fontFamily: "heading",
        fontWeight: "bold",
      },
      shared,
      props['__text_h1'] && {
        fontSize: ["4xl", null, "5xl"],
        lineHeight: 1,
        marginTop: 12,
        marginBottom: 2, 
      },
      props['__text_h2'] && {
        fontSize: ["2xl", null, "3xl"],
        lineHeight: [1.2, null, 1],
        marginTop: 10,
        marginBottom: 1,
      },
      props['__text_h3'] && {
        fontSize: ["xl", null, "2xl"],
        lineHeight: [1.33, null, 1.2],
        marginTop: 8,
        marginBottom: 0.5,
      },
      {
        '&:first-child': {
          marginTop: 0,
        },
      }
    );

    /**
     * text styles
     */
    const text = merge(
      {
        fontSize: 'md'
      },
      shared,
    );

    return {
      heading,
      text,
    }
  }
}
