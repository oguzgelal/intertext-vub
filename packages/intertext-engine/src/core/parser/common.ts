import type { PackageShape } from '../../system/Package';

export type PackageRaw = Record<string, unknown>;

export type PackageRawWithIds = {
  id: PackageShape['id']
}

export type ParseOutput<T> = {
  package?: T,
  packages?: T[],
}

export type ParserFunc = (packagesRaw: PackageRaw[]) => PackageShape[];