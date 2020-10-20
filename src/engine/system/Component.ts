import type { IPackage } from "./Package";
import type { ComponentID } from './types';

/**
 * @enum {string}
 */
export enum ComponentTypes {
  CTA = 'CTA',
}

/**
 * An object to identify the parent of a component and to specify
 * where to place this component within the parent.
 * 
 * @param {ComponentID} id ID of the parent
 * @param {string} slot Defined by each component, specifies
 *   how to (and where to) receive their children. For instance,
 *   a card component could accept children to its 'body' or 'default'
 *   slot which renders children components in the body section, whereas
 *   it could also accept children of type 'cta' in its 'actions' slot,
 *   which would get rendered in a more suitable way. 
 */
export type ComponentParent = {
  id: ComponentID
  slot?: string | null | undefined 
}

/**
 * Base for all components
 * 
 * @interface IComponent
 * @param {ComponentID} id
 * @param {ComponentTypes} type Type of this component
 * @param {ComponentParent} parent The parent of this component, nil for top level
 */
export interface IComponent extends IPackage {
  isComponent: true
  id: ComponentID
  type: ComponentTypes
  parent?: ComponentParent
}