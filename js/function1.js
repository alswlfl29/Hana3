function hello(name) {
  console.log(`Hello ${name}`, [...arguments]);
  return `Hello ${name}`;
}

hello("Hong");
const hi = hello;
hi("Kim");
console.log(">>", hi.length, hi.name);

function printFnReturnValue(fn, nm) {
  console.log("printFnRet>>>", fn.name, fn(nm));
}

printFnReturnValue(hi, "Lee");

function f(n) {
  if (n.hasOwnProperty("id")) n.id += 1;
  else n += 1;
}

let n = 10;
let nobj = { id: 10 };
f(n); // call by value
f(nobj); // call by reference
console.log(n, nobj);

function ff(a) {
  return a + 100;
}
function ff(a, b) {
  return a + b;
}
console.log(ff(10)); // 10 + undefined = NaN
console.log(ff(10, 20)); // 10 + 20 = 30

(function iif() {
  console.log("IIFE");
})();
// iif()

(async function af() {
  return 1;
})();
