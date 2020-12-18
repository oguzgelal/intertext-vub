// https://theme-ui.com/demo

import { lighten, darken } from 'polished';
import { css } from '@emotion/react/macro';
import * as c from 'style/classNames';
import { read } from 'utils/cssvar';

export default css`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=IBM+Plex+Sans+Condensed:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=IBM+Plex+Serif:ital@0;1&display=swap');

  :root {

    /** --- general --- */

    /** colors */
    /** material color palette */
    /** https://material.io/resources/color */

    --inx-color-white: "#fff";
    --inx-color-black: "#000";
    --inx-color-red-50: "#ffebee";
    --inx-color-red-100: "#ffcdd2";
    --inx-color-red-200: "#ef9a9a";
    --inx-color-red-300: "#e57373";
    --inx-color-red-400: "#ef5350";
    --inx-color-red-500: "#f44336";
    --inx-color-red-600: "#e53935";
    --inx-color-red-700: "#d32f2f";
    --inx-color-red-800: "#c62828";
    --inx-color-red-900: "#b71c1c";
    --inx-color-red-a100: "#ff8a80";
    --inx-color-red-a200: "#ff5252";
    --inx-color-red-a400: "#ff1744";
    --inx-color-red-a700: "#d50000";
    --inx-color-pink-50: "#fce4ec";
    --inx-color-pink-100: "#f8bbd0";
    --inx-color-pink-200: "#f48fb1";
    --inx-color-pink-300: "#f06292";
    --inx-color-pink-400: "#ec407a";
    --inx-color-pink-500: "#e91e63";
    --inx-color-pink-600: "#d81b60";
    --inx-color-pink-700: "#c2185b";
    --inx-color-pink-800: "#ad1457";
    --inx-color-pink-900: "#880e4f";
    --inx-color-pink-a100: "#ff80ab";
    --inx-color-pink-a200: "#ff4081";
    --inx-color-pink-a400: "#f50057";
    --inx-color-pink-a700: "#c51162";
    --inx-color-purple-50: "#f3e5f5";
    --inx-color-purple-100: "#e1bee7";
    --inx-color-purple-200: "#ce93d8";
    --inx-color-purple-300: "#ba68c8";
    --inx-color-purple-400: "#ab47bc";
    --inx-color-purple-500: "#9c27b0";
    --inx-color-purple-600: "#8e24aa";
    --inx-color-purple-700: "#7b1fa2";
    --inx-color-purple-800: "#6a1b9a";
    --inx-color-purple-900: "#4a148c";
    --inx-color-purple-a100: "#ea80fc";
    --inx-color-purple-a200: "#e040fb";
    --inx-color-purple-a400: "#d500f9";
    --inx-color-purple-a700: "#aa00ff";
    --inx-color-deep-purple-50: "#ede7f6";
    --inx-color-deep-purple-100: "#d1c4e9";
    --inx-color-deep-purple-200: "#b39ddb";
    --inx-color-deep-purple-300: "#9575cd";
    --inx-color-deep-purple-400: "#7e57c2";
    --inx-color-deep-purple-500: "#673ab7";
    --inx-color-deep-purple-600: "#5e35b1";
    --inx-color-deep-purple-700: "#512da8";
    --inx-color-deep-purple-800: "#4527a0";
    --inx-color-deep-purple-900: "#311b92";
    --inx-color-deep-purple-a100: "#b388ff";
    --inx-color-deep-purple-a200: "#7c4dff";
    --inx-color-deep-purple-a400: "#651fff";
    --inx-color-deep-purple-a700: "#6200ea";
    --inx-color-indigo-50: "#e8eaf6";
    --inx-color-indigo-100: "#c5cae9";
    --inx-color-indigo-200: "#9fa8da";
    --inx-color-indigo-300: "#7986cb";
    --inx-color-indigo-400: "#5c6bc0";
    --inx-color-indigo-500: "#3f51b5";
    --inx-color-indigo-600: "#3949ab";
    --inx-color-indigo-700: "#303f9f";
    --inx-color-indigo-800: "#283593";
    --inx-color-indigo-900: "#1a237e";
    --inx-color-indigo-a100: "#8c9eff";
    --inx-color-indigo-a200: "#536dfe";
    --inx-color-indigo-a400: "#3d5afe";
    --inx-color-indigo-a700: "#304ffe";
    --inx-color-blue-50: "#e3f2fd";
    --inx-color-blue-100: "#bbdefb";
    --inx-color-blue-200: "#90caf9";
    --inx-color-blue-300: "#64b5f6";
    --inx-color-blue-400: "#42a5f5";
    --inx-color-blue-500: "#2196f3";
    --inx-color-blue-600: "#1e88e5";
    --inx-color-blue-700: "#1976d2";
    --inx-color-blue-800: "#1565c0";
    --inx-color-blue-900: "#0d47a1";
    --inx-color-blue-a100: "#82b1ff";
    --inx-color-blue-a200: "#448aff";
    --inx-color-blue-a400: "#2979ff";
    --inx-color-blue-a700: "#2962ff";
    --inx-color-light-blue-50: "#e1f5fe";
    --inx-color-light-blue-100: "#b3e5fc";
    --inx-color-light-blue-200: "#81d4fa";
    --inx-color-light-blue-300: "#4fc3f7";
    --inx-color-light-blue-400: "#29b6f6";
    --inx-color-light-blue-500: "#03a9f4";
    --inx-color-light-blue-600: "#039be5";
    --inx-color-light-blue-700: "#0288d1";
    --inx-color-light-blue-800: "#0277bd";
    --inx-color-light-blue-900: "#01579b";
    --inx-color-light-blue-a100: "#80d8ff";
    --inx-color-light-blue-a200: "#40c4ff";
    --inx-color-light-blue-a400: "#00b0ff";
    --inx-color-light-blue-a700: "#0091ea";
    --inx-color-cyan-50: "#e0f7fa";
    --inx-color-cyan-100: "#b2ebf2";
    --inx-color-cyan-200: "#80deea";
    --inx-color-cyan-300: "#4dd0e1";
    --inx-color-cyan-400: "#26c6da";
    --inx-color-cyan-500: "#00bcd4";
    --inx-color-cyan-600: "#00acc1";
    --inx-color-cyan-700: "#0097a7";
    --inx-color-cyan-800: "#00838f";
    --inx-color-cyan-900: "#006064";
    --inx-color-cyan-a100: "#84ffff";
    --inx-color-cyan-a200: "#18ffff";
    --inx-color-cyan-a400: "#00e5ff";
    --inx-color-cyan-a700: "#00b8d4";
    --inx-color-teal-50: "#e0f2f1";
    --inx-color-teal-100: "#b2dfdb";
    --inx-color-teal-200: "#80cbc4";
    --inx-color-teal-300: "#4db6ac";
    --inx-color-teal-400: "#26a69a";
    --inx-color-teal-500: "#009688";
    --inx-color-teal-600: "#00897b";
    --inx-color-teal-700: "#00796b";
    --inx-color-teal-800: "#00695c";
    --inx-color-teal-900: "#004d40";
    --inx-color-teal-a100: "#a7ffeb";
    --inx-color-teal-a200: "#64ffda";
    --inx-color-teal-a400: "#1de9b6";
    --inx-color-teal-a700: "#00bfa5";
    --inx-color-green-50: "#e8f5e9";
    --inx-color-green-100: "#c8e6c9";
    --inx-color-green-200: "#a5d6a7";
    --inx-color-green-300: "#81c784";
    --inx-color-green-400: "#66bb6a";
    --inx-color-green-500: "#4caf50";
    --inx-color-green-600: "#43a047";
    --inx-color-green-700: "#388e3c";
    --inx-color-green-800: "#2e7d32";
    --inx-color-green-900: "#1b5e20";
    --inx-color-green-a100: "#b9f6ca";
    --inx-color-green-a200: "#69f0ae";
    --inx-color-green-a400: "#00e676";
    --inx-color-green-a700: "#00c853";
    --inx-color-light-green-50: "#f1f8e9";
    --inx-color-light-green-100: "#dcedc8";
    --inx-color-light-green-200: "#c5e1a5";
    --inx-color-light-green-300: "#aed581";
    --inx-color-light-green-400: "#9ccc65";
    --inx-color-light-green-500: "#8bc34a";
    --inx-color-light-green-600: "#7cb342";
    --inx-color-light-green-700: "#689f38";
    --inx-color-light-green-800: "#558b2f";
    --inx-color-light-green-900: "#33691e";
    --inx-color-light-green-a100: "#ccff90";
    --inx-color-light-green-a200: "#b2ff59";
    --inx-color-light-green-a400: "#76ff03";
    --inx-color-light-green-a700: "#64dd17";
    --inx-color-lime-50: "#f9fbe7";
    --inx-color-lime-100: "#f0f4c3";
    --inx-color-lime-200: "#e6ee9c";
    --inx-color-lime-300: "#dce775";
    --inx-color-lime-400: "#d4e157";
    --inx-color-lime-500: "#cddc39";
    --inx-color-lime-600: "#c0ca33";
    --inx-color-lime-700: "#afb42b";
    --inx-color-lime-800: "#9e9d24";
    --inx-color-lime-900: "#827717";
    --inx-color-lime-a100: "#f4ff81";
    --inx-color-lime-a200: "#eeff41";
    --inx-color-lime-a400: "#c6ff00";
    --inx-color-lime-a700: "#aeea00";
    --inx-color-yellow-50: "#fffde7";
    --inx-color-yellow-100: "#fff9c4";
    --inx-color-yellow-200: "#fff59d";
    --inx-color-yellow-300: "#fff176";
    --inx-color-yellow-400: "#ffee58";
    --inx-color-yellow-500: "#ffeb3b";
    --inx-color-yellow-600: "#fdd835";
    --inx-color-yellow-700: "#fbc02d";
    --inx-color-yellow-800: "#f9a825";
    --inx-color-yellow-900: "#f57f17";
    --inx-color-yellow-a100: "#ffff8d";
    --inx-color-yellow-a200: "#ffff00";
    --inx-color-yellow-a400: "#ffea00";
    --inx-color-yellow-a700: "#ffd600";
    --inx-color-amber-50: "#fff8e1";
    --inx-color-amber-100: "#ffecb3";
    --inx-color-amber-200: "#ffe082";
    --inx-color-amber-300: "#ffd54f";
    --inx-color-amber-400: "#ffca28";
    --inx-color-amber-500: "#ffc107";
    --inx-color-amber-600: "#ffb300";
    --inx-color-amber-700: "#ffa000";
    --inx-color-amber-800: "#ff8f00";
    --inx-color-amber-900: "#ff6f00";
    --inx-color-amber-a100: "#ffe57f";
    --inx-color-amber-a200: "#ffd740";
    --inx-color-amber-a400: "#ffc400";
    --inx-color-amber-a700: "#ffab00";
    --inx-color-orange-50: "#fff3e0";
    --inx-color-orange-100: "#ffe0b2";
    --inx-color-orange-200: "#ffcc80";
    --inx-color-orange-300: "#ffb74d";
    --inx-color-orange-400: "#ffa726";
    --inx-color-orange-500: "#ff9800";
    --inx-color-orange-600: "#fb8c00";
    --inx-color-orange-700: "#f57c00";
    --inx-color-orange-800: "#ef6c00";
    --inx-color-orange-900: "#e65100";
    --inx-color-orange-a100: "#ffd180";
    --inx-color-orange-a200: "#ffab40";
    --inx-color-orange-a400: "#ff9100";
    --inx-color-orange-a700: "#ff6d00";
    --inx-color-deep-orange-50: "#fbe9e7";
    --inx-color-deep-orange-100: "#ffccbc";
    --inx-color-deep-orange-200: "#ffab91";
    --inx-color-deep-orange-300: "#ff8a65";
    --inx-color-deep-orange-400: "#ff7043";
    --inx-color-deep-orange-500: "#ff5722";
    --inx-color-deep-orange-600: "#f4511e";
    --inx-color-deep-orange-700: "#e64a19";
    --inx-color-deep-orange-800: "#d84315";
    --inx-color-deep-orange-900: "#bf360c";
    --inx-color-deep-orange-a100: "#ff9e80";
    --inx-color-deep-orange-a200: "#ff6e40";
    --inx-color-deep-orange-a400: "#ff3d00";
    --inx-color-deep-orange-a700: "#dd2c00";
    --inx-color-brown-50: "#efebe9";
    --inx-color-brown-100: "#d7ccc8";
    --inx-color-brown-200: "#bcaaa4";
    --inx-color-brown-300: "#a1887f";
    --inx-color-brown-400: "#8d6e63";
    --inx-color-brown-500: "#795548";
    --inx-color-brown-600: "#6d4c41";
    --inx-color-brown-700: "#5d4037";
    --inx-color-brown-800: "#4e342e";
    --inx-color-brown-900: "#3e2723";
    --inx-color-grey-50: "#fafafa";
    --inx-color-grey-100: "#f5f5f5";
    --inx-color-grey-200: "#eeeeee";
    --inx-color-grey-300: "#e0e0e0";
    --inx-color-grey-400: "#bdbdbd";
    --inx-color-grey-500: "#9e9e9e";
    --inx-color-grey-600: "#757575";
    --inx-color-grey-700: "#616161";
    --inx-color-grey-800: "#424242";
    --inx-color-grey-900: "#212121";
    --inx-color-blue-grey-50: "#eceff1";
    --inx-color-blue-grey-100: "#cfd8dc";
    --inx-color-blue-grey-200: "#b0bec5";
    --inx-color-blue-grey-300: "#90a4ae";
    --inx-color-blue-grey-400: "#78909c";
    --inx-color-blue-grey-500: "#607d8b";
    --inx-color-blue-grey-600: "#546e7a";
    --inx-color-blue-grey-700: "#455a64";
    --inx-color-blue-grey-800: "#37474f";
    --inx-color-blue-grey-900: "#263238";

    /** font family */
    --inx-font-family-sans: 'IBM Plex Sans', sans-serif;
    --inx-font-family-sans-condensed: 'IBM Plex Sans Condensed', sans-serif;
    --inx-font-family-heading: 'IBM Plex Sans', sans-serif;
    --inx-font-family-mono: 'IBM Plex Mono', monospace;
    --inx-font-family-serif: 'IBM Plex Sans', sans-serif;

    /** font sizes */
    --inx-font-size-0: 10;
    --inx-font-size-1: 12;
    --inx-font-size-2: 14;
    --inx-font-size-3: 16;
    --inx-font-size-4: 20;
    --inx-font-size-5: 24;
    --inx-font-size-6: 32;
    --inx-font-size-7: 48;
    --inx-font-size-8: 64;
    --inx-font-size-9: 96;

    /** spaces */
    --inx-space-0: 0;
    --inx-space-1: 4;
    --inx-space-2: 8;
    --inx-space-3: 16;
    --inx-space-4: 32;
    --inx-space-5: 64;
    --inx-space-6: 128;
    --inx-space-7: 256;
    --inx-space-8: 512;


    /** --- specific --- */

    /** colors */
    --inx-color-primary: var(--inx-color-blue-a700);
    --inx-color-secondary: var(--inx-color-teal-a400);
    --inx-color-error: var(--inx-color-red-a700);
    --inx-color-warning: var(--inx-color-orange-a700);
    --inx-color-info: var(--inx-color-light-blue-a700);
    
    --inx-color-text: ;
    --inx-color-background: var(--inx-color-grey-100);
    --inx-color-secondary: "#30c";
    --inx-color-muted: "#f6f6f6";

    /** font weights */
    --inx-font-weight-default: 400;
    --inx-font-weight-heading: 700;
    --inx-font-weight-bold: 700;

    /** line heights */
    --inx-font-weight-default: 1.5;
    --inx-font-weight-heading: 1.125;

  }

  /** --- styles --- */

  .${[c.TEXT.name]} {
    font-family: var(--inx-font-default);
    font-size: var(--inx-font-size-2);
    font-weight: var()
  }

`;
