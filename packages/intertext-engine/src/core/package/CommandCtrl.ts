import type { PackageShape } from '../../system/Package';
import type { CommandShape } from '../../system/Command';
import type RegistryManager from '../registry/RegistryManager';

class CommandCtrl {

  static is = (pack: PackageShape) => {
    return pack.isCommand;
  }

  static invalidate = (command: CommandShape) => {

    // commands has to have an id
    if (!command.id) return true;

    return false;
  }

  static isHit = (command: CommandShape, registry: RegistryManager) => {
    return true;
  };

  static handle = (command: CommandShape, registry: RegistryManager) => {
    registry.insert(command);
    return true;
  }
}

export default CommandCtrl;