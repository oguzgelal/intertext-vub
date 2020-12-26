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
 * { "id": "...", "id:rel:isChildOf": true, "from": "ref:package1", "to": "ref:package2" }
 * 
 */

import { v4 as uuidv4 } from 'uuid';
import validateRawPackage from './utils/validateRawPackage';

import {
  ParseOutput,
  PackageUnparsed,
  PackageUnparsedWithIds,
} from './common';

const parse = (packageUnparsed: PackageUnparsed): ParseOutput<PackageUnparsedWithIds> => {

  if (!validateRawPackage(packageUnparsed)) return null;
  
  const keys = Object.keys(packageUnparsed);
  
  // Find `id` or `id:...` fields
  const idFieldIndex = keys.findIndex(k => {
    return k === 'id' || k.split(':')[0] === 'id';
  })

  // set id field value
  // if undefined (`id` omitted), or set to `true`, use `uuid`
  // if it is set to anything else, keep it as it is
  let idValue: unknown = packageUnparsed[keys[idFieldIndex] || 'id'];
  if (!idValue || idValue === true) idValue = uuidv4();
  
  return {
    package: {
      ...packageUnparsed,
      id: <string>idValue
    }
  }
}

export default parse;