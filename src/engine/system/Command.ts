import type { IPackage } from "./Package";

/**
 * @typedef {string} CommandID
 */
export type CommandID = string;

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
 * @param {boolean} immediate Execute this command as soon as it is received
 *  
 */
export interface ICommand extends IPackage {
  id: CommandID
  type: CommandTypes
  once: boolean
}
