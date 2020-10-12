import type { IPackage } from '../system/Package'
import type { IComponent } from '../system/Component'

import type {
  Stage,
  IStageCtrl,
  RegistryProps,
} from './types';

class StageCtrl implements IStageCtrl {

  private stage: Stage = [];
  private props: RegistryProps;

  /**
   * @param props 
   */
  constructor(props?: RegistryProps) {
    this.props = props;
  }

  /**
   * Stages a component
   * @param {IComponent} component 
   */
  stageComponent = (component: IComponent): void => {
    this.stage = [ ...this.stage, component ];
    this.handleStageChange();
  }

  /**
   * Removes a component from stage
   * @param {IComponent} component 
   */
  unstageComponent = (component: IComponent): void => {
    this.stage = this.stage.filter((c: IComponent) => c.id !== component.id).slice();
    this.handleStageChange();
  }

  /**
   * Updates the subscriber functions on stage change
   */
  private handleStageChange = () => {
    if (typeof this.props.onStageUpdate === 'function') {
      this.props.onStageUpdate(this.stage);
    }
  }


}

export default StageCtrl;