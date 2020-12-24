import { PackageRaw } from '../common';

export default (packageRaw: PackageRaw): boolean => {
  
  if (!packageRaw) {
    return false;
  }

  if (typeof packageRaw !== 'object') {
    return false;
  }

  return true;
}