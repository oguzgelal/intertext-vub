/**
 * Base for all packages
 * 
 * @interface IPackage
 * @param {string} id
 * @param {string} type
 */
export interface IPackage {
  id?: string
  type: string
  isComponent: boolean
  isCommand: boolean
  isRelation: boolean
}
