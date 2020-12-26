const PREFIX = 'inx__';
const SUFFIX = '';

type IntertextClassNameDef = {
  name: string,
  description?: string,
}

const cc = (cls: string): IntertextClassNameDef => ({
  name: `${PREFIX}${cls}${SUFFIX}`,
});

// text ---

export const TEXT = cc('text');
export const TEXT_DEFAULT = cc('text_default');
export const TEXT_HEADING = cc('text_heading');
export const TEXT_MUTED = cc('text_muted');
export const TEXT_P = cc('text_p');
export const TEXT_H1 = cc('text_h1');
export const TEXT_H2 = cc('text_h2');
export const TEXT_H3 = cc('text_h3');
export const TEXT_B = cc('text_b');
export const TEXT_I = cc('text_i');
export const TEXT_U = cc('text_u');
