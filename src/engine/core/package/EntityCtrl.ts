import type { IPackage } from '../../system/Package';
import type { IEntity } from '../../system/Entity';
import type RegistryManager from '../registry/RegistryManager';

class EntityCtrl {

  static is = (pack: IPackage) => {
    return pack.isEntity;
  }

  static invalidate = (entity: IEntity) => {

    // entitys has to have an id
    if (!entity.id) return true;

    return false;
  }

  static isHit = (entity: IEntity, registry: RegistryManager) => {
    return true;
  };

  static handle = (entity: IEntity, registry: RegistryManager) => {
    registry.insert(entity);
    return true;
  }
}

export default EntityCtrl;