/**
 * @typedef {string} PackageType
 */
type PackageType = string;

/**
 * @typedef {string} PackageID
 */
export type PackageID = string;

/**S
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
}
