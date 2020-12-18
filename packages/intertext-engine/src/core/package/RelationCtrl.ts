import type { PackageShape } from '../../system/Package';
import type { RelationShape } from '../../system/Relation';
import type RegistryManager from '../registry/RegistryManager';
import type StageManager from '../stage/StageManager';

class RelationCtrl {

  static is = (pack: PackageShape): boolean => {
    return pack.isRelation;
  }

  static invalidate = (relation: RelationShape): boolean => {

    return false;
  }

  static  isHit = (relation: RelationShape, registry: RegistryManager): boolean => {

    // relation from package isnt present
    if (!registry.exists(relation.from)) return false;
    
    // relation to package isnt present
    if (!registry.exists(relation.to)) return false;

    return true;
  };

  static handle = (
    relation: RelationShape,
    registry: RegistryManager,
    stage: StageManager,
  ): boolean => {
    
    // insert into registry
    registry.insert(relation)
    
    // remove package from the queue
    return true;
  }
}

export default RelationCtrl;