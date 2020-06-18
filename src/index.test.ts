import test from 'ava';
import { chunk, splitAtIndex } from './index';

test('splits arrays at a given index', t => {
  t.deepEqual(
    splitAtIndex(1, [1, 2, 3]),
    [[1], [2, 3]],
    'expected to work with basic index'
  );

  t.deepEqual(
    splitAtIndex(-1, [1, 2, 3]),
    [[1, 2], [3]],
    'expected to work with negative index'
  );

  t.deepEqual(
    splitAtIndex(3, ['blakek', 'github', 'test']),
    [['blakek', 'github', 'test'], []],
    'expected to work with out-of-bound index'
  );

  t.deepEqual(
    splitAtIndex(10, []),
    [[], []],
    'expected to work with empty array'
  );
});

test('chunks arrays', t => {
  t.deepEqual(chunk(2, []), [[]], 'expected to work with empty array');

  t.deepEqual(chunk(2, [5, 4, 3, 2]), [
    [5, 4],
    [3, 2]
  ]);

  t.deepEqual(chunk(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10]
  ]);

  t.deepEqual(chunk(6, [123]), [[123]], 'handles chunk larger than input');
});

test('splits strings at a given index', t => {
  t.deepEqual(
    splitAtIndex(1, 'abc'),
    ['a', 'bc'],
    'expected to work with basic index'
  );

  t.deepEqual(
    splitAtIndex(-2, 'laskdjf'),
    ['laskd', 'jf'],
    'expected to work with negative index'
  );

  t.deepEqual(
    splitAtIndex(8, 'cool'),
    ['cool', ''],
    'expected to work with out-of-bound index'
  );

  t.deepEqual(
    splitAtIndex(10, ''),
    ['', ''],
    'expected to work with empty string'
  );
});

test('chunks strings', t => {
  t.deepEqual(chunk(2, ''), [''], 'expected to work with empty string');

  t.deepEqual(chunk(2, 'blakek'), ['bl', 'ak', 'ek']);

  t.deepEqual(chunk(3, 'abcdefghijk'), ['abc', 'def', 'ghi', 'jk']);

  t.deepEqual(chunk(6, 'a'), ['a'], 'handles chunk larger than input');
});
