/* 피보나치 수열을 memoization하여 출력하는 함수를 작성해 보세요.
    수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
    즉, 0 ~ 9까지의 값은 각각 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.
*/

// BeforeMemoization
function fibonacciBeforeMemoization(n) {
  const d = []; // [0,1, ...]
  for (let i = 0; i <= n; i += 1) {
    // if (i < 2) d.push(i);
    // else d.push(d[i - 1] + d[i - 2]);
    d.push(i < 2 ? i : d[i - 1] + d[i - 2]);
  }
  return d[n];
}

console.log(fibonacciBeforeMemoization(5)); // 5
console.log(fibonacciBeforeMemoization(7)); // 13

// memoization
// 비 순수함수 => side effect 발생
const memoizedTable = [];
function fibonacci(n) {
  if (memoizedTable.length > n) return memoizedTable[n];
  for (let i = memoizedTable.length; i <= n; i += 1) {
    memoizedTable.push(i < 2 ? i : memoizedTable[i - 1] + memoizedTable[i - 2]);
  }
  return memoizedTable[n];
}

console.log(fibonacci(5)); // 5
console.log(fibonacci(7)); // 13

// 순수함수 => side effect 없애기
function memoized(fn) {
  const memoizedTable = {}; // key-value로 담기
  return function (k) {
    // if (memoizedTable[k]) return memoizedTable[k];
    // memoizedTable[k] = fn[k];
    // return memoizedTable[k];
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}
const memoizedFibonacci = memoized(function (n) {
  // if (n < 2) return n;
  // return fibo(n - 1) + fibo(n - 2);
  return n < 2 ? n : memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
});

const mf5 = memoizedFibonacci(5); // 5
console.log("mf5: ", mf5);
const mf7 = memoizedFibonacci(7); // 7
console.log("mf7: ", mf7);
