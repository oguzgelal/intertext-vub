import { ComponentStyles, BaseVariants, VariantProps } from './../../../common/types'

export type TypographyVariants = BaseVariants<{
  bold?: VariantProps
  italic?: VariantProps
  underlined?: VariantProps
  muted?: VariantProps
  block?: VariantProps
}>

export const Text: ComponentStyles<TypographyVariants> = {
  variants: {
    bold: {
      fontWeight: 'bold'
    }
  }
}

export const Heading: ComponentStyles<TypographyVariants> = {
  variants: {}
}