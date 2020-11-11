import type { IPackage } from '../../system/Package';
import type { IRelation } from '../../system/Relation';
import { Relations } from '../../system/Relation';
import type RegistryManager from '../registry/RegistryManager';
import type StageManager from '../stage/StageManager';

class RelationCtrl {

  static is = (pack: IPackage) => {
    return pack.isRelation;
  }

  static invalidate = (relation: IRelation) => {
    const isLiteral = !relation.hasOwnProperty('to');
    const hasValue = relation.hasOwnProperty('value');

    // invalidate if a relation is a literal, but has no value
    if (isLiteral && !hasValue) return true;

    return false;
  }

  static  isHit = (relation: IRelation, registry: RegistryManager) => {

    const fromExists = registry.exists(relation.from);
    const toExists = registry.exists(relation.to);
    const isLiteral = !relation.hasOwnProperty('to')

    // relation from package isnt present
    if (!fromExists) return false;
    
    // if this relation is not literal, and the
    // target package is not present
    if (!toExists && !isLiteral) return false;

    return true;
  };

  static handle = (
    relation: IRelation,
    registry: RegistryManager,
    stage: StageManager,
  ) => {
    
    // insert into registry
    registry.insert(relation)

    // if stage relation
    if (relation.rel === Relations.STAGED) {
      if (relation.value === true) {
        stage.stageComponent(relation.from);
      } else {
        stage.unstageComponent(relation.from);
      }
    }
    
    // remove package from the queue
    return true;
  }
}

export default RelationCtrl;