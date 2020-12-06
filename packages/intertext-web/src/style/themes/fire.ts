import { css } from '@emotion/react/macro';
import { lighten, darken } from 'polished';
import { read } from 'utils/cssvar';

export default css`
  :root {
    --inx-color-primary: var(--inx-color-deep-orange-800);
    --inx-color-primary-light: ${lighten(0.5, read('--inx-color-primary'))};
    --inx-color-primary-dark: ${darken(0.5, read('--inx-color-primary'))};
    --inx-color-secondary: var(--inx-color-blue-grey-900);
    --inx-color-secondary-light: ${lighten(0.5, read('--inx-color-secondary'))};
    --inx-color-secondary-dark: ${darken(0.5, read('--inx-color-secondary'))};

    --inx-color-text: "#000";
    --inx-color-background: var(--inx-color-grey-100);
    --inx-color-secondary: "#30c";
    --inx-color-muted: "#f6f6f6";
  }
`;
