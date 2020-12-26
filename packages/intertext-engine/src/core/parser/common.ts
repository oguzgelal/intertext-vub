import type { PackageShape } from '../../system/Package';

export type PackageUnparsed = Record<string, unknown>;

export type PackageUnparsedWithIds = {
  id: PackageShape['id']
}

export type ParseOutput<T> = {
  package?: T,
  packages?: T[],
}

export type ParserFunc = (packagesRaw: PackageUnparsed[]) => PackageShape[];