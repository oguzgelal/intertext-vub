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

import type {
  IPackageManager,
  IRegistryManager,
} from '../types';


class PackageManager implements IPackageManager {

  private registry: IRegistryManager;
  private packageQueue: EvalQueue;
  private componentCtrl: ComponentCtrl;
  private commandCtrl: CommandCtrl;
  private relationCtrl: RelationCtrl;

  /**
   * @param {IRegistryManager} registry
   */
  constructor(registry: IRegistryManager) {
    this.registry = registry;
    this.componentCtrl = new ComponentCtrl(this.registry);
    this.commandCtrl = new CommandCtrl(this.registry);
    this.relationCtrl = new RelationCtrl(this.registry);

    this.packageQueue = new EvalQueue(
      this.isPackageHit,
      this.handlePackage,
      this.invalidatePackage,
    );
  }

  private invalidatePackage = (pack: IPackage) => {

    // component
    if (this.componentCtrl.isComponent(pack)) {
      return this.componentCtrl.invalidate(<IComponent>pack);
    }
    
    // command
    if (this.commandCtrl.isCommand(pack)) {
      return this.commandCtrl.invalidate(<ICommand>pack);
    }
    
    // relation
    if (this.relationCtrl.isRelation(pack)) {
      return this.relationCtrl.invalidate(<IRelation>pack)
    }
    
    // if a package is neither of these,
    // its not valid
    return true;
  }

  private isPackageHit = (pack: IPackage) => {
    
    // component
    if (this.componentCtrl.isComponent(pack)) {
      return this.componentCtrl.isHit(<IComponent>pack);
    }
    
    // command
    if (this.commandCtrl.isCommand(pack)) {
      return this.commandCtrl.isHit(<ICommand>pack);
    }
    
    // relation
    if (this.relationCtrl.isRelation(pack)) {
      return this.relationCtrl.isHit(<IRelation>pack)
    }
    
    // if above conditions does not hold,
    // this is a miss
    return false;
  };

  private handlePackage = (pack: IPackage) => {
    
    // component
    if (this.componentCtrl.isComponent(pack)) {
      return this.componentCtrl.handle(<IComponent>pack);
    }
    
    // command
    if (this.commandCtrl.isCommand(pack)) {
      return this.commandCtrl.handle(<ICommand>pack);
    }
    
    // relation
    if (this.relationCtrl.isRelation(pack)) {
      return this.relationCtrl.handle(<IRelation>pack)
    }

    // remove package from the queue
    return true;
  }

  apply = (packages: IPackage[]) => {
    this.packageQueue.evaluate(packages);
  }
}

export default PackageManager;