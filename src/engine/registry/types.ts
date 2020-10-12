import type { IPackage } from '../system/Package'
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


/**
 * Components visible on the current screen that should be rendered
 * @type {array} Stage
 */
export type Stage = IComponent[]


export type EvalQueue = IPackage[]


export interface IRegistryManager {}
export interface IStageCtrl {}
export interface IEvalCtrl {}