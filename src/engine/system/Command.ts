import type { IPackage } from "./Package";
import type { CommandID } from './types';

/**
 * @enum {string}
 */
export enum CommandTypes {
  ALERT = 'ALERT'
}

/**
 * Base for all commands
 * 
 * @interface ICommand
 * @param {CommandID} id
 * @param {CommandTypes} type
 * @param {boolean} once Remove this command from registry after execution
 */
export interface ICommand extends IPackage {
  isComponent: true
  id: CommandID
  type: CommandTypes
  once: boolean
}