import {
  ComponentSingleStyleConfig,
  ThemingPropsThunk,
  CSSObject,
} from '@chakra-ui/react'

export enum Intent {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

export enum Size {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  XSMALL = 'xsmall',
}

export enum Alignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export type Vars<T> = Partial<Record<keyof T, boolean | undefined>>

export type VariantProps = ThemingPropsThunk<CSSObject> | undefined

export type BaseVariants<T> = Partial<Record<Intent, VariantProps>> & T

export type ComponentStyles<T> = ComponentSingleStyleConfig & {
  variants: T
}