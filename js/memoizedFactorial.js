// 빅오 표기법: 연산한 횟수
let runCnt = 0;
// O(N)
// BeforeMemoization
// function factorialBeforeMemoization(n) {
//   if (n == 1) return 1;
//   return n * factorial(n - 1);
// }

// O(logN)
// 비 순수함수 => side effect 발생
const memoizedTable = {}; // 실행한 거 캐시(memoization)
// {5: 5 * 24, 4: 4 * 6
//  3: 3 * 2, 2: 2 * 1}

// memoization
function factorial(n) {
  runCnt += 1;
  if (n == 1) return 1;
  return memoizedTable[n] || (memoizedTable[n] = n * factorial(n - 1));
}

const f3 = factorial(3);
console.log("f3:", f3, runCnt);
runCnt = 0;
const f5 = factorial(5);
console.log("f5:", f5, runCnt);
runCnt = 0;
const f15 = factorial(15);
console.log("f15:", f15, runCnt);
runCnt = 0;

console.log("======================");

// clousure version
function memoized(fn) {
  const memoizedTable = {}; // 실행한 거 캐시(memoization)
  return function (key) {
    // if (memoizedTable[key]) return memoizedTable[key];
    // return (memoizedTable[key] = fn(key));
    return memoizedTable[key] || (memoizedTable[key] = fn(key));
  };
}

const memoizedFactorial = memoized(function (n) {
  runCnt += 1;
  if (n == 1) return 1;
  return n * memoizedFactorial(n - 1);
});

const mf3 = memoizedFactorial(3);
console.log("mf3:", mf3, runCnt);
runCnt = 0;
const mf5 = memoizedFactorial(5);
console.log("mf5:", mf5, runCnt);
runCnt = 0;
const mf15 = memoizedFactorial(15);
console.log("mf15:", mf15, runCnt);
runCnt = 0;
