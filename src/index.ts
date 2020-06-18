interface Sliceable {
  slice: (start?: number | undefined, end?: number | undefined) => any;
}

export function splitAtIndex<T extends Sliceable>(
  array: T,
  index: number
): T[] {
  return [array.slice(0, index) as T, array.slice(index) as T];
}

export function chunk<T extends any[]>(array: T, chunkSize: number): T[] {
  return array.reduce((chunkedArray, element, index) => {
    if (index % chunkSize === 0) {
      chunkedArray.push([element]);
    } else {
      chunkedArray[chunkedArray.length - 1].push(element);
    }

    return chunkedArray;
  }, []);
}

export default { chunk, splitAtIndex };
