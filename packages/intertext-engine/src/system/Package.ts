export interface PackageShape {
  id: string
  type?: string
  isComponent?: boolean
  isCommand?: boolean
  isRelation?: boolean
  isEntity?: boolean
}

/**
 * Base for all packages
 */
export default class Package {
  
  // is this a package
  static validate(item: Record<string, unknown>): boolean {
    return !!item.id;
  }

  // TODO: ?
  parseType(pack: PackageShape[]): PackageShape[] {
    console.log(pack)
    return []
  }
}