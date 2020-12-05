import type { ICommand, CommandTypes } from "./../Command";

export interface IAlert extends ICommand {
  id: string
  type: CommandTypes.ALERT,
  message: string
}
