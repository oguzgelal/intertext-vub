import Package from './Package';
import type { PackageShape } from "./Package";

export enum ComponentTypes {
  CTA = 'CTA',
}

export interface ComponentShape extends PackageShape {
  isComponent: true
  id: string
  type: ComponentTypes
}

/**
 * Base for all components
 */
export default class Component extends Package {

  static validate(item: Record<string, unknown>): boolean {
    return Package.validate(item) && !!item.isComponent;
  }
}