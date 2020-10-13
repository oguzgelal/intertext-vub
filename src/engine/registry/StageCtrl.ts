import type { IPackage } from '../system/Package'
import type { IComponent } from '../system/Component'

import type {
  Stage,
  IStageCtrl,
  RegistryProps,
  IRegistryManager,
} from './types';

class StageCtrl implements IStageCtrl {

  private rm: IRegistryManager;
  private stage: Stage = [];

  /**
   * @param {IRegistryManager} rm 
   */
  constructor(rm: IRegistryManager) {
    this.rm = rm;
  }

  /**
   * Updates the subscriber functions on stage change
   */
  private handleStageChange = () => {
    if (this.rm.props && typeof this.rm.props.onStageUpdate === 'function') {
      this.rm.props.onStageUpdate(this.stage);
    }
  }

  /**
   * Stages a component
   * @param {IComponent} component 
   */
  private stageComponent = (component: IComponent): void => {
    this.stage = [ ...this.stage, component ];
    this.handleStageChange();
  }

  /**
   * Removes a component from stage
   * @param {IComponent} component 
   */
  private unstageComponent = (component: IComponent): void => {
    this.stage = this.stage.filter((c: IComponent) => c.id !== component.id).slice();
    this.handleStageChange();
  }

  /**
   * Stage packages that needs to be staged
   * @param {IPackage[]} packages 
   */
  apply = (packages: IPackage[]) => {}
}

export default StageCtrl;