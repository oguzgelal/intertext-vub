import type { PackageShape } from '../../system/Package';
import { ParserFunc } from './common';

import parseInlines from './parseInlines';
import parseTypeDeclarations from './parseTypeDeclarations';
import parseIds from './parseIds';

class Parser {

  parse: ParserFunc = packagesRaw => {
    const packages = packagesRaw
      .map(packageRaw => (parseInlines(packageRaw, this.parse)?.packages || [])).flat()
      .map(packageRaw => parseTypeDeclarations(packageRaw)?.package)
      .map(packageRaw => parseIds(packageRaw)?.package)
      .filter(Boolean)
    
    return <PackageShape[]>packages;
  }
}



export default Parser;