import { css, SerializedStyles } from '@emotion/react/macro';
import { v } from '../values';

type Breakpoints = (
  'small' |
  'medium' |
  'large'
)

export const media = (
  bp: Breakpoints | Breakpoints[],
  styles: SerializedStyles
): SerializedStyles => {

  const bpArr: Breakpoints[] = Array.isArray(bp)
    ? bp
    : [bp];

  return css`
    ${bpArr.includes('large') && css`
      @media (max-width: ${v.BREAKPOINT_LARGE.value}) {
        ${styles}
      }
    `}
    ${bpArr.includes('medium') && css`
      @media (max-width: ${v.BREAKPOINT_MEDIUM.value}) {
        ${styles}
      }
    `}
    ${bpArr.includes('small') && css`
      @media (max-width: ${v.BREAKPOINT_SMALL.value}) {
        ${styles}
      }
    `}
  `
}

export default media;