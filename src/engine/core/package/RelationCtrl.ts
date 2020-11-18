import type { IPackage } from '../../system/Package';
import type { IRelation } from '../../system/Relation';
import type RegistryManager from '../registry/RegistryManager';
import type StageManager from '../stage/StageManager';

class RelationCtrl {

  static is = (pack: IPackage) => {
    return pack.isRelation;
  }

  static invalidate = (relation: IRelation) => {
    const isLiteral = !relation.hasOwnProperty('to');
    const hasValue = relation.hasOwnProperty('value');

    // relations has to have an id
    if (!relation.id) return true;

    // invalidate if a relation is a literal, but has no value
    if (isLiteral && !hasValue) return true;

    return false;
  }

  static  isHit = (relation: IRelation, registry: RegistryManager) => {

    // relation from package isnt present
    if (!registry.exists(relation.from)) return false;
    
    // relation to package isnt present
    if (!registry.exists(relation.to)) return false;

    return true;
  };

  static handle = (
    relation: IRelation,
    registry: RegistryManager,
    stage: StageManager,
  ) => {
    
    // insert into registry
    registry.insert(relation)
    
    // remove package from the queue
    return true;
  }
}

export default RelationCtrl;