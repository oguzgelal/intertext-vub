import type { IPackage } from '../system/Package';
import type { ComponentID } from '../system/types';
import type { IComponent } from '../system/Component';

import type {
  IStageManager,
  IRegistryManager,
} from './types';

class StageManager implements IStageManager {

  private rm: IRegistryManager;
  private stage: ComponentID[] = [];

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
  private stageComponent = (id: ComponentID): void => {
    this.stage = [ ...this.stage, id ];
    this.rm.update(id, item => ({ ...item, staged: true }));
    this.handleStageChange();
  }

  /**
   * Removes a component from stage
   * @param {IComponent} component 
   */
  private unstageComponent = (id: ComponentID): void => {
    this.stage = this.stage.filter((id: ComponentID) => id !== id).slice();
    this.rm.update(id, item => ({ ...item, staged: false }));
    this.handleStageChange();
  }

  /**
   * Should this item be staged
   * @param {IPackage} pack Package to be staged or not
   */
  private shouldPackageBeStaged = (pack: IPackage): boolean => {
    // get registry item first
    const item = this.rm.get(pack.id);
    // if this item is not in the registry, this is a mistake
    if (!item) throw new Error('Trying to stage an item that is not in registry');
    // if this item is already staged, skip
    if (item.staged) return;
    // only components can be staged
    if (!pack.isComponent) return false;
    // typecast
    const component = <IComponent>pack;
    // only top-level components can be staged. if a component
    // is is the child of another component, it should be added
    // under that component in the registry, but not staged
    if (component.parent) return false;
    // otherwise stage this item
    return true;
  }

  /**
   * Stage packages that needs to be staged
   * @param {IPackage[]} packages 
   */
  apply = (packages: IPackage[]) => {
    packages.forEach((pack: IPackage) => {
      // if this item should not be staged, return
      if (!this.shouldPackageBeStaged(pack)) return;
      // stage item
      this.stageComponent((<IComponent>pack).id);
    })
  }
}

export default StageManager;