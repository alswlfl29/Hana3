// ex1-1) 특정 범위의 난수를 발생시키는 함수를 작성하시오.
/*
rand(1, 10); // 1 ~ 10 사이의 난수
rand(0, 9);  // 0 ~ 9 사이의 난수
rand(100, 200); // 100 ~ 200 사이의 난수
*/
// function rand(num1, num2) {
//   const ran = num1 + Math.floor((num2 - num1) * Math.random());
//   return ran;
// }
// console.log("1 ~ 10 사이의 난수", rand(1, 10));
// console.log("0 ~ 9 사이의 난수", rand(0, 9));
// console.log("100 ~ 200 사이의 난수", rand(100, 200));

// ex2-1) 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
// const date = new Date("1970-01-02") - new Date("1970-01-01");
// console.log("date:", date);
const d1 = new Date();
d1.setFullYear(1970);
d1.setMonth(0);
d1.setDate(1);
console.log("🚀 ~ d1:", d1);

const d2 = new Date();
d2.setFullYear(1970);
d2.setMonth(0);
d2.setDate(2);
console.log("🚀 ~ d2:", d2);

console.log(Math.floor((d2.getTime() - d1.getTime()) / 1000));
// ex2-2) 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.
const today = new Date();
const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());
const lastDate = new Date();
lastDate.setDate(1);
lastDate.setMonth(lastDate.getMonth() + 1);
lastDate.setDate(0);
console.log("🚀 ~ lastDate:", lastDate.getDate());

const dates = Array(5)
  .fill(0)
  .map(() => rand(1, lastDate.getDate()))
  .map((day) => {
    const tmpDate = new Date();
    tmpDate.setDate(day);
    return tmpDate;
  });
console.log(
  "🚀 ~ days:",
  dates.sort((a, b) => (a > b ? -1 : 1))
);

// ex2-3) 내년(2025년)의 오늘(2월 1일)의 요일을 출력하시오.
const weekNames = [..."일월화수목금토"];
const nextYearToday = new Date();
nextYearToday.setFullYear(nextYearToday.getFullYear() + 1);
console.log(
  "🚀 ~ next year today week:",
  weekNames[nextYearToday.getDay()] + "요일"
);

// ex2-4) 오늘(2월 1일)로 부터 100일 후의 날짜는?
const now = new Date();
now.setDate(+100);
console.log(now);
