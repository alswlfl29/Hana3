const assert = require("assert");
/*
아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.
*/
const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park]; // 오염되면 안됨!

// function addUser(person) {
//   const newUser = [...users];
//   newUser.push(person);
//   return newUser.map((item) => item.name);
// }

const addUser = (user) => [...users, user];

console.log("addUser:", addUser(hong));

// function removeUser(person) {
//   const idx = users.findIndex((item) => item.id === person.id);
//   const newUser = [...users];
//   newUser.splice(idx, 1);
//   return newUser.map((item) => item.name);
// }

const removeUser = (user) => users.filter((_user) => user.id !== _user.id);

console.log("removeUser:", removeUser(lee));

// function changeUser(person1, person2) {
//   const idx = users.findIndex((item) => item.id === person1.id);
//   const newUser = [...users];
//   newUser.splice(idx, 1, person2);
//   return newUser.map((item) => item.name);
// }

const changeUser = (oldUser, newUser) =>
  users.map((_user) => (_user.id === oldUser.id ? newUser : _user));

console.log("changeUser:", changeUser(kim, choi));
console.log("-------------------------------------");
// ex1) 배열의 각 원소를 String으로 변환하시오.
console.log("ex1) 배열의 각 원소를 String으로 변환하시오.");
const arr = [1, 2, 3, true];
const ret1 = arr.map((item) => item.toString());
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);

// ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
console.log("ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.");
// const classNames = (...args) => {
//   const result = args.reduce(
//     (acc, cur) => `${acc}${cur.length === 0 ? "" : " "}${cur}`,
//     ""
//   );
//   return result.trim();
// };
const classNamesV1 = (...args) =>
  // args.reduce((acc, cur) => `${acc}${acc && cur ? " " : ""}${cur}`, "");
  args.reduce((acc, cur) => `${acc}${acc && cur && " "}${cur}`, "");

// 스페이스가 존재할 때
const classNamesV2 = (...args) =>
  args.reduce(
    (acc, cur) =>
      `${acc}${acc && cur && cur.trim() && " "}${cur && cur.trim()}`,
    ""
  );
const ret2 = classNamesV2("", "a b c", "d", " ", "e");
console.log(ret2);
// assert.strictEqual(ret2, "a b c d e");

console.log("-------------------------------------");
// 다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오.
const arr2 = [1, 2, 3, 4, 5];
// map 이용
// const ret3_1 = arr2
//   .map((a) => a ** 2)
//   .map(Math.sqrt) // 이거와 같음: (a) => Math.sqrt(a), (a) => fn(a) => fn
//   .map((a) => a ** 3);
// console.log("🚀 ~ ret3_1:", ret3_1);

const square = (num) => num ** 2;
const sqrt = Math.sqrt; // (num) => Math.sqrt(num)
const cube = (num) => num ** 3;

// const ret3_1 = arr2
//   .map(square)
//   .map(Math.sqrt) // 이거와 같음: (a) => Math.sqrt(a), (a) => fn(a) => fn
//   .map(cube);

// const result = arr2.map((arr) => {
//   const a = [square, sqrt, cube].reduce((acc, cur) => {
//     const answer = cur(acc);
//     acc = answer;
//     return acc;
//   }, arr);
//   return a;
// });
// console.log(result);

// square(2) => Math.sqrt(4) => cube(2)
const ret3_2 = [square, Math.sqrt, cube].reduce((acc, f) => f(acc), 2);
const bp1 = (n) => [square, Math.sqrt, cube].reduce((acc, f) => f(acc), n);
console.log("🚀 ~ ret3_2:", ret3_2, bp1(2));

const ret3_3 = arr2.map((a) => bp1(a)); // arr.map(bp1)이렇게 작성해도됨
console.log("🚀 ~ ret3_3:", ret3_3);
assert.deepStrictEqual(ret3_3, [1, 8, 27, 64, 125]);
