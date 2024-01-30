// // console.log(i); // error
// let i = 1;
// console.log("x=", x);
// var x = 1;
// console.log(ff, f);
// // f(); // error
// {
//   f();
//   var x = 2;
//   function f() {
//     console.log("f>", x, xx);
//   }
//   const b = 1;
// }
// function ff() {
//   // console.log("ff>", y, yy);
//   console.log("ff>", y);
// }
// if (x >= 2) {
//   var y = 5;
//   let yy = 55;
// }
// var xx = 100;
// ff();

let a = 1,
  b = 2; // let a = 1; let b = 2;
let c = (a++, b++); // 쉼표 연산자와 할당 연산자 ⇒ 증감연산자
let d = (a--, b + a); // a++; let d = b + a;
console.log(a, b, c, d); // ?
d = void (c = a + b);
console.log(a, b, c, d);
