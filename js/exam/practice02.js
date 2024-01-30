// 연습문제 1
// for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
console.log("-------------연습문제 1-------------");
for (let i = 0.1; i < 1; i = i + 0.1) {
  console.log(Number(i.toFixed(1)));
  console.log(+i.toFixed(1)); // 요즘 많이 사용하는 방식
}

// 연습문제 2
// 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
// (단, 소숫점 자리수는 긴쪽에 맞춘다)
console.log("-------------연습문제 2-------------");
function addPoints(a, b) {
  let aL = String(a).split(".")[1].length; // a의 소숫점 자리수 길이
  let bL = String(b).split(".")[1].length; // b의 소숫점 자리수 길이
  let len = Math.max(aL, bL); // 자릿수 긴쪽

  let add = a + b;
  console.log(Number(add.toFixed(len)));
}

// 리팩토링된 코드 by 강사님
function getCharLength(x) {
  return (x ?? 0).toString().split(".")[1].length;
}

function addPoints2(a, b) {
  // const aL = a.toString().split(".")[1].length; // a의 소숫점 자리수 길이
  // const bL = b.toString().split(".")[1].length; // b의 소숫점 자리수 길이
  // const len = aL > bL ? aL : bL; // 자릿수 긴쪽
  // const len = Math.max(
  //   a.toString().split(".")[1].length,
  //   b.toString().split(".")[1].length
  // );
  // a가 null 혹은 undefined인 경우
  // const len = Math.max(
  //   (a??0).toString().split(".")[1].length,
  //   (b??0).toString().split(".")[1].length
  // );
  const len = Math.max(getCharLength(a), getCharLength(b));
  const add = +(a + b).toFixed(len);
  console.log(add);
}

addPoints(0.21354, 0.1); // 0.31354
addPoints(0.14, 0.28); // 0.42
addPoints(0.34, 0.226); // 0.566
console.log("------리팩토링 코드------");
addPoints2(0.21354, 0.1); // 0.31354
addPoints2(0.14, 0.28); // 0.42
addPoints2(0.34, 0.226); // 0.566

// 연습문제 3
// 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.
console.log("-------------연습문제 3-------------");
const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
const { passwd, ...userInfo } = user;

console.log(userInfo);

// 연습문제 4
// 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.
console.log("-------------연습문제 4-------------");
const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;

console.log(id1, id2, id3);
