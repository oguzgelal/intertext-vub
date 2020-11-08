/**
 * This class implements the generic Eval Queue methanism
 * for packages managed by the registry manager
 */

import type { IPackage } from '../../system/Package';
import type { IComponent } from '../../system/Component';
import type { ICommand } from '../../system/Command';
import type { IRelation } from '../../system/Relation';
import ComponentCtrl from './ComponentCtrl';
import CommandCtrl from './CommandCtrl';
import RelationCtrl from './RelationCtrl';
import EvalQueue from '../utils/EvalQueue';
import type RegistryManager from '../registry/RegistryManager';

class PackageManager {

  private queue: EvalQueue;
  private registry: RegistryManager;

  /**
   * @param {RegistryManager} registry
   */
  constructor(registry: RegistryManager) {
    this.registry = registry;

    this.queue = new EvalQueue(
      this.isPackageHit,
      this.handlePackage,
      this.invalidate,
    );
  }

  invalidate = (pack: IPackage) => {

    if (ComponentCtrl.is(pack)) {
      return ComponentCtrl.invalidate(<IComponent>pack);
    }
    if (CommandCtrl.is(pack)) {
      return CommandCtrl.invalidate(<ICommand>pack);
    }
    if (RelationCtrl.is(pack)) {
      return RelationCtrl.invalidate(<IRelation>pack)
    }
    
    // if a package is neither of these,
    // its not valid
    return true;
  }

  private isPackageHit = (pack: IPackage) => {
    
    if (ComponentCtrl.is(pack)) {
      return ComponentCtrl.isHit(<IComponent>pack, this.registry);
    }
    if (CommandCtrl.is(pack)) {
      return CommandCtrl.isHit(<ICommand>pack, this.registry);
    }
    if (RelationCtrl.is(pack)) {
      return RelationCtrl.isHit(<IRelation>pack, this.registry)
    }
    
    // if above conditions does not hold,
    // this is a miss
    return false;
  };

  private handlePackage = (pack: IPackage) => {
    
    if (ComponentCtrl.is(pack)) {
      return ComponentCtrl.handle(<IComponent>pack, this.registry);
    }
    if (CommandCtrl.is(pack)) {
      return CommandCtrl.handle(<ICommand>pack, this.registry);
    }
    if (RelationCtrl.is(pack)) {
      return RelationCtrl.handle(<IRelation>pack, this.registry)
    }

    // remove package from the queue
    return true;
  }

  apply = (packages: IPackage[]) => {
    this.queue.evaluate(packages);
  }
}

export default PackageManager;