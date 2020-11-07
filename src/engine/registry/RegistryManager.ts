import type { IPackage} from '../system/Package';
import type { RelationsLookupTable } from '../system/Relation';
import StageManager from './stage/StageManager';
import PackageManager from './package/PackageManager';

import type {
  Registry,
  RegistryItem,
  RegistryItemID,
  RegistryProps,
  IRegistryManager,
  IStageManager,
  IPackageManager,
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
  private stageManager: IStageManager;
  private packageManager: IPackageManager;
  public relations: RelationsLookupTable;
  public props: RegistryProps = {};

  /**
   * @param props 
   */
  constructor(props?: RegistryProps) {
    this.props = props;
    if (props && props.debug) window.rm = this;

    // init stage
    this.stageManager = new StageManager(this);
    this.packageManager = new PackageManager(this);
    this.relations = {};
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
   * Check if an item exists in the registry
   * @param {IPackage} pack 
   * @returns {RegistryItem} 
   */
  exists = (id: RegistryItemID): boolean => {
    return !!this.get(id);
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
   * Inserts or updates multiple packages
   */
  private upsertPackages = (packages: IPackage[]) => {
    // insert packages into registry
    packages.forEach(pack => this.upsert(pack.id, { id: pack.id, package: pack }));
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
  private validatePackages = (packages: IPackage[], options: { throw?: boolean } = {}): boolean => {
    let isValid: boolean = true;
    packages.forEach(pack => {
      if (this.packageManager.invalidate(pack)) {
        isValid = false
        if (options.throw) {
          throw new Error(`Package "${JSON.stringify(pack)}" is invalid`);
        }
      }
    })

    return isValid;
  }

  /**
   * TODO: Move this to the API
   * Inserts one or many packages into registry manager
   * @param {IPackage | IPackage[]} pack 
   */
  insert = (pack: IPackage | IPackage[]): void => {
    // convert single packages into an array
    const packages: IPackage[] = Array.isArray(pack) ? pack : [pack];
    // first validate set of packages
    this.validatePackages(packages, { throw: true })
    // insert that are not relations
    // TODO: logic of inserting stuff into registry should be
    // dictated by package manager (controllers)
    this.upsertPackages(packages.filter(p => !p.isRelation));
    // evaluate packages
    this.packageManager.apply(packages);
    // handle staging packages
    // this.stageManager.apply(packages);
    // trigger registry change
    this.handleChange();
  }
}

export default RegistryManager;