import { css, SerializedStyles } from '@emotion/react/macro';
import type { Intent as IntentType } from '../../style/values';
import { Intent } from '../../style/values';
import { v, c } from '../values';

/**
 * Utility function to attach intent classnames
 * to a component.
 */
export const attachIntentClasses = (intent?: IntentType): Record<string, boolean> => {
  
  const isPrimary = intent === Intent.PRIMARY
  const isSecondary = intent === Intent.SECONDARY
  const isInfo = intent === Intent.INFO
  const isError = intent === Intent.ERROR
  const isWarning = intent === Intent.WARNING
  const isSuccess = intent === Intent.SUCCESS
  
  const isDefault = (
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
  vColor: string,
  vColorLight: string,
  vColorDark: string,
  vColorMuted: string,
}
export const applyIntentStyles = (fn: (args: StyleTypes) => SerializedStyles): SerializedStyles => css`
  .${c.INTENT_PRIMARY.name} {
    ${fn({
      vColor: v.COLOR_PRIMARY.name,
      vColorLight: v.COLOR_PRIMARY_DARK.name,
      vColorDark: v.COLOR_PRIMARY_LIGHT.name,
      vColorMuted: v.COLOR_PRIMARY_MUTED.name,
    })}
  }
  .${c.INTENT_SECONDARY.name} {
    ${fn({
      vColor: v.COLOR_SECONDARY.name,
      vColorLight: v.COLOR_SECONDARY_DARK.name,
      vColorDark: v.COLOR_SECONDARY_LIGHT.name,
      vColorMuted: v.COLOR_SECONDARY_MUTED.name,
    })}
  }
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