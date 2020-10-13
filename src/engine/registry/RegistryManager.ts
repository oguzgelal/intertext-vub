import type { IPackage, PackageID } from '../system/Package';
import StageCtrl from './StageCtrl';
import EvalComponentCtrl from './EvalComponentCtrl';

import type {
  Registry,
  RegistryItem,
  RegistryItemID,
  RegistryProps,
  IRegistryManager,
  IStageCtrl,
  IEvalComponentCtrl,
} from './types';
import type { ICommand } from '../system/Command';

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

  public props: RegistryProps = {};
  private stageCtrl: IStageCtrl;
  private evalComponentCtrl: IEvalComponentCtrl;
  private registry: Registry = {};

  /**
   * @param props 
   */
  constructor(props?: RegistryProps) {
    this.props = props;
    if (props && props.debug) window.rm = this;

    // init stage
    this.stageCtrl = new StageCtrl(this);
    this.evalComponentCtrl = new EvalComponentCtrl(this);
  }

  /**
   * Adds a package into registry
   * @param {PackageID} id
   */
  private upsertRegistryItem = (id: PackageID, item: RegistryItem): void => {
    const existingItem: RegistryItem = this.registry[id];
    const newItem: RegistryItem = Object.assign({}, existingItem, item);
    this.registry = Object.assign({}, this.registry, { [id]: newItem });
  }

  /**
   * Find the registry item for a package
   * @param {IPackage} pack 
   * @returns {RegistryItem} 
   */
  private getRegistryItem = (id: RegistryItemID): RegistryItem => {
    return this.registry[id];
  }

  /**
   * Remove the registry item for this package
   * @param {IPackage} pack
   */
  private deleteRegistryItem = (id: RegistryItemID): void => {
    delete this.registry[id];
  }

  /**
   * Updates the subscriber functions on registry change. Must be called
   * manually to trigger updates only when necessary
   */
  private handleRegistryChange = () => {
    if (typeof this.props.onRegistryUpdate === 'function') {
      this.props.onRegistryUpdate(this.registry);
    }
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
   * Inserts one or many packages into registry manager
   * @param {IPackage | IPackage[]} pack 
   */
  insert = (pack: IPackage | [IPackage]): void => {

    const packages: IPackage[] = Array.isArray(pack) ? pack : [pack];

    // first validate set of packages
    packages.forEach(pack => this.validatePackage(pack, { throw: true }))

    // insert packages into registry
    packages.forEach(pack => {
      const item: RegistryItem = { package: pack };
      this.upsertRegistryItem(pack.id, item)
    });

    this.stageCtrl

    // evaluate components
    this.evalComponentCtrl.apply(packages);
    
    // trigger registry change
    this.handleRegistryChange();
  }
}

export default RegistryManager;