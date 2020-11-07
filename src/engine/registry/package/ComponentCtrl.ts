import type { IPackage } from '../../system/Package';
import type { IComponent } from '../../system/Component';
import type { ICommand } from '../../system/Command';

import type {
  IPackageManager,
  IRegistryManager,
} from '../types';

class ComponentCtrl {

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

  isComponent = (pack: IPackage) => {
    return pack.isComponent;
  }

  invalidate = (component: IComponent) => {
    return false;
  }

  isHit = (component: IComponent) => {
    /**
     * // typecast
      const component = <IComponent>pack;
      // if a component has no parent, it is
      // a top level component, so this is a hit
      if (!component.parent) return true;
      // if a component has a parent, check if
      // the parent is availble in registry
      else if (this.registry.get(component.parent.id)) return true;
     */
    return false;
  };

  handle = (component: IComponent) => {
    // remove package from the queue
    return true;
  }
}

export default ComponentCtrl;