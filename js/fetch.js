// // import fetch from "node-fetch";

// const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";

// // const isAsyncAwait = true;

// // if (isAsyncAwait) {
// //   const res = await fetch(sampleUrl);
// //   const data = await res.json();
// //   console.log("🚀 ~ data:", data);
// // } else {
// //   fetch(sampleUrl)
// //     .then((res) => res.json())
// //     .then((data) => console.log("data>>", data));
// // }

// const promiFetch = (url) =>
//   new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => resolve(res.json()))
//       .then((err) => reject(new Error(err)));
//   });

// const asyncFetch = async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// };

// // const fn = promiFetch;
// // const fn=asyncFetch
// const promiData = await promiFetch(sampleUrl);
// const asyncData = await asyncFetch(sampleUrl);
// console.log("🚀 ~ promiData:", promiData);
// console.log("🚀 ~ asyncData:", asyncData);
const f = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!res.ok) throw new Error("Failt to Fetch!!");

  // <2초 sleep하도록 이 부분을 작성해 보세요!>
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = await res.json();

  return data.name;
};

console.log("UserName=", await f());
