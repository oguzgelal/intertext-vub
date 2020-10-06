import type { IComponent } from "../Component";
import type { ComponentTypes } from "../Component";
import type Events from "../Events";
import type { CommandID } from "../Command";

export interface ICTA extends IComponent {
  type: ComponentTypes.CTA
  text: string
  [Events.onPrimaryInteraction]: CommandID
  [Events.onSecondaryInteraction]?: CommandID
}
