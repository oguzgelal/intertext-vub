import type { IPackage } from '../../system/Package';
import type { ComponentID } from '../../system/types';
import type { IComponent } from '../../system/Component';

import type {
  IStageManager,
  IRegistryManager,
} from '../types';

class StageManager implements IStageManager {

  private registry: IRegistryManager;
  private stage: ComponentID[] = [];

  /**
   * @param {IRegistryManager} registry
   */
  constructor(registry: IRegistryManager) {
    this.registry = registry;
  }

  /**
   * Updates the subscriber functions on stage change
   */
  private handleStageChange = () => {
    if (this.registry.props && typeof this.registry.props.onStageUpdate === 'function') {
      this.registry.props.onStageUpdate(this.stage);
    }
  }

  /**
   * Stages a component
   * @param {IComponent} component 
   */
  private stageComponent = (id: ComponentID): void => {
    this.stage = [ ...this.stage, id ];
    this.registry.update(id, item => ({ ...item, staged: true }));
    this.handleStageChange();
  }

  /**
   * Removes a component from stage
   * @param {IComponent} component 
   */
  private unstageComponent = (id: ComponentID): void => {
    this.stage = this.stage.filter((id: ComponentID) => id !== id).slice();
    this.registry.update(id, item => ({ ...item, staged: false }));
    this.handleStageChange();
  }
}

export default StageManager;