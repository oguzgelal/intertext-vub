import type { PackageShape } from '../../system/Package';
import { ParserFunc } from './common';

import parseInlines from './parseInlines';
import parseTypeDeclarations from './parseTypeDeclarations';
import parseIds from './parseIds';

const parser: ParserFunc = packagesRaw => {
  
  // TODO: re-run strategy
  // TODO: or -> when new packages needs to be generated (ie. inline parse)
  // pass the parser function and call it for newly added packages
  // TODO: or, call individual parsers for newly generated packages

  const packages = packagesRaw
    .map(packageRaw => (parseInlines(packageRaw, parser)?.packages || [])).flat()
    .map(packageRaw => parseTypeDeclarations(packageRaw)?.package)
    .map(packageRaw => parseIds(packageRaw)?.package)
    .filter(Boolean)
  
  return <PackageShape[]>packages;
}

export default parser;