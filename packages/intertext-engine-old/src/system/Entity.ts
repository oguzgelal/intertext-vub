import { PackageCtrl } from './Package';
import type { PackageShape } from "./Package";

export enum EntityTypes {
  SCREEN = 'SCREEN'
}

export interface EntityShape extends PackageShape {
  isEntity: true
  id: string
  type: EntityTypes
}

export class EntityCtrl extends PackageCtrl {
  
  protected TYPE_DECLARATION_KEY = 'isEntity';

}

export const entityCtrl = new EntityCtrl();