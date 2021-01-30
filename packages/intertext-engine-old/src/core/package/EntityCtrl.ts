import type { PackageShape } from '../../system/Package';
import type { EntityShape } from '../../system/Entity';
import type RegistryManager from '../registry/RegistryManager';

class EntityCtrl {

  static is = (pack: PackageShape) => {
    return pack.isEntity;
  }

  static invalidate = (entity: EntityShape) => {

    // entitys has to have an id
    if (!entity.id) return true;

    return false;
  }

  static isHit = (entity: EntityShape, registry: RegistryManager) => {
    return true;
  };

  static handle = (entity: EntityShape, registry: RegistryManager) => {
    registry.insert(entity);
    return true;
  }
}

export default EntityCtrl;