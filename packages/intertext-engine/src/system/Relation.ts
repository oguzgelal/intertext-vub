import Package from './Package';
import type { PackageShape } from './Package';

export enum RelationTypes {
  CHILDREN = 'CHILDREN',
  ACTIVE_SCREEN = 'ACTIVE_SCREEN'
}

export interface RelationShape extends PackageShape {
  isRelation: true
  id: string
  type: RelationTypes
  from: PackageShape['id'] | RelationTypes
  to: PackageShape['id'] | RelationTypes
}

/**
 * Relation
 * Semantic relations between two package
 */
export default class Relation extends Package {
  
  static  validate(item: Record<string, unknown>): boolean {
    return Package.validate(item) && !!item.isRelation;
  }
}
