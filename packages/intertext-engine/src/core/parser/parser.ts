import type { PackageShape } from '../../system/Package';
import { ParserFunc } from './common';

import parseInlines from './parseInlines';
import parseTypeDeclarations from './parseTypeDeclarations';
import parseIds from './parseIds';

class Parser {

  parse: ParserFunc = packagesUnparsed => {
    const packages = packagesUnparsed
      .map(packageUnparsed => (parseInlines(packageUnparsed, this.parse)?.packages || [])).flat()
      .map(packageUnparsed => parseTypeDeclarations(packageUnparsed)?.package)
      .map(packageUnparsed => parseIds(packageUnparsed)?.package)
      .filter(Boolean)
    
    return <PackageShape[]>packages;
  }
}



export default Parser;