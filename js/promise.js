// try {
//   setTimeout(() => {
//     console.log(new Date());
//     throw new Error("어디로?");
//   }, 1000);
// } catch (err) {
//   console.error("잡히나?", err);
// }

// const promi = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const now = Date.now();
//     if (now % 2 === 0) resolve(console.log("fulfill", now));
//     else reject(new Error("어디로?"));
//   }, 1000);
// });

// // promi.then(
// //   (succ) => console.log("Resolve"),
// //   (fail) => console.log("Reject")
// // );

// promi
//   .then((succ) => console.log("Resolve", succ))
//   .catch((err) => console.log("Error", err));

// const promiseFn = (id) =>
//   new Promise((resolve, reject) => {
//     console.log("id>>", id);
//     if (id < 5) resolve(id + 1);
//     else reject(new Error("어디로?" + id));
//   });
// promiseFn(1)
//   .then((res) => {
//     console.log("res1>>", res);
//     return promiseFn(res); // 2
//   })
//   .then((res) => {
//     console.log("res2>>", res);
//     return promiseFn(res); // 3
//   })
//   .then(promiseFn) // 4
//   .then((res) => promiseFn(res)) // 5
//   .catch((err) => console.log("Error!>>", err));

// const promiseFn = (id = 1) =>
//   new Promise((resolve, reject) => {
//     console.log("id>>", id);
//     if (id < 7) resolve(id + 1);
//     else reject(new Error("어디로?" + id));
//   });

// promiseFn()
//   .then((res) => {
//     console.log("res1>>", res); // 2
//     promiseFn(res); // 2
//   })
//   .then((res) => {
//     console.log("res2>>", res); // undefined
//     return promiseFn(res ?? 3); // 3
//   })
//   .then(promiseFn) //4
//   .then((res) => {
//     console.log("res3>>", res); //5
//     return promiseFn(res); //5
//   })
//   .then(() => promiseFn(4))
//   .then((res) => promiseFn(res))
//   .catch((err) => console.log("Error!??", err));

// import { rand } from "./utils/index.js";
// const randtime = new Promise((resolve) => {
//   const sec = rand(1, 4) * 500;
//   setTimeout(() => resolve(sec), sec);
// });

// const randTime = () =>
//   new Promise((resolve) => {
//     const sec = rand(1, 4) * 500;
//     setTimeout(() => {
//       console.log("sec=", sec);
//       resolve(sec);
//     }, sec);
//   });

// const isParellel = true;
// console.time("promi");
// if (isParellel) {
//   Promise.all([randTime(), randTime(), randTime()]).then(() =>
//     console.timeEnd("promi")
//   );
// } else {
//   randTime()
//     .then((x) => {
//       return randTime();
//     })
//     .then((x) => {
//       return randTime();
//     })
//     .then((x) => {
//       return randTime();
//     })
//     .then(() => console.timeEnd("promi"));
// }

// const vals = [1, 2, 3];
// vals.forEach((a) => randTime(a).then(console.log));

// Promise.all(vals.map(randTime)).then(console.table);
// Promise.all([randTime(1), Promise.reject("Error!")])
//   .then(console.table)
//   .catch(console.error);

setTimeout(() => console.log("cb1"), 0);
Promise.resolve()
  .then(() => console.log("cb2"))
  .then(() => console.log("cb3"));
