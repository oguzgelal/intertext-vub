import type { IPackage } from '../system/Package'
import type { IComponent } from '../system/Component'
import { ComponentTypes } from '../system/Component'
import StageCtrl from './StageCtrl';

import type {
  Registry,
  RegistryItem,
  RegistryProps,
  IRegistryManager,
  IStageCtrl,
} from './types';

/**
 * Populate window variable on debug mode
 * @param {RegistryManager} rm RegistryManager instance
 */
declare global {
  interface Window {
    rm: RegistryManager
  }
}

// TODO: tests

class RegistryManager implements IRegistryManager {

  private stage: IStageCtrl;
  private registry: Registry = {};
  private props: RegistryProps;

  /**
   * @param props 
   */
  constructor(props?: RegistryProps) {
    this.props = props;
    if (props && props.debug) window.rm = this;

    // init stage
    this.stage = new StageCtrl(props);
  }

  /**
   * Adds a package into registry
   * @param {IPackage} pack Package to add to the registry
   */
  private upsertRegistryItem = (pack: IPackage, options: { silent?: boolean } = {}): void => {
    const { silent } = options;
    const newItem: RegistryItem = { package: pack };
    this.registry = { ...this.registry, [pack.id]: newItem };
    if (!silent) this.handleRegistryChange();
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
  private deleteRegistryItem = (pack: IPackage, options: { silent?: boolean } = {}): void => {
    const { silent } = options;
    delete this.registry[pack.id];
    if (!silent) this.handleRegistryChange();
  }

  /**
   * Updates the subscriber functions on registry change
   */
  private handleRegistryChange = () => {
    if (typeof this.props.onRegistryUpdate === 'function') {
      this.props.onRegistryUpdate(this.registry);
    }
  }

  /**
   * Determines if a given package is a component
   * @param {IPackage} pack 
   * @return {boolean} True if a package is a component
   
  private isComponent = (pack: IPackage): boolean => {
    if (!this.validatePackage(pack)) return false;
    return pack.type in ComponentTypes;
  }
  */

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
   * Inserts multiple packages into registry manager
   * @param {IPackage[]} packages 
   */
  insertPackages = (packages: [IPackage]): void => {
    packages.map(pack => this.insertPackage(pack, { batch: true }));
    this.handleRegistryChange();
  }

  /**
   * Inserts package into registry manager
   * @param {IPackage} pack 
   */
  insertPackage = (pack: IPackage, options: { batch?: boolean }): void => {
    const { batch } = options;
    
    // Evaluate if this package is valid, do not proceed if not. 
    this.validatePackage(pack, { throw: true });

    // Insert this package into registry
    this.upsertRegistryItem(pack, { silent: batch });

    // Evaluate this package
  }
}

export default RegistryManager;