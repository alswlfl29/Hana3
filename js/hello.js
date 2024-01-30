// // primitive(call-by-value) vs object(call-by-reference)
// var userName = "Hong"; // string (primitive)
// var age; // declare + define (undefined)
// console.log("🚀 age:", age);
// age = 33;
// console.log(`Hello ${userName}`);

// let a = 1;
// let b = a;

const a = 123;
const bi = 123n;
console.log(a, bi);
console.log(a === bi);
console.log(a == bi);
// console.log(a + bi);
console.log(Number("abc"));
