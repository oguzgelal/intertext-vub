import { PackageCtrl } from './Package';
import type { PackageShape } from './Package';

export enum RelationTypes {
  CHILDREN = 'CHILDREN',
  ACTIVE_SCREEN = 'ACTIVE_SCREEN'
}

export interface RelationShape extends PackageShape {
  isRelation: true
  id: string
  type: RelationTypes
  from: PackageShape['id'] | RelationTypes
  to: PackageShape['id'] | RelationTypes
}

export class RelationCtrl extends PackageCtrl {

  protected TYPE_DECLARATION_KEY = 'isRelation';

}

export const relationCtrl = new RelationCtrl();
