import { Alignment } from '../../style/values';
import { c } from '../values';

/**
 * Utility function to attach alignment classnames
 * to a component.
 */
export const attachAlignmentClasses = ({ align } : {
  align?: Alignment
}): Record<string, boolean> => {
  
  const isLeft = align === Alignment.LEFT
  const isCenter = align === Alignment.CENTER
  const isRight = align === Alignment.RIGHT

  return {
    [c.ALIGN_LEFT.name]: isLeft,
    [c.ALIGN_CENTER.name]: isCenter,
    [c.ALIGN_RIGHT.name]: isRight,
  }
};
