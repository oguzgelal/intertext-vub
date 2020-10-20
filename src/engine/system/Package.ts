import type { PackageID, PackageType } from './types';

/**
 * Base for all packages
 * 
 * @interface IPackage
 * @param {PackageID} id
 * @param {PackageType} type
 * 
 */
export interface IPackage {
  id: PackageID
  type: PackageType
  isComponent: boolean
  isCommand: boolean
  isListener: boolean
}
