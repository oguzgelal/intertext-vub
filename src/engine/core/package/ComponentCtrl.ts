import type { IPackage } from '../../system/Package';
import type { IComponent } from '../../system/Component';
import type RegistryManager from '../registry/RegistryManager';

class ComponentCtrl {

  static is = (pack: IPackage) => {
    return pack.isComponent;
  }

  static invalidate = (component: IComponent) => {

    // commands has to have an id
    if (!component.id) return true;

    return false;
  }

  static isHit = (component: IComponent, registry: RegistryManager) => {
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

  static handle = (component: IComponent, registry: RegistryManager) => {
    registry.insert(component)
    return true;
  }
}

export default ComponentCtrl;