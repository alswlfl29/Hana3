/*
  함수를 한번만 실행하게 하는 once 함수를 작성하시오.
  ex) 
    const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
    console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
    console.log(fn(2, 7)); // undefined
    console.log(fn(3, 8)); // undefined
*/

// 클로저 이용
// 딱 한 번만 실행
// didRun이 true일 때만 실행

// const once = function (fn) {
//   let didRun = false;
//   return function (x, y) {
//     if (!didRun) {
//       didRun = true;
//       return `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`;
//     }
//     return undefined;
//   };
// };
// const fn = once((x, y) => {});

// console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
// console.log(fn(2, 7)); // undefined
// console.log(fn(3, 8)); // undefined

// 강사님 풀이코드
function once(f) {
  let didRun = false;
  return function (...args) {
    // return f.call(thisValue, ...args);
    if (didRun) return;
    // didRun = true;
    // f.apply(this, args);
    return (didRun = true), f.apply(this, args);

    // return didRun ? undefined : ((didRun = true), f.apply(this, args));
    // return !didRun ? ((didRun = true), f.apply(this, args)) : undefined;
    // return f.bind(thisValue)(...args);
  };
}

// const once = (f) => {};
const thisObj = { id: 100 };
const f = function (x, y) {
  return `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다! ${this.id}`;
};
// console.log(f.call(thisObj, 1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다! 100
// const fn = once(f.bind(thisObj))
const fn = once(f);
// console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn.call(thisObj, 1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!

console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined
