import test from 'ava';
import { chunk, splitAtIndex } from './index';

test('splits arrays at a given index', t => {
  t.deepEqual(
    splitAtIndex([1, 2, 3], 1),
    [[1], [2, 3]],
    'expected to work with basic index'
  );

  t.deepEqual(
    splitAtIndex([1, 2, 3], -1),
    [[1, 2], [3]],
    'expected to work with negative index'
  );

  t.deepEqual(
    splitAtIndex(['blakek', 'github', 'test'], 3),
    [['blakek', 'github', 'test'], []],
    'expected to work with out-of-bound index'
  );

  t.deepEqual(
    splitAtIndex([], 10),
    [[], []],
    'expected to work with empty array'
  );
});

test('chunks arrays', t => {
  t.deepEqual(chunk([], 2), [], 'expected to work with empty array');

  t.deepEqual(chunk([5, 4, 3, 2], 2), [
    [5, 4],
    [3, 2]
  ]);

  t.deepEqual(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10]
  ]);
});

test('splits strings at a given index', t => {
  t.deepEqual(
    splitAtIndex('abc', 1),
    ['a', 'bc'],
    'expected to work with basic index'
  );

  t.deepEqual(
    splitAtIndex('laskdjf', -2),
    ['laskd', 'jf'],
    'expected to work with negative index'
  );

  t.deepEqual(
    splitAtIndex('cool', 8),
    ['cool', ''],
    'expected to work with out-of-bound index'
  );

  t.deepEqual(
    splitAtIndex('', 10),
    ['', ''],
    'expected to work with empty string'
  );
});
