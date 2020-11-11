import type { IEntity, EntityTypes } from "../Entity";

/**
 * Define a screen
 * 
 * @interface IScreen
 * @param {IEntity['id']} id
 * @example <caption>Web</caption> <button>...</button>
 */
export interface IScreen extends IEntity {
  id: string
  type: EntityTypes.SCREEN
  title: string
}
