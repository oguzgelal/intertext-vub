import { get } from 'lodash';
import { merge } from 'lodash/fp';
import type { IPackage } from '../../system/Package';
import type { ICommand } from '../../system/Command';
import type { IComponent } from '../../system/Component';
import type { IEntity } from '../../system/Entity';
import type { Relation, IRelation } from '../../system/Relation';

import ComponentCtrl from '../package/ComponentCtrl';
import CommandCtrl from '../package/CommandCtrl';
import RelationCtrl from '../package/RelationCtrl';
import EntityCtrl from '../package/EntityCtrl';

// TODO: tests

type RegistryItem<T> = {
  id?: string,
  package: T,
}

type OnRegistryUpdate = (newRegistry: RegistryContents) => void

type RegItemComponent = RegistryItem<IComponent>
type RegItemCommand = RegistryItem<ICommand>
type RegItemEntity = RegistryItem<IEntity>
type RegItemRelation = RegistryItem<IRelation>

export type RegistryContents = {
  components: Record<IComponent['id'], RegItemComponent>,
  commands: Record<ICommand['id'], RegItemCommand>,
  entities: Record<IEntity['id'], RegItemEntity>,
  relations:
    Record<IPackage['id'] | Relation,
      Record<IPackage['id'] | Relation,
        RegItemRelation |
        Record<IRelation['rel'], RegItemRelation>
      >
    >
}

class RegistryManager {

  public components: RegistryContents['components'] = {};
  public commands: RegistryContents['commands'] = {};
  public entities: RegistryContents['entities'] = {};
  public relations: RegistryContents['relations'] = {};
  private onRegistryUpdate: OnRegistryUpdate;

  /**
   * @param props 
   */
  constructor(onRegistryUpdate?: OnRegistryUpdate) {
    this.relations = {};
    this.components = {};
    this.entities = {};
    this.commands = {};
    this.onRegistryUpdate = onRegistryUpdate;
  }

  /**
   * Inserts a package in registry
   * @param {IPackage | IPackage[]} pack
   */
  insert = (pack: IPackage | IPackage[]): void => {
    this.upsertPackages(Array.isArray(pack) ? pack : [pack])
  }

  /**
   * Updates a registry item
   * @param {string} id
   * @param {function updateFn(item:RegistryItem<IPackage>) => Partial<RegistryItem<IPackage>>} updateFn
   */
  update = (id: string, updateFn: (existing: RegistryItem<IPackage>) => Partial<RegistryItem<IPackage>>) => {
    let err;
    const existingItem: RegistryItem<IPackage> = this.get(id);
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
   * @returns {RegistryItem<IPackage>} 
   */
  get = (id: string): RegistryItem<IPackage> => {
    if (this.commands[id]) return this.commands[id];
    if (this.components[id]) return this.components[id];
    if (this.entities[id]) return this.entities[id];
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
   * @param {IPackage} pack
   */
  delete = (id: string): void => {
    if (this.commands[id]) delete this.commands[id];
    if (this.components[id]) delete this.components[id];
  }

  /**
   * Updates the subscriber functions on registry change. Must be called
   * manually to trigger updates only when necessary
   */
  private handleChange = () => {
    if (typeof this.onRegistryUpdate === 'function') {
      this.onRegistryUpdate({
        commands: this.commands,
        components: this.components,
        entities: this.entities,
        relations: this.relations,
      })
    }
  }

  /**
   * Inserts or updates multiple packages
   */
  public upsertPackages = (packages: IPackage[]) => {
    packages.forEach(pack => this.upsert(pack,
      { suppressChange: true })
    );
    
    this.handleChange();
  }

  /**
   * Inserts or updates a package in registry
   * @param {string} id
   * @param {RegistryItem<IPackage>} item
   */
  private upsert = (pack: IPackage, options: {
    regitem?: Partial<RegistryItem<IPackage>>,
    suppressChange?: boolean
  } = {}): void => {

    const { regitem, suppressChange } = options;
    
    if (ComponentCtrl.is(pack)) {
      this.upsertComponent(<IComponent>pack, <RegistryItem<IComponent>>regitem);
    } else if (CommandCtrl.is(pack)) {
      this.upsertCommand(<ICommand>pack, <RegistryItem<ICommand>>regitem);
    } else if (EntityCtrl.is(pack)) {
      this.upsertEntity(<IEntity>pack, <RegistryItem<IEntity>>regitem)
    } else if (RelationCtrl.is(pack)) {
      this.upsertRelation(<IRelation>pack, <RegistryItem<IRelation>>regitem)
    }

    if (!suppressChange) {
      this.handleChange();
    }
  }

  // insert relation
  private upsertRelation = (relation: IRelation, regitem?: Partial<RegistryItem<IRelation>>) => {
    this.relations = merge(this.relations, {
      [relation.from]: {
        [relation.to]: {
          [relation.rel]: Object.assign({}, get(this.relations, [
            relation.from,
            relation.to,
            relation.rel
          ]), regitem || {
            package: relation
          })
        }
      }
    })
  }

  // insert entity
  private upsertEntity = (entity: IEntity, regitem?: Partial<RegistryItem<IEntity>>) => {
    this.entities = Object.assign({}, this.entities, {
      [entity.id]: Object.assign({}, get(this.entities, entity.id), regitem || {
        id: entity.id,
        package: entity,
      })
    });
  }

  // insert component
  private upsertComponent = (component: IComponent, regitem?: Partial<RegistryItem<IComponent>>) => {
    this.components = Object.assign({}, this.components, {
      [component.id]: Object.assign({}, get(this.components, component.id), regitem || {
        id: component.id,
        package: component,
      })
    });
  }

  // insert command
  private upsertCommand = (command: ICommand, regitem?: Partial<RegistryItem<ICommand>>) => {
    this.commands = Object.assign({}, this.commands, {
      [command.id]: Object.assign({}, get(this.commands, command.id), regitem || {
        id: command.id,
        package: command,
      })
    });
  }
}

export default RegistryManager;