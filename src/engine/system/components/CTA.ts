import type { IComponent, ComponentTypes } from "../Component";

/**
 * A Call To Action component
 * 
 * @interface ICTA
 * @param {IComponent['id']} id
 * @example <caption>Web</caption> <button>...</button>
 */
export interface ICTA extends IComponent {
  id: string
  type: ComponentTypes.CTA
  text: string
}
