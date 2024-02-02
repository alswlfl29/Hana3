const arr = [1, 2, 3];
console.log("🚀 ~ arr:", { ...arr });
console.log("🚀 ~ arr:", arr.entries());
console.log("🚀 ~ arr:", arr.length);

// arr.length = 2;
console.log("🚀 ~ arr:", arr);

const a = Array(3);
console.log("🚀 ~ a:", a);

const ar2 = Array(5).fill(1);
// ar2.fill("X", 3, 5); // 3부터는 X로 채우기(3번째부터 4번째까지)
ar2.fill("X", -4, -2);
console.log("🚀 ~ ar2:", ar2);

const ar3 = Array.from(arr);
arr[1] = 22;
console.log("🚀 ~ arr:", arr);
console.log("🚀 ~ ar3:", ar3);

const ar4 = Array.from([...arr, 4, 5]);
console.log("🚀 ~ ar4:", ar4);

// const arr44 = Array.from(Array(5), (_, i) => i + 1);
const arr44 = Array.from(Array(5), (_, i) => i + 1);
console.log("🚀 ~ arr44:", arr44);

const ar444 = Array.from(Array(5).keys()); // index 값
// const ar444 = Array.from(Array(5).values()); // 값들
// const ar444 = Array.from(Array(5).entries());
console.log("🚀 ~ ar444:", ar444);

const a41 = Array(5).map((_, i) => i + 1);
console.log("🚀 ~ a41:", a41);
const a41_1 = [...Array(5)].map((_, i) => i + 1);
console.log("🚀 ~ a41_1:", a41_1); // empty이어도 인덱스 값 반환

const ar5 = [..."abcdef"]; // string을 한 문자씩 자름
console.log("🚀 ~ ar5:", ar5);
const ar5_obj = { ..."abcdef" };
console.log("🚀 ~ ar5_obj:", ar5_obj);

const strs = "abc".split("");
console.log("🚀 ~ strs:", strs);

const ar6 = ["ab,cd".split(",")];
console.log("🚀 ~ ar6:", ar6);
const ar7 = [..."ab,cd".split(",")];
console.log("🚀 ~ ar7:", ar7);

const ar8 = "ab,cd".split(","); // 이게 올바른 문법(위에 꺼는 좋지 않음)
ar8.push("ee");
ar8.pop();
console.log("🚀 ~ ar8:", ar8);

const ax = [1, 2, 3];
ax.shift(); // [2, 3]
ax.unshift(0); // [0, 2, 3]
console.log("🚀 ~ ax:", ax);

console.log("------------------------------");
const stack = [];
const retPush = stack.push(1);
console.log("🚀 ~ retPush:", retPush); // 배열 길이 반환
stack.push(2, 3);
console.log("🚀 ~ stack:", stack);
console.log("🚀 ~ stack.pop:", stack.pop());
stack.length = 0; // stack = [];
stack.unshift(1);
stack.unshift(3, 2);
console.log("🚀 ~ stack:", stack);
console.log("🚀 ~ stack.pop:", stack.shift());

console.log("------------------------------");
const queue = [];
queue.push(1);
queue.push(2, 3);
console.log("🚀 ~ queue:", queue);
console.log("🚀 ~ queue.out:", queue.shift());
queue.length = 0;
queue.unshift(1);
queue.unshift(3, 2);
console.log("🚀 ~ queue:", queue);
console.log("🚀 ~ queue.out:", queue.pop());

console.log("------------------------------");
const orr = [{ id: 1 }, { id: 2 }, { id: 1 }];
// const idx1 = orr.indexOf({ id: 1 }); / Bad
const idx1 = orr.findIndex((item) => item.id === 1);
console.log("🚀 ~ idx1:", idx1); // 못찾은 경우 -1 반환
const didNotFind = idx1 === -1;
console.log("🚀 ~ didNotFind:", didNotFind);

for (const item of orr) console.log(item);
for (const [idx, item] of orr.entries()) console.log(idx, item);
console.log("------------------------------");
orr.forEach((item, idx) => console.log(idx, item));
console.log("------------------------------");
const mret1 = orr.map((item, idx) => console.log(idx, item));
console.log("🚀 ~ mret1:", mret1);
const overId1 = orr.filter((item, idx) => {
  console.log(idx, item);
  return item.id > 1;
});
console.log("🚀 ~ overId1:", overId1);
const overId2 = orr.filter((item) => item.id > 1);
console.log("🚀 ~ overId2:", overId2);

