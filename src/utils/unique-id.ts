import ShortUniqueId from 'short-unique-id';

export function uniqueId(prefix: string, length: number = 10): string {
  const uuid = new ShortUniqueId({ length });
  return `${prefix}_${uuid.rnd()}`;
}
