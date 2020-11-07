import type { IPackage } from '../../system/Package';
import type { IComponent } from '../../system/Component';
import type { ICommand } from '../../system/Command';
import type { IRelation } from '../../system/Relation';

import type {
  IPackageManager,
  IRegistryManager,
} from '../types';

class RelationCtrl {

  private registry: IRegistryManager;
  private packageManager: IPackageManager;

  /**
   * @param {IRegistryManager} registry
   * @param {IPackageManager} packageManager
   */
  constructor(registry: IRegistryManager, packageManager: IPackageManager) {
    this.registry = registry;
    this.packageManager = packageManager;
  }

  isRelation = (pack: IPackage) => {
    return pack.isRelation;
  }

  isHit = (relation: IRelation) => {
    return false;
  };

  handle = (relation: IRelation) => {
    // remove package from the queue
    return true;
  }
}

export default RelationCtrl;