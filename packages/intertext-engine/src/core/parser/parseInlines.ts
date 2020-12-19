/**
 * Parses the inline package generation syntax
 * 
 * @example <caption></caption>
 * 
 */

import { ParseOutput, PackageRaw } from './common';

const parse = (
  packageRaw: PackageRaw,
  packagesRaw: PackageRaw[]
): ParseOutput<PackageRaw[]> => {
  
  console.log(packageRaw);
  console.log(packagesRaw);
  return { package: [] }
}

export default parse;