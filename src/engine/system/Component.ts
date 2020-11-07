import type { IPackage } from "./Package";
import type { ComponentID } from './types';

/**
 * @enum {string}
 */
export enum ComponentTypes {
  CTA = 'CTA',
}

/**
 * Base for all components
 * 
 * @interface IComponent
 * @param {ComponentID} id
 * @param {ComponentTypes} type Type of this component
 */
export interface IComponent extends IPackage {
  isComponent: true
  id: ComponentID
  type: ComponentTypes
}