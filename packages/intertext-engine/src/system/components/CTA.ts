import type { ComponentShape, ComponentTypes } from "../Component";

/**
 * A Call To Action component
 * 
 * @interface ICTA
 * @param {ComponentShape['id']} id
 * @example <caption>Web</caption> <button>...</button>
 */
export interface ICTA extends ComponentShape {
  id: string
  type: ComponentTypes.CTA
  text: string
}
