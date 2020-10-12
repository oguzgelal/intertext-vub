import type { IComponent } from "../Component";
import type { ComponentID, ComponentTypes } from "../Component";
import type { CommandID } from "../Command";
import type Events from "../Events";

/**
 * A Call To Action component
 * 
 * @interface ICTA
 * @param {ComponentID} id
 * @param {CommandID} [Events.onPrimaryInteraction]
 * @param {CommandID} [Events.onSecondaryInteraction]
 * @example <caption>Web</caption> <button>...</button>
 *  
 */
export interface ICTA extends IComponent {
  id: ComponentID
  type: ComponentTypes.CTA
  text: string
  [Events.onPrimaryInteraction]: CommandID
  [Events.onSecondaryInteraction]?: CommandID
}
