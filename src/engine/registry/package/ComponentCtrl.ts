import type { IPackage } from '../../system/Package';
import type { IComponent } from '../../system/Component';
import type { ICommand } from '../../system/Command';

import type { IRegistryManager } from '../types';

class ComponentCtrl {

  private registry: IRegistryManager;

  /**
   * @param {IRegistryManager} registry
   * @param {IPackageManager} packageManager
   */
  constructor(registry: IRegistryManager) {
    this.registry = registry;
  }

  isComponent = (pack: IPackage) => {
    return pack.isComponent;
  }

  invalidate = (component: IComponent) => {

    // commands has to have an id
    if (!component.id) return true;

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