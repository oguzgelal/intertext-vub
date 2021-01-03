import { css, SerializedStyles } from '@emotion/react/macro';
import { Intent } from '../../style/values';
import { v, c } from '../values';

/**
 * Utility function to attach intent classnames
 * to a component.
 */
export const attachIntentClasses = ({ intent, exclude }: {
    intent?: Intent,
    exclude?: (selector: string) => boolean,
  }
): Record<string, boolean> => {

  const excludeFn = exclude ? exclude : () => false;
  
  const isPrimary = !excludeFn(Intent.PRIMARY) && intent === Intent.PRIMARY;
  const isSecondary = !excludeFn(Intent.SECONDARY) && intent === Intent.SECONDARY;
  const isInfo = !excludeFn(Intent.INFO) && intent === Intent.INFO;
  const isError = !excludeFn(Intent.ERROR) && intent === Intent.ERROR;
  const isWarning = !excludeFn(Intent.WARNING) && intent === Intent.WARNING;
  const isSuccess = !excludeFn(Intent.SUCCESS) && intent === Intent.SUCCESS;
  
  const isDefault = !excludeFn(Intent.DEFAULT) && (
    (intent === Intent.DEFAULT) || (
      !isPrimary &&
      !isSecondary &&
      !isInfo &&
      !isError &&
      !isWarning &&
      !isSuccess
    )
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
  vColorBg: string,
  vColorInverted: string,
}
export const applyIntentStyles = (
  fn: (args: StyleTypes) => SerializedStyles,
  { selector, exclude }:
  {
    selector?: (selector: string) => string,
    exclude?: (selector: string) => boolean,
  }
): SerializedStyles => {
  
  // modifier functions
  const selectorFn = selector ? selector : (n: string) => `.${n}`;
  const excludeFn = exclude ? exclude : () => false;

  return css`
    ${!excludeFn(c.INTENT_PRIMARY.name) && css`
      ${selectorFn(c.INTENT_PRIMARY.name)} {
        ${fn({
          intent: Intent.PRIMARY,
          vColor: v.COLOR_PRIMARY.name,
          vColorHover: v.COLOR_PRIMARY_HOVER.name,
          vColorMuted: v.COLOR_PRIMARY_MUTED.name,
          vColorBg: v.COLOR_PRIMARY_BG.name,
          vColorInverted: v.COLOR_PRIMARY_INVERTED.name,
        })}
      }
    `}
    ${!excludeFn(c.INTENT_SECONDARY.name) && css`
      ${selectorFn(c.INTENT_SECONDARY.name)} {
        ${fn({
          intent: Intent.SECONDARY,
          vColor: v.COLOR_SECONDARY.name,
          vColorHover: v.COLOR_SECONDARY_HOVER.name,
          vColorMuted: v.COLOR_SECONDARY_MUTED.name,
          vColorBg: v.COLOR_SECONDARY_BG.name,
          vColorInverted: v.COLOR_SECONDARY_INVERTED.name,
        })}
      }
    `}
    ${!excludeFn(c.INTENT_INFO.name) && css`
      ${selectorFn(c.INTENT_INFO.name)} {
        ${fn({
          intent: Intent.INFO,
          vColor: v.COLOR_INFO.name,
          vColorHover: v.COLOR_INFO_HOVER.name,
          vColorMuted: v.COLOR_INFO_MUTED.name,
          vColorBg: v.COLOR_INFO_BG.name,
          vColorInverted: v.COLOR_INFO_INVERTED.name,
        })}
      }
    `}
    ${!excludeFn(c.INTENT_ERROR.name) && css`
      ${selectorFn(c.INTENT_ERROR.name)} {
        ${fn({
          intent: Intent.ERROR,
          vColor: v.COLOR_ERROR.name,
          vColorHover: v.COLOR_ERROR_HOVER.name,
          vColorMuted: v.COLOR_ERROR_MUTED.name,
          vColorBg: v.COLOR_ERROR_BG.name,
          vColorInverted: v.COLOR_ERROR_INVERTED.name,
        })}
      }
    `}
    ${!excludeFn(c.INTENT_WARNING.name) && css`
      ${selectorFn(c.INTENT_WARNING.name)} {
        ${fn({
          intent: Intent.WARNING,
          vColor: v.COLOR_WARNING.name,
          vColorHover: v.COLOR_WARNING_HOVER.name,
          vColorMuted: v.COLOR_WARNING_MUTED.name,
          vColorBg: v.COLOR_WARNING_BG.name,
          vColorInverted: v.COLOR_WARNING_INVERTED.name,
        })}
      }
    `}
    ${!excludeFn(c.INTENT_SUCCESS.name) && css`
      ${selectorFn(c.INTENT_SUCCESS.name)} {
        ${fn({
          intent: Intent.SUCCESS,
          vColor: v.COLOR_SUCCESS.name,
          vColorHover: v.COLOR_SUCCESS_HOVER.name,
          vColorMuted: v.COLOR_SUCCESS_MUTED.name,
          vColorBg: v.COLOR_SUCCESS_BG.name,
          vColorInverted: v.COLOR_SUCCESS_INVERTED.name,
        })}
      }
    `}
  `
}