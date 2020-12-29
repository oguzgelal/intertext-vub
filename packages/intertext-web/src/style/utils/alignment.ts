import { Alignment } from '../../style/values';
import { c } from '../values';

/**
 * Utility function to attach alignment classnames
 * to a component.
 */
export const attachAlignmentClasses = (alignment?: Alignment): Record<string, boolean> => {
  
  const isLeft = alignment === Alignment.LEFT
  const isCenter = alignment === Alignment.CENTER
  const isRight = alignment === Alignment.RIGHT

  return {
    [c.ALIGN_LEFT.name]: isLeft,
    [c.ALIGN_CENTER.name]: isCenter,
    [c.ALIGN_RIGHT.name]: isRight,
  }
};
