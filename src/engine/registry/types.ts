import type { IPackage, PackageID } from '../system/Package'
import type { IComponent } from '../system/Component'

/**
 * A package in the registry
 * @param {IPackage} package The source of the package
 */
export type RegistryItem = {
  package: IPackage,
}

/**
 * Dictionary of all available packages registered
 * @type {object} Registry  
 */
export type Registry = {
  [key: string]: RegistryItem
}

/**
 * @type {PackageID} RegistryItemID
 */
export type RegistryItemID = PackageID;

/**
 * Arguments received by RegistiryManager
 * @type {object} RegistryProps
 * @param {(newRegistry: Registry) => void} onRegistryUpdate Subscribe to registry updates
 * @param {(newStage: Stage) => void} onStageUpdate Subscribe to stage updates
 * @param {boolean} debug True if debugging
 */
export type RegistryProps = {
  onRegistryUpdate?: (newRegistry: Registry) => void
  onStageUpdate?: (newStage: Stage) => void
  debug?: boolean
}

export interface IRegistryManager {
  props: RegistryProps
}

/**
 * Components visible on the current screen that should be rendered
 * @type {array} Stage
 */
export type Stage = IComponent[]
export interface IStageCtrl {
  apply: (packages: IPackage[]) => void
}

export type EvalQueue = IPackage[]
export type EvalIsHitFn = (pack: IPackage) => boolean;
export type EvalHandleFn = (pack: IPackage) => void;
export interface IEvalCtrl {
  isHit: EvalIsHitFn,
  handle: EvalHandleFn,
  apply: (packages: IPackage[]) => void
}

export interface IEvalComponentCtrl {
  apply: (packages: IPackage[]) => void
}