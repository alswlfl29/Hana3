// debounce와 throttle 함수를 TypeScript로 작성하시오.
const debounce = (cb: (...args: unknown[]) => void, delay: number = 0) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: unknown[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

const throttle = (cb: (...args: any[]) => void, delay: number = 0) => {
  let timer: ReturnType<typeof setTimeout> | null;
  return (...args: any[]) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};
// test
const debo = debounce((a) => {
  if (typeof a === "number") console.log("debo>>", a + 1);
}, 1000);
for (let i = 10; i < 15; i++) debo(i); // 15

const thro = throttle((a) => console.log("thro>>", a + 1), 1000);
for (let i = 10; i < 15; i++) thro(i); // 11

enum BTX {
  A,
  B,
  AB,
  O,
}

function btype(bt: BTX) {
  if (bt === BTX.A) {
  }
}
