import type { CommandShape, CommandTypes } from "./../Command";

export interface IAlert extends CommandShape {
  id: string
  type: CommandTypes.ALERT,
  message: string
}
