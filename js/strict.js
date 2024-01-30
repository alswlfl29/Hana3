// 'use strict'

f = 1;
NaN = 1;
Infinity = 0;

function f(a, a) {
  console.log("outer f");
}
delete f;
{
  f(100);
  function f(a) {
    console.log("block f");
  }
}
