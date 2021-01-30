import { PackageCtrl } from './Package';
import type { PackageShape } from './Package';

export enum CommandTypes {
  ALERT = 'ALERT'
}

export interface CommandShape extends PackageShape {
  isCommand: true
  id: string
  type: CommandTypes
  once: boolean
}

export class CommandCtrl extends PackageCtrl {

  protected TYPE_DECLARATION_KEY = 'isCommand';

}

export const commandCtrl = new CommandCtrl();