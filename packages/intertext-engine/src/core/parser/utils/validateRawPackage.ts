import { PackageUnparsed } from '../common';

export default (packageUnparsed: PackageUnparsed): boolean => {
  
  if (!packageUnparsed) {
    return false;
  }

  if (typeof packageUnparsed !== 'object') {
    return false;
  }

  return true;
}