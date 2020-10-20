import type { ComponentID, CommandID } from '../types';
import type { IComponent } from "../Component";
import type { ComponentTypes } from "../Component";
import type { EventTypes } from "../Events";

/**
 * A Call To Action component
 * 
 * @interface ICTA
 * @param {ComponentID} id
 * @example <caption>Web</caption> <button>...</button>
 */
export interface ICTA extends IComponent {
  id: ComponentID
  type: ComponentTypes.CTA
  text: string
}
