import type { IPackage } from "./Package";
import type { ListenerID } from './types';
import type { EventTypes } from './Events';
import type { IComponent } from './Component';
import type { ICommand } from './Command';

/**
 * A listener type
 * 
 * @interface ICommand
 * @param {ListenerID} id
 * @param {Events} event Type of this event
 * @param {IComponent | ICommand} source
 *   What is this listener attached to ? Fields `event` and `source`
 *   could be combined to create flexible listener. For example, `event`
 *   could be of type `onPrimaryInteraction` and `source` could cross ref
 *   a CTA component, and the `command` cross referenced will run on
 *   interaction upon the CTA component. Or `source` could cross ref another
 *   Command, and event could be of type `onAferCommand`, which would cause
 *   the Command referenced at `command` would execute right after the one
 *   referenced at `source`.
 * @param {ICommand} command What is the action this listener should take ?
 */
export interface IListener extends IPackage {
  isListener: true
  id: ListenerID
  event: EventTypes
  source: IComponent | ICommand,
  command: ICommand
  // immediate: boolean /* TODO */
}

/**
 * A listener is basically a named link between a source and
 * a command, with the name being an event. It will be required
 * to perform much more frequient reads than writes,
 * moreover a page is likely to contain many more components and
 * commands than listeners. Keeping a lookup table for listeners
 * will reduce the read time to O(1) 
 * 
 * @param {listeners} ListenerID[]
 * @param {object} sources
 */
export type ListenersLookupTable = {
  listeners: ListenerID[],
  sources: {
    [key: string]: /* source: ComponentID | CommandID */ {
      [key: string]: /* event: EventType */ (
        ListenerID[]
      )
    }
  }
}