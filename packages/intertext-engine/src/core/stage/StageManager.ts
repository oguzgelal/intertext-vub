import type { PackageShape } from '../../system/Package';
import type { ComponentShape } from '../../system/Component';
import type RegistryManager from '../registry/RegistryManager';


export type StageContents = ComponentShape['id'][];

type OnStageUpdate = (newStage: StageContents) => void

class StageManager {

  private registry: RegistryManager;
  private stage: StageContents = [];
  private onStageUpdate: OnStageUpdate;

  /**
   * @param {OnStageUpdate} onStageUpdate
   */
  constructor(
    registry: RegistryManager,
    onStageUpdate?: OnStageUpdate,
  ) {
    this.registry = registry;
    this.onStageUpdate = onStageUpdate;
  }

  /**
   * Updates the subscriber functions on stage change
   */
  private handleStageChange = () => {
    if (typeof this.onStageUpdate === 'function') {
      this.onStageUpdate(this.stage);
    }
  }

  /**
   * Stages a component
   * @param {ComponentShape} component 
   */
  stageComponent = (id: ComponentShape['id']): void => {
    this.stage = [ ...this.stage, id ];
    this.registry.update(id, item => ({ ...item, staged: true }));
    this.handleStageChange();
  }

  /**
   * Removes a component from stage
   * @param {ComponentShape} component 
   */
  unstageComponent = (id: ComponentShape['id']): void => {
    this.stage = this.stage.filter((id: ComponentShape['id']) => id !== id).slice();
    this.registry.update(id, item => ({ ...item, staged: false }));
    this.handleStageChange();
  }
}

export default StageManager;