interface Sliceable {
  length: number;
  slice: (start?: number | undefined, end?: number | undefined) => any;
}

export function splitAtIndex<T extends Sliceable>(
  array: T,
  index: number
): T[] {
  return [array.slice(0, index) as T, array.slice(index) as T];
}

export function chunk<T extends Sliceable>(array: T, chunkSize: number): T[] {
  if (array.length <= chunkSize) return [array];

  return [
    array.slice(0, chunkSize),
    ...chunk(array.slice(chunkSize), chunkSize)
  ];
}

export default { chunk, splitAtIndex };
