import { merge } from 'lodash/fp';
import type { IPackage } from '../../system/Package';
import type { IComponent } from '../../system/Component';
import type { ICommand } from '../../system/Command';
import type { IRelation } from '../../system/Relation';
import { LITERAL_KEY } from './../../system/Relation';
import type { IRegistryManager } from '../types';

class RelationCtrl {

  private registry: IRegistryManager;

  /**
   * @param {IRegistryManager} registry
   * @param {IPackageManager} packageManager
   */
  constructor(registry: IRegistryManager) {
    this.registry = registry;
  }

  isRelation = (pack: IPackage) => {
    return pack.isRelation;
  }

  invalidate = (relation: IRelation) => {

    const isLiteral = !relation.hasOwnProperty('to');
    const hasValue = relation.hasOwnProperty('value');

    // invalidate if a relation is a literal, but has no value
    if (isLiteral && !hasValue) return true;

    return false;
  }

  isHit = (relation: IRelation) => {

    const fromExists = this.registry.exists(relation.from);
    const toExists = this.registry.exists(relation.to);
    const isLiteral = !relation.hasOwnProperty('to')

    // relation from package isnt present
    if (!fromExists) return false;
    
    // if this relation is not literal, and the
    // target package is not present
    if (!toExists && !isLiteral) return false;

    return true;
  };

  handle = (relation: IRelation) => {

    // insert relation into the lookup table
    this.registry.relations = merge(this.registry.relations, {
      [relation.from]: {
        [relation.to || LITERAL_KEY]: {
          [relation.rel]: relation
        }
      }
    })

    // remove package from the queue
    return true;
  }
}

export default RelationCtrl;