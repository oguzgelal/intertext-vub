import type { EntityShape, EntityTypes } from "../Entity";

/**
 * Define a screen
 * 
 * @interface IScreen
 * @param {EntityShape['id']} id
 * @example <caption>Web</caption> <button>...</button>
 */
export interface IScreen extends EntityShape {
  id: string
  type: EntityTypes.SCREEN
  title: string
}
