/**
 * Parses the inline package generation syntax
 * 
 * @example <caption>Parse inline</caption>
 * // input
 * { "id": "123", "il:cmp:text:h1": { id: 'c1', bar: 'foo' } }
 * // output
 * [{ "id": "123" }, { "id": "c1", "isComponent": true, type: "text:h1", "bar": "foo" }]
 * 
 * @example <caption>Parse inline nested</caption>
 * // input
 * {
 *   "id": "123",
 *   "il:cmp:text:h1": {
 *     "id": 'c1',
 *     "bar": 'foo1',
 *     "il:cmp:text:p": {
 *       "id": 'c2',
 *       "bar": 'foo2',
 *     }
 *   }
 * }
 * // output
 * [
 *   { "id": "123" },
 *   { "id": "c1", "isComponent": true, type: "text:h1", "bar": "foo1" },
 *   { "id": "c2", "isComponent": true, type: "text:p", "bar": "foo2" }
 * ]
 * 
 */

import { ParseOutput, PackageUnparsed, ParserFunc } from './common';
import validateRawPackage from './utils/validateRawPackage';

const parse = (packageUnparsed: PackageUnparsed, parser: ParserFunc): ParseOutput<PackageUnparsed> => {

  if (!validateRawPackage(packageUnparsed)) return null;
  
  const outPackages = [];
  const basePackage = { ...packageUnparsed };
  
  const keys = Object.keys(packageUnparsed);
  // ------------- console.log('keys', keys);

  // run inline packages through the parser, and delete
  // the inline references from the base package
  keys.forEach(key => {
    // ------------- console.log('key', key);
    if (key.split(':')[0] === 'il') {
      // TODO: handle cases where inline package is not an object (ie. custom inline initialization)
      // https://www.notion.so/oguzgelal/Inline-Packages-b9dc60e1fd0841cda4478d347e74e550#0712989177c44cf2b2e79a26ca844f95
      // https://www.notion.so/oguzgelal/Parser-0930eac84b1d4ed38eff49dbf7baa9f6#5a1661888cc74ad4b462e2962be835e8
      const inlineRaw = <PackageUnparsed>packageUnparsed[key];
      // set the `id` of the inline package
      const packageTypeDefs = key.split(':').slice(1).join(':');
      inlineRaw[`id${packageTypeDefs ? `:${packageTypeDefs}` : ''}`] = inlineRaw.id || true;
      delete inlineRaw.id;
      // ------------- console.log('inlineRaw', inlineRaw);
      // run the newly created inline package through the parser recursively
      const inlineParsed = parser([inlineRaw])
      // ------------- console.log('inlineParsed', inlineParsed);
      outPackages.push(...inlineParsed);
      // delete the inline package def from the base package
      delete basePackage[key];
    }
  })
  
  // add the base package with the inline references deleted
  // to the outputed packages array
  outPackages.unshift(basePackage);
  // ------------- console.log('outPackages', outPackages);
  
  return { packages: outPackages }
}

export default parse;