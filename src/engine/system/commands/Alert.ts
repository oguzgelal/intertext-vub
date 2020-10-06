import type { ICommand } from "./../Command";
import type { CommandTypes } from "./../Command";

export interface ICTA extends ICommand {
  type: CommandTypes.Alert,
  message: string
}
