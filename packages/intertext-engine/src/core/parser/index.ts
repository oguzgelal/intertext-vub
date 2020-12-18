import type { PackageShape } from '../../system/Package';
import { PackageRaw } from './common';

import parseInlines from './parseInlines';
import parseTypes from './parseTypes';
import parseIds from './parseIds';

export default (packagesRaw: PackageRaw[]): PackageShape[] => {
  
  // TODO: re-run strategy

  const packages = packagesRaw
    .map(packageRaw => parseInlines(packageRaw, packagesRaw)).flat()
    .map(packageRaw => parseTypes(packageRaw, packagesRaw))
    .map(packageRaw => parseIds(packageRaw, packagesRaw))
  
  return <PackageShape[]>packages;
}