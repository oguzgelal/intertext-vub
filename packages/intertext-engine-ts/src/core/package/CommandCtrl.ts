import type { IPackage } from '../../system/Package';
import type { ICommand } from '../../system/Command';
import type RegistryManager from '../registry/RegistryManager';

class CommandCtrl {

  static is = (pack: IPackage) => {
    return pack.isCommand;
  }

  static invalidate = (command: ICommand) => {

    // commands has to have an id
    if (!command.id) return true;

    return false;
  }

  static isHit = (command: ICommand, registry: RegistryManager) => {
    return true;
  };

  static handle = (command: ICommand, registry: RegistryManager) => {
    registry.insert(command);
    return true;
  }
}

export default CommandCtrl;