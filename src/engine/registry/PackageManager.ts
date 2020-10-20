/**
 * This class implements the generic Eval Queue methanism
 * for packages managed by the registry manager
 */

import type { IPackage } from '../system/Package';
import type { IComponent } from '../system/Component';
import type { ICommand } from '../system/Command';
import EvalQueue from './EvalQueue';

import type {
  IPackageManager,
  IRegistryManager,
} from './types';

// TODO: handle deletes

class PackageManager implements IPackageManager {

  private rm: IRegistryManager;
  private packageQueue: EvalQueue;

  /**
   * @param {IRegistryManager} rm 
   */
  constructor(rm: IRegistryManager) {
    this.rm = rm;
    this.packageQueue = new EvalQueue(
      this.isPackageHit,
      this.handlePackage
    );
  }

  private isPackageHit = (pack: IPackage) => {
    
    // component ---
    if (pack.isComponent) {
      // typecast
      const component = <IComponent>pack;
      // if a component has no parent, it is
      // a top level component, so this is a hit
      if (!component.parent) return true;
      // if a component has a parent, check if
      // the parent is availble in registry
      else if (this.rm.get(component.parent.id)) return true;
    }
    
    // command ---
    else if (pack.isCommand) {
      // for now commands are declarative 
      return true;
    }
    
    // listener ---
    else if (pack.isListener) {
      // for now listeners are declarative
      return true;
    }
    
    // if above conditions does not hold,
    // this is a miss
    return false;
  };

  private handlePackage = (pack: IPackage) => {
    
    // component ---
    if (pack.isComponent) {
      // TODO: parent check -> append to parent
    }
    
    // command ---
    if (pack.isCommand) {
      // TODO
    }
    
    // listener ---
    if (pack.isListener) {
      // TODO: build listeners lookup table
    }

    // remove package from the queue
    return true;
  }

  apply = (packages: IPackage[]) => {
    this.packageQueue.evaluate(packages);
  }
}

export default PackageManager;