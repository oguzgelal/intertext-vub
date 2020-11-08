import type { IPackage } from "./Package";

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
 * @param {string} id
 * @param {ComponentTypes} type Type of this component
 */
export interface IComponent extends IPackage {
  isComponent: true
  id: string
  type: ComponentTypes
}