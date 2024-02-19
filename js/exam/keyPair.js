/*
 * 다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
 * 배열에서 합해서 N이되는 두 개의 요소(index)를 찾는 keyPair(arr, N)
 * 함수를 작성하시오.
 */

import assert from "assert";

const keyPair1 = (arr, N) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let rest = N - arr[i];
    if (arr.includes(rest)) {
      return [i, arr.indexOf(rest)];
    }
  }
  return "없음";
};

// O(N) || O(logN)
const keyPair = (arr, n) => {
  const pairIdx = {}; // {6: 0} {value: pair-index}
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    if (pairIdx[val]) return [pairIdx[val], i];
    pairIdx[n - val] = i;
  }
};
console.log(keyPair([1, 3, 4, 5], 7)); // [1, 2]
console.log(keyPair([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.log(keyPair([1, 2, 4, 3, 6], 10)); // [2, 4]
console.log(keyPair([1, 2, 3, 4, 5, 7], 9)); // [3, 4]

// cf. O(n^2) ⇒ O(N) || O(logN)
assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
