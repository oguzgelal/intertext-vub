/**
 * --- Semantic Relations ---
 * 
 * 1. Meaningful Relations
 * 
 * Replaces the traditional parent-child relationships between DOM elements. Parent-child 
 * relationships are not descriptive, the nature of the relationship between a parent and 
 * child is usually implied. Semantic relations solves this issue by replacing the traditional 
 * parent-child relationships with named meaningful bindings. 
 * 
 * 2. Separation of concerns
 * 
 * This approach maximizes separation of concerns and package reuse, as it allows creating packages 
 * completely agnostic of their relationship with other packages. Therefor, making it possible to alter 
 * the behaviour or appearance of a component without replacing the component itself during runtime.
 * 
 * 3. Declarative, rule-based nature
 * 
 * Intertext has a CSS-like rule based nature. Intertext packages are basically declarations, 
 * they declare what Intertext client should render, and how that component should behave. Semantic 
 * relations not only fits in very well with this principle, it improves it as well. 
 * 
 * A package declaration may be cross-referencing another package, and that other package may not be 
 * available yet. This is a perfectly valid and an expected behaviour for Intertext systems, but in 
 * theory this is an invalid situation. For instance, component A tries to render another component 
 * B as its child, but B is not available yet, this creates a situation where A tries to render 
 * something that does not exists, which is an error that needs to be handled on the component level. 
 * This situation should be perceived just like an HTML element having a class name that does not 
 * have a CSS declaration for, which by definition is not an invalid situation. With semantic relations,
 * A will not know if it needs to render a component, until both A and B are available in memory and the 
 * binding between them is created by the Intertext engine.
 * 
 * 4. Flexibility
 * 
 * With semantic relations, relationships between packages are refactored out of the package 
 * declarations, which allows creating hierarchies that cannot be achieved by hardcoding relationships 
 * into the packages, such as components having multiple parents.
 * 
 * 5. Replaces Listeners, Events
 * 
 * Semantic relations replaces data types such as Events and Listeners, simplifying the architecture, 
 * making it easier to understand and build UI's with. The relations between packages can be made 
 * structural or behavioural depending on the context. For instance, "is_child_of" could be a relation 
 * between two components indicating the structure, whereas "on_click" could be a behavioural relation 
 * between a component and a command. 
 * 
 * 6. Garbage collection
 * 
 * This approach makes garbage collection possible. When a package is removed, Intertext engine can 
 * follow every other package that has a relation to it, and remove any dangling packages.
 */

import type { IPackage } from './Package';

/**
 * @enum {string}
 */
export enum RelationTypes {
  CHILDREN = 'CHILDREN',
  ACTIVE_SCREEN = 'ACTIVE_SCREEN'
}

/**
 * Relation type
 * Semantic relations between two package
 * 
 * @interface IRelation
 * @param {string} id The ID of the relation
 * @param {string} from The ID of the package bound from
 * @param {rel} rel Nature of this relation between these two packages. Omit for naked relation
 * @param {string} to The ID of the package bound to
 * 
 * @example
 * { id: 'login-btn', isComponent: true, type: 'CTA' }
 * { id: 'login-btn-text', isCommand: true, type: 'Text', contents: 'Login' }
 * { id: 'login-start', isCommand: true, type: 'Request', ... }
 * { isRelation: true, from: 'login-btn', to: 'login-btn-text', type: 'is-text-content' }
 * { isRelation: true, from: 'login-btn', to: 'login-btn-start', type: 'on-primary-interaction' }
 */
export interface IRelation extends IPackage {
  isRelation: true
  id: string
  type: RelationTypes
  from: IPackage['id'] | RelationTypes
  to: IPackage['id'] | RelationTypes
}
