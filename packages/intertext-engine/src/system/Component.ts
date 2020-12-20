import { PackageCtrl } from './Package';
import type { PackageShape } from "./Package";

export enum ComponentTypes {
  CTA = 'CTA',
}

export interface ComponentShape extends PackageShape {
  isComponent: true
  id: string
  type: ComponentTypes
}

export class ComponentCtrl extends PackageCtrl {

  protected TYPE_DECLARATION_KEY = 'isComponent';

}

export const componentCtrl = new ComponentCtrl();