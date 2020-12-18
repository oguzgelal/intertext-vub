import Package from './Package';
import type { PackageShape } from "./Package";

export enum EntityTypes {
  SCREEN = 'SCREEN'
}

export interface EntityShape extends PackageShape {
  isEntity: true
  id: string
  type: EntityTypes
}

/**
 * Base for all entities
 */
export default class Entity  extends Package {
  
  static validate(item: Record<string, unknown>): boolean {
    return Package.validate(item) && !!item.isEntity;
  }
}