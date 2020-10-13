/**
 * This class implements Eval methanism specifically for
 * components. It implements isHit and handle methods with
 * regards to the registry.
 */

import type { IPackage } from '../system/Package';
import type { IComponent } from '../system/Component';
import { ComponentTypes } from '../system/Component';
import EvalCtrl from './EvalCtrl';

import type {
  EvalIsHitFn,
  EvalHandleFn,
  IEvalCtrl,
  IRegistryManager,
  IEvalComponentCtrl,
} from './types';


class EvalComponentCtrl implements IEvalComponentCtrl {

  private eval: IEvalCtrl;
  private rm: IRegistryManager;

  /**
   * Determines if a given package is a component
   * @param {IPackage} pack 
   * @return {boolean} True if a package is a component
   */
  private isComponent = (pack: IPackage): boolean => {
    return pack.type in ComponentTypes;
  }

  /**
   * @param {IRegistryManager} rm 
   */
  constructor(rm: IRegistryManager) {
    this.rm = rm;
    this.eval = new EvalCtrl(
      this.isComponentHit,
      this.handleComponent
    );
  }

  private isComponentHit: EvalIsHitFn = (component: IComponent) => {
    // TODO:
    // check the component
    // check its parent
    // if no parent, it is a hit
    // if it has a parent
    //   if parent in registry, hit
    //   if parent not in registry, miss
    return true
  };

  private handleComponent: EvalHandleFn = () => {
    // TODO:
    // check component
    // if it has no parent, stage
    // if it has parent
    //   find parent in registry
    //   append component under parent
    //   update registry item
    //   do not mutate registry item package data
  }

  apply = (packages: IPackage[]) => {
    // TODO:
    // filter only non-components
    // call this.eval.apply(components)
  }
}

export default EvalComponentCtrl;