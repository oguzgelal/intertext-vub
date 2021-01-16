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
      @media (max-width: 1312px) {
        ${styles}
      }
    `}
    ${bpArr.includes('medium') && css`
      @media (max-width: 992px) {
        ${styles}
      }
    `}
    ${bpArr.includes('small') && css`
      @media (max-width: 688px) {
        ${styles}
      }
    `}
  `;
}

export default media;