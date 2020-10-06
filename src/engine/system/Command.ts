import type { IPackage } from "./Package";

export type CommandID = string;

export enum CommandTypes {
  ALERT = 'ALERT'
}

export interface ICommand extends IPackage {
  id: CommandID
  type: CommandTypes
}
