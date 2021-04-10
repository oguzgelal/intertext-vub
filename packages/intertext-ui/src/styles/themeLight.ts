import colors from 'tailwindcss/colors'
import { Theme } from 'revitail/src/styles/types'
import { getTailwindColorsAsScale } from 'revitail/src/styles/themeUtils'

const themeLight: Theme = {
  // color scales
  '--scale-gray': getTailwindColorsAsScale(colors.gray),
  '--scale-accent': getTailwindColorsAsScale(colors.fuchsia),
  '--scale-error': getTailwindColorsAsScale(colors.red),
  '--scale-warning': getTailwindColorsAsScale(colors.orange),
  '--scale-success': getTailwindColorsAsScale(colors.green),
  '--scale-info': getTailwindColorsAsScale(colors.lightBlue),

  // color text
  '--color-text': 'var(--scale-gray-600)',
  '--color-text-muted': 'var(--scale-gray-400)',
  '--color-text-code': 'var(--scale-gray-100)',
  '--color-text-hover': 'var(--scale-gray-900)',

  // color input
  '--color-input-bg': colors.white,
  '--color-input-border': 'var(--scale-gray-300)',
  '--color-input-text': 'var(--color-text)',

  // color buttons
  '--color-button-bg': colors.white,
  '--color-button-border': 'var(--scale-gray-300)',
  '--color-button-hover': 'var(--scale-gray-50)',
  '--color-button-text': 'var(--color-text)',
  '--color-button-text-hover': 'var(--color-text-hover)',

  // color background
  '--color-bg-code': 'var(--scale-gray-100)',
}

export default themeLight
