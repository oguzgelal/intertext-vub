export interface PackageShape {
  id: string
  type?: string
  isComponent?: boolean
  isCommand?: boolean
  isRelation?: boolean
  isEntity?: boolean
}

interface IPackageCtrl {
  validate: (item: Record<string, unknown>) => boolean
}

export class PackageCtrl implements IPackageCtrl {
  
  // classes should override this variable with
  // their type declaration (ie. `isComponent` etc.)
  protected TYPE_DECLARATION_KEY = '';

  // is this a package
  validate(item: Record<string, unknown>): boolean {
    return !!item.id && (
      this.TYPE_DECLARATION_KEY === ''
        ? true
        : !!item[this.TYPE_DECLARATION_KEY]
    );
  }
}

export const packageCtrl = new PackageCtrl();

