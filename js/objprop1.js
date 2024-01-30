const user = {
  "": 1,
  " ": 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  12345n: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
  true: 1, // OK  user[true]  user.true
  id: 2,
  [`name`]: "Hong", // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [Symbol()]: "Hong", // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo() {
    return `${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
};

console.log(user);
const x = user.getInfo();
console.log("x: ", x);
const y = user.getInfo;
console.log("y: ", y);
const keys = Object.keys(user);
console.log("keys:", keys);

function myEntries(obj) {
  const rets = []; // [[k, v], [k, v], ...]
  // for (let k in obj) {
  for (let k of Reflect.ownKeys(obj)) {
    console.log(k);
    rets.push([k, obj[k]]);
  }
  return rets;
}
console.log("myEntries:", myEntries(user));
console.log(Object.getOwnPropertyDescriptor(user, "id"));
console.log("-------------------syb");
// console.log(Object.getOwnPropertyDescriptor(user, syb));
console.log("-------------------syb");
console.log(Object.getOwnPropertyDescriptors(user));
