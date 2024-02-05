const afterTime = (sec) =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000, sec));
console.time("for-await-of");
const arr = [afterTime(1), afterTime(2)];

const rets1 = [1, 2, 1].map((sec) => afterTime(sec));
console.log("🚀 ~ rets1:", rets1);

const rets2 = [];
for await (const ret of rets1) {
  rets2.push(ret);
}
console.log("🚀 ~ rets2:", rets2);

const rets3 = await Promise.all(rets1);
console.log("🚀 ~ rets3:", rets3);

const rets4 = (await Promise.allSettled(rets1)).map(({ value }) => value);
console.log("🚀 ~ rets3:", rets4);
