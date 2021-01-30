/**
 * This class implements the generic Eval Queue methanism
 * for packages managed by the registry manager
 */

import type { PackageShape } from '../../system/Package';
import type { ComponentShape } from '../../system/Component';
import type { CommandShape } from '../../system/Command';
import type { EntityShape } from '../../system/Entity';
import type { RelationShape } from '../../system/Relation';
import ComponentCtrl from './ComponentCtrl';
import CommandCtrl from './CommandCtrl';
import EntityCtrl from './EntityCtrl';
import RelationCtrl from './RelationCtrl';
import EvalQueue from '../utils/EvalQueue';
import type RegistryManager from '../registry/RegistryManager';
import type StageManager from '../stage/StageManager';

class PackageManager {

  private queue: EvalQueue;
  private registry: RegistryManager;
  private stage: StageManager;

  /**
   * @param {RegistryManager} registry
   */
  constructor(registry: RegistryManager, stage: StageManager) {
    this.registry = registry;
    this.stage = stage;

    this.queue = new EvalQueue(
      this.isPackageHit,
      this.handlePackage,
      this.invalidate,
    );
  }

  private isPackageHit = (pack: PackageShape): boolean => {
    
    if (ComponentCtrl.is(pack)) {
      return ComponentCtrl.isHit(<ComponentShape>pack, this.registry);
    }
    if (CommandCtrl.is(pack)) {
      return CommandCtrl.isHit(<CommandShape>pack, this.registry);
    }
    if (EntityCtrl.is(pack)) {
      return EntityCtrl.isHit(<EntityShape>pack, this.registry);
    }
    if (RelationCtrl.is(pack)) {
      return RelationCtrl.isHit(<RelationShape>pack, this.registry)
    }
    
    // if above conditions does not hold,
    // this is a miss
    return false;
  };

  private handlePackage = (pack: PackageShape): boolean => {
    
    if (ComponentCtrl.is(pack)) {
      return ComponentCtrl.handle(<ComponentShape>pack, this.registry);
    }
    if (CommandCtrl.is(pack)) {
      return CommandCtrl.handle(<CommandShape>pack, this.registry);
    }
    if (EntityCtrl.is(pack)) {
      return EntityCtrl.handle(<EntityShape>pack, this.registry);
    }
    if (RelationCtrl.is(pack)) {
      return RelationCtrl.handle(<RelationShape>pack, this.registry, this.stage)
    }

    // remove package from the queue
    return true;
  }

  invalidate = (pack: PackageShape): boolean => {

    if (ComponentCtrl.is(pack)) {
      return ComponentCtrl.invalidate(<ComponentShape>pack);
    }
    if (CommandCtrl.is(pack)) {
      return CommandCtrl.invalidate(<CommandShape>pack);
    }
    if (EntityCtrl.is(pack)) {
      return EntityCtrl.invalidate(<EntityShape>pack);
    }
    if (RelationCtrl.is(pack)) {
      return RelationCtrl.invalidate(<RelationShape>pack)
    }
    
    // if a package is neither of these,
    // its not valid
    return true;
  }

  apply = (packages: PackageShape[]): void => {
    this.queue.evaluate(packages);
  }
}

export default PackageManager;