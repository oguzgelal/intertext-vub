import { get } from 'lodash';
import { merge } from 'lodash/fp';
import type { PackageShape } from '../../system/Package';
import type { RelationTypes, RelationShape } from '../../system/Relation';
import RelationCtrl from '../package/RelationCtrl';

// TODO: tests

type RegistryItem = {
  id: PackageShape['id']
  package: PackageShape
}

// { parent1: { isParentOf: { child1: true } } }
// { isStaged: { null: { parent1: true } } }
type RegistryRelationsDict = (
  Record<RelationShape['from'],
    Record<RelationTypes,
      Record<RelationShape['to'],
        boolean
      >
    >
  >
)

export type RegistryContents = Record<PackageShape['id'], RegistryItem>

type OnRegistryUpdate = (newContents: RegistryContents) => void

class RegistryManager {

  public contents: RegistryContents;
  public relations: RegistryRelationsDict;
  private onRegistryUpdate: OnRegistryUpdate;

  /**
   * @param props 
   */
  constructor(onRegistryUpdate?: OnRegistryUpdate) {
    this.contents = {}
    this.relations = {}
    this.onRegistryUpdate = onRegistryUpdate;
  }

  /**
   * Inserts a package in registry
   * @param {PackageShape | PackageShape[]} pack
   */
  insert = (pack: PackageShape | PackageShape[]): void => {
    this.upsertPackages(Array.isArray(pack) ? pack : [pack])
  }

  /**
   * Updates a registry item
   * @param {string} id
   * @param {function updateFn(item:RegistryItem) => Partial<RegistryItem>} updateFn
   */
  update = (id: string, updateFn: (existing: RegistryItem) => Partial<RegistryItem>): void => {
    let err;
    const existingItem: RegistryItem = this.get(id);
    if (!existingItem) err = `Package with ID "${id}" not found.`
    if (typeof updateFn !== 'function') return;
    const newItem = updateFn(existingItem);
    if (typeof newItem !== 'object') err = 'Invalid registry item';
    if (err) throw new Error(err);
    this.upsert(existingItem.package, { regitem: newItem });
  }

  /**
   * Find the registry item for a package
   * @param {id} string
   * @returns {RegistryItem} 
   */
  get = (id: string): RegistryItem => {
    if (this.contents[id]) return this.contents[id];
    return null;
  }

  /**
   * Check if an item exists in the registry
   * @param {id} string 
   * @returns {boolean} 
   */
  exists = (id: string): boolean => {
    return !!this.get(id);
  }

  /**
   * Remove the registry item for this package
   * @param {PackageShape} pack
   */
  delete = (id: string): void => {
    delete this.contents[id];
  }

  /**
   * Updates the subscriber functions on registry change. Must be called
   * manually to trigger updates only when necessary
   */
  private handleChange = () => {
    if (typeof this.onRegistryUpdate === 'function') {
      this.onRegistryUpdate(this.contents)
    }
  }

  /**
   * Inserts or updates multiple packages
   */
  public upsertPackages = (packages: PackageShape[]): void => {
    packages.forEach(pack => this.upsert(pack,
      { suppressChange: true })
    );
    
    this.handleChange();
  }

  /**
   * Inserts or updates a package in registry
   * @param {PackageShape} pack
   * @param {object} options
   */
  private upsert = (pack: PackageShape, {
    regitem,
    suppressChange
  }: {
    regitem?: Partial<RegistryItem>,
    suppressChange?: boolean
  } = {}): void => {

    // upsert package into registry
    this.upsertPackage(pack, regitem);

    // upsert relation into relations dictionary
    if (RelationCtrl.is(pack)) {
      this.upsertRelation(<RelationShape>pack)
    }

    // handle change if not suppressed
    if (!suppressChange) {
      this.handleChange();
    }
  }

  /**
   * Insert a package in registry, or update the registry item of an existing package
   * 
   * @param {PackageShape} pack
   * @param {Partial<RegistryItem>} regitem
   */
  private upsertPackage = (pack: PackageShape, regitem?: Partial<RegistryItem>) => {
    this.contents = Object.assign({}, this.contents, {
      [pack.id]: Object.assign({}, get(this.contents, pack.id), regitem || {
        id: pack.id,
        package: pack,
      })
    });
  }

  /**
   * Insert a relation into the relations dictionary
   * 
   * @param {RelationShape} relation
   */
  private upsertRelation = (relation: RelationShape) => {
    this.relations = merge(this.relations, {
      [relation.from]: {
        [relation.type || null]: {
          [relation.to]: true
        }
      }
    })
  }
}

export default RegistryManager;