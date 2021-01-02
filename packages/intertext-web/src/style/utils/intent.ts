import { css, SerializedStyles } from '@emotion/react/macro';
import { Intent } from '../../style/values';
import { v, c } from '../values';

/**
 * Utility function to attach intent classnames
 * to a component.
 */
export const attachIntentClasses = (intent?: Intent): Record<string, boolean> => {
  
  const isPrimary = intent === Intent.PRIMARY;
  const isSecondary = intent === Intent.SECONDARY;
  const isInfo = intent === Intent.INFO;
  const isError = intent === Intent.ERROR;
  const isWarning = intent === Intent.WARNING;
  const isSuccess = intent === Intent.SUCCESS;
  
  const isDefault = intent === Intent.DEFAULT || (
    !isPrimary &&
    !isSecondary &&
    !isInfo &&
    !isError &&
    !isWarning &&
    !isSuccess
  );
  
  return {
    [c.INTENT_DEFAULT.name]: isDefault,
    [c.INTENT_PRIMARY.name]: isPrimary,
    [c.INTENT_SECONDARY.name]: isSecondary,
    [c.INTENT_INFO.name]: isInfo,
    [c.INTENT_ERROR.name]: isError,
    [c.INTENT_WARNING.name]: isWarning,
    [c.INTENT_SUCCESS.name]: isSuccess,
  }
};

/**
 * Utility function to apply intent styles for all
 * intents at once.
 */
type StyleTypes = {
  intent: Intent,
  vColor: string,
  vColorHover: string,
  vColorMuted: string,
  vColorInverted: string,
}
export const applyIntentStyles = (
  fn: (args: StyleTypes) => SerializedStyles,
  { selector }:
  { selector?: (selector: string) => string }
): SerializedStyles => {
  
  // selector modifier function
  const selectorFn = selector ? selector : (n: string) => `.${n}`;
  
  console.log('>', v.COLOR_PRIMARY.name)
  console.log('->', getComputedStyle(document.documentElement).getPropertyValue('--inx-color-primary'))

  return css`
    ${selectorFn(c.INTENT_PRIMARY.name)} {
      ${fn({
        intent: Intent.PRIMARY,
        vColor: v.COLOR_PRIMARY.name,
        vColorHover: v.COLOR_PRIMARY_HOVER.name,
        vColorMuted: v.COLOR_PRIMARY_MUTED.name,
        vColorInverted: v.COLOR_PRIMARY_INVERTED.name,
      })}
    }
    ${selectorFn(c.INTENT_SECONDARY.name)} {
      ${fn({
        intent: Intent.SECONDARY,
        vColor: v.COLOR_SECONDARY.name,
        vColorHover: v.COLOR_SECONDARY_HOVER.name,
        vColorMuted: v.COLOR_SECONDARY_MUTED.name,
        vColorInverted: v.COLOR_SECONDARY_INVERTED.name,
      })}
    }
    ${selectorFn(c.INTENT_INFO.name)} {
      ${fn({
        intent: Intent.INFO,
        vColor: v.COLOR_INFO.name,
        vColorHover: v.COLOR_INFO_HOVER.name,
        vColorMuted: v.COLOR_INFO_MUTED.name,
        vColorInverted: v.COLOR_INFO_INVERTED.name,
      })}
    }
    ${selectorFn(c.INTENT_ERROR.name)} {
      ${fn({
        intent: Intent.ERROR,
        vColor: v.COLOR_ERROR.name,
        vColorHover: v.COLOR_ERROR_HOVER.name,
        vColorMuted: v.COLOR_ERROR_MUTED.name,
        vColorInverted: v.COLOR_ERROR_INVERTED.name,
      })}
    }
    ${selectorFn(c.INTENT_WARNING.name)} {
      ${fn({
        intent: Intent.WARNING,
        vColor: v.COLOR_WARNING.name,
        vColorHover: v.COLOR_WARNING_HOVER.name,
        vColorMuted: v.COLOR_WARNING_MUTED.name,
        vColorInverted: v.COLOR_WARNING_INVERTED.name,
      })}
    }
    ${selectorFn(c.INTENT_SUCCESS.name)} {
      ${fn({
        intent: Intent.SUCCESS,
        vColor: v.COLOR_SUCCESS.name,
        vColorHover: v.COLOR_SUCCESS_HOVER.name,
        vColorMuted: v.COLOR_SUCCESS_MUTED.name,
        vColorInverted: v.COLOR_SUCCESS_INVERTED.name,
      })}
    }
  `
}