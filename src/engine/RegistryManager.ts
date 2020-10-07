import type { IPackage } from './system/Package'
import type { IComponent } from './system/Component'
import { ComponentTypes } from './system/Component'

/**
 * Populate window variable on debug mode
 * @param {RegistryManager} rm RegistryManager instance
 */
declare global {
  interface Window {
    rm: RegistryManager
  }
}

/**
 * A package in the registry
 * @param {IPackage} package The source of the package
 * @param {boolean} staged True if this item in stage
 */
type RegistryItem = {
  package: IPackage,
  staged?: boolean
}

/**
 * Dictionary of all available packages registered
 * @type {object} Registry  
 */
type Registry = {
  [key: string]: RegistryItem
}

/**
 * Components visible on the current screen that should be rendered
 * @type {array} Stage
 */
type Stage = IComponent[]

/**
 * Arguments received by RegistiryManager
 * @type {object} RegistryProps
 * @param {(newRegistry: Registry) => void} onRegistryUpdate Subscribe to registry updates
 * @param {(newStage: Stage) => void} onStageUpdate Subscribe to stage updates
 * @param {boolean} debug True if debugging
 */
type RegistryProps = {
  onRegistryUpdate?: (newRegistry: Registry) => void
  onStageUpdate?: (newStage: Stage) => void
  debug?: boolean
}

// TODO: refactor
// TODO: tests

class RegistryManager {

  private registry: Registry = {};
  private stage: Stage = [];
  private props: RegistryProps;

  /**
   * @param props 
   */
  constructor(props?: RegistryProps) {
    this.props = props;
    if (props && props.debug) window.rm = this;
  }

  // registry ---

  /**
   * Adds a package into registry
   * @param {IPackage} pack Package to add to the registry
   * @param {RegistryItem} existing When provided, the existing item will be replaced
   */
  private insertRegistryItem = (pack: IPackage, item?: RegistryItem): void => {
    if (this.isInRegistry(pack)) {
      // TODO: replace package in this case
      console.warn(`Skipping duplicate entry "${pack.id}"`);
      return;
    }
    const newItem: RegistryItem = { package: pack };
    this.registry = { ...this.registry, [pack.id]: item || newItem };
    this.handleRegistryChange();
  }

  /**
   * Find the registry item for a package
   * @param {IPackage} pack 
   * @returns {RegistryItem} 
   */
  private getRegistryItem = (pack: IPackage): RegistryItem => {
    return this.registry[pack.id];
  }

  /**
   * Remove the registry item for this package
   * @param {IPackage} pack
   */
  private deleteRegistryItem = (pack: IPackage): void => {
    delete this.registry[pack.id];
  }

  /**
   * Updates a registry item without mutating it. If the
   * second parameter is omitted, a new object for registry
   * item will be created without value change
   * @param {IPackage} id Package to update in the registry
   * @param {object} set Object that registry item will be merged with.
   */
  private updateRegistryItem = (pack: IPackage, set?: object): void => {
    const tmpItem = this.getRegistryItem(pack);
    this.deleteRegistryItem(pack);
    this.insertRegistryItem(pack, { ...tmpItem, ...set })
  }

  /**
   * Checks if a package is already in registry
   * @param {IPackage} pack 
   * @return {boolean} True if package is already in registry
   */
  private isInRegistry = (pack: IPackage): boolean => {
    if (!pack.id) throw new Error("Package has no id")
    return this.registry.hasOwnProperty(pack.id);
  }

  /**
   * Updates the subscriber functions on registry change
   */
  private handleRegistryChange = () => {
    if (typeof this.props.onRegistryUpdate === 'function') {
      this.props.onRegistryUpdate(this.registry);
    }
  }

  // stage ---

  /**
   * Stages a component
   * @param {IComponent} component 
   */
  private stageComponent = (component: IComponent): void => {
    if (!this.isInRegistry(component)) return;
    if (this.isInStage(component)) return;
    this.stage = [ ...this.stage, component ];
    this.updateRegistryItem(component, { staged: true });
    this.handleStageChange();
  }

  /**
   * Removes a component from stage
   * @param {IComponent} component 
   */
  private unstageComponent = (component: IComponent): void => {
    if (!this.isInRegistry(component)) return;
    this.stage = this.stage.filter((c: IComponent) => c.id !== component.id).slice();
    this.updateRegistryItem(component, { staged: false });
    this.handleStageChange();
  }

  /**
   * Checks if a component is staged
   * @param {IComponent} component 
   */
  private isInStage = (component: IComponent): boolean => {
    if (!this.isInRegistry(component)) return false;
    const registryItem: RegistryItem = this.getRegistryItem(component);
    return !!registryItem.staged;
  }

  /**
   * Updates the subscriber functions on stage change
   */
  private handleStageChange = () => {
    if (typeof this.props.onStageUpdate === 'function') {
      this.props.onStageUpdate(this.stage);
    }
  }

  // misc ---

  /**
   * Determines if a given package is a component
   * @param {IPackage} pack 
   * @return {boolean} True if a package is a component
   */
  private isComponent = (pack: IPackage): boolean => {
    if (!this.validatePackage(pack)) return false;
    return pack.type in ComponentTypes;
  }

  /**
   * Checks if a given package is valid
   * @param {IPackage} pack
   * @param {boolean} options.throw Throws an error if invalid
   */
  private validatePackage = (pack: IPackage, options: { throw?: boolean } = {}): boolean => {
    let err: string = null;
    if (!pack.id) err = "Package has no id"
    if (options.throw && err) throw new Error(err);
    return !err;
  }

  /**
   * Inserts package into registry manager
   * @param {IPackage} pack 
   */
  insertPackage = (pack: IPackage): void => {
    this.validatePackage(pack, { throw: true });
    this.insertRegistryItem(pack);
    
    // TODO: a better strategy to stage items
    // register without staging, staging should be
    // a command itself
    if (this.isComponent(pack)) {
      this.stageComponent(<IComponent>pack);
    } 
  }

  /**
   * Inserts multiple packages into registry manager
   * @param {IPackage[]} packages 
   */
  insertPackages = (packages: [IPackage]): void => {
    // TODO: trigger updates once for batch updates
    packages.map(this.insertPackage);
  }
}

export default RegistryManager;