import { css, SerializedStyles } from '@emotion/react/macro';
import type { Intent as IntentType } from '../../style/values';
import { Intent } from '../../style/values';
import { v, c } from '../values';

/**
 * Utility function to attach intent classnames
 * to a component.
 */
export const attachIntentClasses = (intent?: IntentType): Record<string, boolean> => ({
  [c.INTENT_INFO.name]: intent === Intent.INFO,
  [c.INTENT_ERROR.name]: intent === Intent.ERROR,
  [c.INTENT_WARNING.name]: intent === Intent.WARNING,
  [c.INTENT_SUCCESS.name]: intent === Intent.SUCCESS,
});

/**
 * Utility function to apply intent styles for all
 * intents at once.
 */
type StyleTypes = {
  vColor: string,
  vColorLight: string,
  vColorDark: string,
  vColorMuted: string,
}
export const applyIntentStyles = (fn: (args: StyleTypes) => SerializedStyles): SerializedStyles => css`
  .${c.INTENT_INFO.name} {
    ${fn({
      vColor: v.COLOR_INFO.name,
      vColorLight: v.COLOR_INFO_DARK.name,
      vColorDark: v.COLOR_INFO_LIGHT.name,
      vColorMuted: v.COLOR_INFO_MUTED.name,
    })}
  }
  .${c.INTENT_ERROR.name} {
    ${fn({
      vColor: v.COLOR_ERROR.name,
      vColorLight: v.COLOR_ERROR_DARK.name,
      vColorDark: v.COLOR_ERROR_LIGHT.name,
      vColorMuted: v.COLOR_ERROR_MUTED.name,
    })}
  }
  .${c.INTENT_WARNING.name} {
    ${fn({
      vColor: v.COLOR_WARNING.name,
      vColorLight: v.COLOR_WARNING_DARK.name,
      vColorDark: v.COLOR_WARNING_LIGHT.name,
      vColorMuted: v.COLOR_WARNING_MUTED.name,
    })}
  }
  .${c.INTENT_SUCCESS.name} {
    ${fn({
      vColor: v.COLOR_SUCCESS.name,
      vColorLight: v.COLOR_SUCCESS_DARK.name,
      vColorDark: v.COLOR_SUCCESS_LIGHT.name,
      vColorMuted: v.COLOR_SUCCESS_MUTED.name,
    })}
  }
`