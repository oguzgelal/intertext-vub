/**
 * Add unique ID's to packages that has omitted the `id` field,
 * or ones that set it to `true`
 * 
 * @example <caption>Omitted `id` fields</caption>
 * // input
 * { "from": "ref:package1", "to": "ref:package2" }
 * // output
 * { "id": "...", "from": "ref:package1", "to": "ref:package2" }
 * 
 * @example <caption>Setting `id` to true</caption>
 * // input
 * { "id": true, "from": "ref:package1", "to": "ref:package2" }
 * // output
 * { "id": "...", "from": "ref:package1", "to": "ref:package2" }
 * 
 * @example <caption>Setting `id` to true (with type syntax)</caption>
 * // input
 * { "id:rel:isChildOf": true, "from": "ref:package1", "to": "ref:package2" }
 * // output
 * { "id:rel:isChildOf": "...", "from": "ref:package1", "to": "ref:package2" }
 * 
 */
import type { PackageShape } from '../../system/Package';
import { PackageRaw, PackageRawWithIds } from './common';

const parse = (
  packageRaw: PackageRaw,
  packagesRaw: PackageRaw[]
): PackageRawWithIds => {
  
  console.log(packageRaw);
  console.log(packagesRaw);
  return { id: '' }
}

export default parse;