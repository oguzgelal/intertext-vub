import type { IPackage } from '../../system/Package';
import type { IComponent } from '../../system/Component';
import type { ICommand } from '../../system/Command';

import type {
  IPackageManager,
  IRegistryManager,
} from '../types';

class CommandCtrl {

  private registry: IRegistryManager;
  private packageManager: IPackageManager;

  /**
   * @param {IRegistryManager} registry
   * @param {IPackageManager} packageManager
   */
  constructor(registry: IRegistryManager, packageManager: IPackageManager) {
    this.registry = registry;
    this.packageManager = packageManager;
  }

  isCommand = (pack: IPackage) => {
    return pack.isCommand;
  }

  invalidate = (command: ICommand) => {
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