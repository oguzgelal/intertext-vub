/**
 * This class implements the generic Eval Queue methanism
 * for packages managed by the registry manager
 */

import type { IPackage } from '../system/Package';
import type { IComponent } from '../system/Component';
import { isComponent } from '../system/Component';
import EvalQueue from './EvalQueue';

import type {
  IPackageCtrl,
  IRegistryManager,
} from './types';

class PackageCtrl implements IPackageCtrl {

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
    // TODO:
    // check the component
    // check its parent
    // if no parent, it is a hit
    // if it has a parent
    //   if parent in registry, hit
    //   if parent not in registry, miss
    return true;
  };

  private handlePackage = () => {
    // TODO:
    // check component
    // if it has no parent, stage
    // if it has parent
    //   find parent in registry
    //   append component under parent
    //   update registry item
    //   do not mutate registry item package data
    return true;
  }

  private handleCommand = () => {}
  private handleComponent = () => {}

  apply = (packages: IPackage[]) => {
    // TODO:
    // filter only non-components
    // call this.eval.apply(components)
  }
}

export default PackageCtrl;