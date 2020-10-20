import type { PackageID } from '../system/types';
import type { IPackage } from '../system/Package';

/**
 * @type {PackageID} RegistryItemID
 */
export type RegistryItemID = PackageID;

/**
 * An item in the registry
 * @param {RegistryItemID} id
 * @param {IPackage} package The source of the package
 * @param {boolean} staged Is this registry item in stage
 */
export type RegistryItem = {
  id: RegistryItemID,
  package: IPackage,
  staged?: boolean,
}

/**
 * Dictionary of all available packages registered
 * @type {object} Registry  
 */
export type Registry = {
  [key: string]: RegistryItem
}

/**
 * Arguments received by RegistiryManager
 * @type {object} RegistryProps
 * @param {(newRegistry: Registry) => void} onRegistryUpdate Subscribe to registry updates
 * @param {(newStage: Stage) => void} onStageUpdate Subscribe to stage updates
 * @param {boolean} debug True if debugging
 */
export type RegistryProps = {
  // TODO: remove these into the Api
  onRegistryUpdate?: (newRegistry: Registry) => void
  onStageUpdate?: (newStage: any) => void
  debug?: boolean
}

export interface IRegistryManager {
  props: RegistryProps
  get: (id: RegistryItemID) => RegistryItem | null
  update: (id: RegistryItemID, updateFn: (item: RegistryItem) => RegistryItem) => void
  delete: (id: RegistryItemID) => void
}

/**
 * Components visible on the current screen that should be rendered
 * @type {array} Stage
 */
export interface IStageManager {
  apply: (packages: IPackage[]) => void
}

/**
 * Package controller
 */

export interface IPackageManager {
  apply: (packages: IPackage[]) => void
}