console.log("------------------------------");
const aa = [1, 2, 3];
console.log("aa>>>", aa.join(", "));
delete aa[2];
console.log("🚀 ~ aa:", aa);
aa["a"] = "AAA";
aa["b"] = "BBB";
aa[2.3] = 23;
aa[-1] = -1;
aa["1"] = 99; // = aa[1]=99
console.log("🚀 ~ aa:", aa);

console.log("------------------------------");
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a12 = a1.concat(a2);
const a21 = a2.concat(a1);
console.log("🚀 ~ a12:", a12, a1, a2);
console.log("🚀 ~ a21:", a21);

const a1_2 = [...a1, ...a2];
console.log("🚀 ~ a1_2:", a1_2);

const a22 = [2, 22];
function myConcat(...args) {
  // if (Array.isArray(args[0])) {
  //   return [...a22, ...args[0]];
  // }
  const argsArr = Array.isArray(args[0]) ? args[0] : args;
  return [...a22, ...argsArr];
}
const a22_1 = myConcat(3, 33);
console.log("🚀 ~ a22_1:", a22_1);

const a22_2 = myConcat([3, 33]);
console.log("🚀 ~ a22_2:", a22_2);

console.log("------------------------------");
const a5 = [1, 5, 4, 11, 7];
console.log("🚀 ~ a5-sort:", [...a5].sort());
console.log(
  "🚀 ~ a5-sort-fn:",
  a5.sort((a, b) => {
    console.log("a,b=", a, b);
    return a > b ? 1 : -1;
    // return a > b ? -1 : 1; // 역 순서
  })
);
console.log("🚀 ~ a5", a5);
console.log("🚀 ~ a5-reverse", a5.reverse());

const a6 = ["Kim", "Lee", "Hong"];
console.log("🚀 ~ a6:", a6.sort());

const users = [
  { id: 1, name: "Hong" },
  { id: 20, name: "Kim" },
  { id: 3, name: "Lee" },
];
console.log([...users].sort((a, b) => a.id - b.id));
console.log("🚀 ~ users.sort>>>:", users);

console.log("------------------------------");
const arr2 = [1, 2, 3, 4, 5];
// ex1) [2, 3] 출력
console.log("ex1:", arr2.slice(1, 3));
// ex2) 3부터 모두 다 추출
console.log("ex2:", arr2.slice(2));
// ex3) [2,3,4] 제거하기
const ex3 = arr2.splice(1, 3);
// console.log("ex3:", [...arr2.slice(0, 1), ...arr2.slice(-1)]);
console.log("ex3:", arr2);
// ex4) 복원하기
const ex4 = arr2.splice(1, 0, ...ex3);
console.log("ex4:", arr2);
// ex5) [3] 부터 끝까지 제거하기
const ex5 = arr2.splice(2);
console.log("ex5:", arr2);
// ex6) 복원하기
arr2.splice(2, 0, ...ex5);
console.log("ex6:", arr2);
// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
const ex7 = [...arr2];
ex7.splice(2, 1, "X", "Y", "Z");
console.log("ex7:", ex7);
// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
console.log("ex8:", [...arr2.slice(0, 2), "X", "Y", "Z", ...arr2.slice(-2)]);

console.log(">>>arr2:", arr2);
console.log(arr2.toSpliced(2, 2));

console.log("------------------------------");

const flat1 = [1, 4, 9].map((a) => a ** 2, Math.sqrt(2));
console.log("🚀 ~ flat1:", flat1);
const flat2 = [1, 4, 9].map((a) => [a ** 2, Math.sqrt(2)]).flat();
console.log("🚀 ~ flat2:", flat2);
const flat3 = flat1.flat();
console.log("🚀 ~ flat3:", flat3);

console.log("------------------------------");
console.log(arr);
let sum1 = 0;
for (let item of arr) sum1 += item;
console.log("🚀 ~ sum1:", sum1);

const sum2 = arr.reduce((sum, item) => sum + item, 0);
// sum = 0
// item = 1 => 0 + 1 => sum (1)
// item =22 => 1 + 22 => sum (23)
// item = 3 => 23 + 3 => sum (26)
// sum2 = 26
console.log("🚀 ~ sum2:", sum2);

console.log("------------------------------");
const namestr = users.reduce(
  // (acc, item) => `${acc}${acc ? " " : ""}${item.name}`,
  (acc, item) => `${acc} ${item.name}`,
  ""
);
console.log("🚀 ~ namestr:", namestr);

// ex) objs의 각 원소를 reduce를 이용하여 합쳐보세요.
const objs = [{ id: 1 }, { name: "Hong" }, { addr: "Seoul", id: 5 }];
const objR = objs.reduce((acc, item) => ({ ...acc, ...item }), {});
console.log("🚀 ~ objR:", objR);
