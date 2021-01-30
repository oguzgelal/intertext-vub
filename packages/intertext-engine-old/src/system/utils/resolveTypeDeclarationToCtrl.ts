/**
 * Resolve package controller instance from type declaration
 */

import { PackageCtrl } from '../Package';
import { commandCtrl } from '../Command';
import { componentCtrl } from '../Component';
import { entityCtrl } from '../Entity';
import { relationCtrl } from '../Relation';

const typeDecMap = {

  // components
  'cmp': componentCtrl,
  'component': componentCtrl,
  [componentCtrl.getTypeDeclarationKey()]: componentCtrl,
  
  // commands
  'cmd': commandCtrl,
  'command': commandCtrl,
  [commandCtrl.getTypeDeclarationKey()]: commandCtrl,
  
  // entities
  'ent': entityCtrl,
  'entity': entityCtrl,
  [entityCtrl.getTypeDeclarationKey()]: entityCtrl,

  // relation
  'rel': relationCtrl,
  'relation': relationCtrl,
  [relationCtrl.getTypeDeclarationKey()]: relationCtrl,
}

export default (typeDeclaration: string): PackageCtrl => {
  return typeDecMap[typeDeclaration];
}