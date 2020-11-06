import type { IPackage } from './Package';
import type { PackageID } from './types';

/**
 * Binding type
 * Semantic binding between two packages
 * 
 * @interface IBinding
 * @param {string} from The ID of the package bound from
 * @param {string} to The ID of the package bound to
 * @param {rel} rel Relationship of these two packages
 * 
 * @example
 * { id: 'login-btn', isComponent: true, type: 'CTA' }
 * { id: 'login-btn-text', isCommand: true, type: 'Text', contents: 'Login' }
 * { id: 'login-start', isCommand: true, type: 'Request', ... }
 * { isBinding: true, from: 'login-btn', to: 'login-btn-text', rel: 'is-text-content' }
 * { isBinding: true, from: 'login-btn', to: 'login-btn-start', rel: 'on-primary-interaction' }
 */
export interface IBinding extends IPackage {
  isBinding: true
  from: PackageID
  to: PackageID
  rel: string
}

/**
 * A lookup table for bindings for easy access
 */
export type BindingsLookupTable = {
  [key: string]: /* from PackageID */ {
    [key: string]: /* to PackageID */ {
      [rel: string]: IBinding
    }
  }
}