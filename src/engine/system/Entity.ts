import type { IPackage } from "./Package";

/**
 * @enum {string}
 */
export enum EntityTypes {
  SCREEN = 'SCREEN'
}

/**
 * Base for all entities
 * 
 * @interface IEntity
 * @param {string} id
 * @param {EntityTypes} type
 */
export interface IEntity extends IPackage {
  isEntity: true
  id: string
  type: EntityTypes
}