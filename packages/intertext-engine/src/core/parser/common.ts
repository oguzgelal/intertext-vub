import type { PackageShape } from '../../system/Package';

export type PackageRaw = Record<string, unknown>;

export type PackageRawWithIds = {
  id: PackageShape['id']
}