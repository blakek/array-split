# array-split

> 💔 Split and chunk arrays

Functions to help split an array at an index and chunk an array into pieces.

## Install

Using [Yarn]:

```bash
$ yarn add @blakek/array-split
```

…or using [npm]:

```bash
$ npm i --save @blakek/array-split
```

## API

### `chunk`

```ts
function chunk<T extends Sliceable>(chunkSize: number, array: T): T[];
```

Chunks an array into pieces of a given size.

```js
import { chunk } from '@blakek/array-split';

chunk(2, [1, 2, 3, 4]);
//» [ [ 1, 2 ], [ 3, 4 ] ]

chunk(3, ['a', 'b', 'c', 'd', 'e']);
//» [ [ 'a', 'b', 'c' ], [ 'd', 'e' ] ]

chunk(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
//» [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11 ] ]
```

### `splitAtIndex`

```ts
function splitAtIndex<T extends Sliceable>(index: number, array: T): T[];
```

Splits an array into two pieces at the given index. Anything below the index is
in the first array, the index and above are the second array.

Note, you may pass a negative index to split at the end of the array.

```js
import { splitAtIndex } from '@blakek/array-split';

splitAtIndex(0, [1, 2, 3, 4]);
//» [ [], [ 1, 2, 3, 4 ] ]

splitAtIndex(1, [1, 2, 3, 4]);
//» [ [ 1 ], [ 2, 3, 4 ] ]

splitAtIndex(-1, ['a', 'b', 'c']);
//» [ [ 'a', 'b' ], [ 'c' ] ]

splitAtIndex(3, ['a', 'b', 'c', 'd', 'e']);
//» [ [ 'a', 'b', 'c' ], [ 'd', 'e' ] ]
```

## Contributing

[Node.js] and [Yarn] are required to work with this project.

To install all dependencies, run:

```bash
yarn
```

### Useful Commands

|                     |                                                 |
| ------------------- | ----------------------------------------------- |
| `yarn build`        | Builds the project to `./dist`                  |
| `yarn format`       | Format the source following the Prettier styles |
| `yarn test`         | Run project tests                               |
| `yarn test --watch` | Run project tests, watching for file changes    |

## License

MIT

[node.js]: https://nodejs.org/
[npm]: https://npmjs.com/
[yarn]: https://yarnpkg.com/en/docs/
