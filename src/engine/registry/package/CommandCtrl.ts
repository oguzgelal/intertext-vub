import type { IPackage } from '../../system/Package';
import type { IComponent } from '../../system/Component';
import type { ICommand } from '../../system/Command';

import type { IRegistryManager } from '../types';

class CommandCtrl {

  private registry: IRegistryManager;

  /**
   * @param {IRegistryManager} registry
   * @param {IPackageManager} packageManager
   */
  constructor(registry: IRegistryManager) {
    this.registry = registry;
  }

  isCommand = (pack: IPackage) => {
    return pack.isCommand;
  }

  invalidate = (command: ICommand) => {

    // commands has to have an id
    if (!command.id) return true;

    return false;
  }

  isHit = (command: ICommand) => {
    return false;
  };

  handle = (command: ICommand) => {
    // remove package from the queue
    return true;
  }
}

export default CommandCtrl;