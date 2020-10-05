import type { IPackage } from "./Package";

export type CommandID = string;

export enum CommandTypes {
  Alert = 'alert'
}

export interface ICommand extends IPackage {
  id: CommandID
  type: CommandTypes
}
