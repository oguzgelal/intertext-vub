import type { IPackage } from "./Package";

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
 * @param {string} id
 * @param {CommandTypes} type
 * @param {boolean} once Remove this command from registry after execution
 */
export interface ICommand extends IPackage {
  isComponent: true
  id: string
  type: CommandTypes
  once: boolean
}