import type { ICommand } from "./../Command";
import type { CommandTypes } from "./../Command";

export interface IAlert extends ICommand {
  type: CommandTypes.ALERT,
  message: string
}
