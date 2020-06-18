interface Sliceable {
  length: number;
  slice: (start?: number | undefined, end?: number | undefined) => any;
}

export function splitAtIndex<T extends Sliceable>(
  index: number,
  array: T
): T[] {
  return [array.slice(0, index) as T, array.slice(index) as T];
}

export function splitAtIndices<T extends Sliceable>(
  [index, nextIndex, ...indices]: number[],
  array: T
): T[] {
  if (index === undefined) return [array];

  const nextIndices = [nextIndex ? nextIndex - index : nextIndex, ...indices];

  return [
    array.slice(0, index),
    ...splitAtIndices(nextIndices, array.slice(index))
  ];
}

export function chunk<T extends Sliceable>(chunkSize: number, array: T): T[] {
  if (array.length <= chunkSize) return [array];

  return [
    array.slice(0, chunkSize),
    ...chunk(chunkSize, array.slice(chunkSize))
  ];
}

export default { chunk, splitAtIndex };
