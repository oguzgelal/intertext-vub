import Package from './Package';
import type { PackageShape } from "./Package";

export enum CommandTypes {
  ALERT = 'ALERT'
}

export interface CommandShape extends PackageShape {
  isCommand: true
  id: string
  type: CommandTypes
  once: boolean
}

/**
 * Base for all commands
 */
export default class Command extends Package {

  static validate(item: Record<string, unknown>): boolean {
    return Package.validate(item) && !!item.isCommand;
  }
}