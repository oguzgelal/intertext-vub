/**
 * Parses type declarations attached to the `id` field
 * 
 * @example <caption>No Type</caption>
 * // input
 * { "id": true, ... }
 * // output
 * { "id": true, ... }
 * 
 * @example <caption>Only Package Type</caption>
 * // input
 * { "id:component": true, ... }
 * { "id:cmp": true, ... }
 * // output
 * { "id": true, "isComponent": true, ... }
 * 
 * @example <caption>Package Type and Subtype</caption>
 * // input
 * { "id:component:text": true, ... }
 * { "id:cmp:text": true, ... }
 * // output
 * { "id": true, "isComponent": true, type: "text", ... }
 * 
 * @example <caption>Package Type and Multiple Subtypes</caption>
 * // input
 * { "id:component:text:h1": true, ... }
 * { "id:cmp:text:h1": true, ... }
 * // output
 * { "id": true, "isComponent": true, type: "text:h1", ... }
 * 
 */

const typeDeclarations = {
  cmd: 'isCommand',
  command: 'isCommand',
  cmp: 'isComponent',
  component: 'isComponent',
}

import { ParseOutput, PackageRaw } from './common';

const parse = (
  packageRaw: PackageRaw,
  packagesRaw: PackageRaw[]
): ParseOutput<PackageRaw> => {
  
  console.log(packageRaw);
  console.log(packagesRaw);
  return {}
}

export default parse;