import type { IPackage, PackageID } from '../system/Package';
import StageCtrl from './StageCtrl';
import PackageCtrl from './PackageCtrl';

import type {
  Registry,
  RegistryItem,
  RegistryItemID,
  RegistryProps,
  IRegistryManager,
  IStageCtrl,
  IPackageCtrl,
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

  private registry: Registry = {};
  public props: RegistryProps = {};
  private stageCtrl: IStageCtrl;
  private packageCtrl: IPackageCtrl;

  /**
   * @param props 
   */
  constructor(props?: RegistryProps) {
    this.props = props;
    if (props && props.debug) window.rm = this;

    // init stage
    this.stageCtrl = new StageCtrl(this);
    this.packageCtrl = new PackageCtrl(this);
  }

  /**
   * Updates a package
   * @param {RegistryItemID} id
   * @param {function updateFn(item:RegistryItem) => RegistryItem} updateFn
   */
  update = (id: RegistryItemID, updateFn: (item: RegistryItem) => RegistryItem) => {
    let err;
    const existingItem: RegistryItem = this.get(id);
    if (!existingItem) err = `Package with ID "${id}" not found.`
    if (typeof updateFn !== 'function') return;
    const newItem = updateFn(existingItem);
    if (typeof newItem !== 'object') err = 'Invalid registry item';
    if (err) throw new Error(err);
    if (!err) return this.upsert(id, newItem);
  }

  /**
   * Find the registry item for a package
   * @param {IPackage} pack 
   * @returns {RegistryItem} 
   */
  get = (id: RegistryItemID): RegistryItem => {
    return this.registry[id];
  }

  /**
   * Remove the registry item for this package
   * @param {IPackage} pack
   */
  delete = (id: RegistryItemID): void => {
    delete this.registry[id];
  }

  /**
   * Inserts or updates a package in registry
   * @param {RegistryItemID} id
   * @param {RegistryItem} item
   */
  private upsert = (id: RegistryItemID, item: RegistryItem): void => {
    const existingItem: RegistryItem = this.get(id);
    const newItem: RegistryItem = Object.assign({}, existingItem, item);
    this.registry = Object.assign({}, this.registry, { [id]: newItem });
  }

  /**
   * Updates the subscriber functions on registry change. Must be called
   * manually to trigger updates only when necessary
   */
  private handleChange = () => {
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
  insert = (pack: IPackage | IPackage[]): void => {
    // convert single packages into an array
    const packages: IPackage[] = Array.isArray(pack) ? pack : [pack];
    // first validate set of packages
    packages.forEach(pack => this.validatePackage(pack, { throw: true }))
    // insert packages into registry
    packages.forEach(pack => this.upsert(pack.id, { id: pack.id, package: pack }));
    // evaluate and process packages
    this.packageCtrl.apply(packages);
    // handle staging packages
    this.stageCtrl.apply(packages);
    // trigger registry change
    this.handleChange();
  }
}

export default RegistryManager;