const PREFIX = '__inx:';
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
export const P = cc('p');
export const H1 = cc('h1');
export const H2 = cc('h2');
export const H3 = cc('h3');
export const B = cc('b');
export const I = cc('i');
export const U = cc('u');
