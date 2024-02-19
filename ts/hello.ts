// console.log("Hello, TypeScript!");

// function add(a: number, b: number) {
//   return a + b;
// }
// add(1, 2);

// interface Console {}

// type UserType = {
//   id: number;
//   name: string;
//   addr?: string;
// } & { city?: string };

// interface CityIf {
//   city?: string;
// }

// interface UserIF {
//   id: number;
//   name: string;
//   addr?: string;
//   getName(): string;
// }

// // class User implements UserType
// class User implements UserType {
//   public id: number;
//   name: string;
//   addr?: string;
//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }

// const s: string = "abc";

// let i = 1;

// const hong: User = { id: 1, name: "Hong" };
// const kim: User = { id: 2, name: "Kim", city: undefined };
// // const kim: User = { id: 2, name: "Kim", addr: "Seoul" }; // 에러 발생

// const xxx = { id: 3, name: "gg", addr: "Seoul" };
// const gg: User = xxx; // 이건 에러 안남(xxx가 freshness?가 꺼진 상태여서 사용 가능)

// type Addr = { id: number; addr?: string };
// const choi: Addr = { id: 1, addr: "Seoul" };

// const bt: "A" | "B" | "AB" = "A";
// const startHour: 12 | 7 = 7;

// const n: null = null;
// const u: undefined = undefined;

// let rapper = "Tom";

// rapper.length; // OK

// // rapper.push('!'); 해당 타입에서 사용할 수 없는 메서드는 에러 발생

// // let cher = {
// //   firstName : "John",
// //   lastName : "ahn"
// // };

// // cher.middleName;

// type Member = {
//   name: string;
//   addr: string;
//   discountRate: number;
// };
// type Guest = {
//   name: string;
//   age: number;
// };
// type Customer = Member | Guest;

// let cust: Customer;
// cust = {
//   name: "홍길동",
//   addr: "용산구",
//   discountRate: 0.1,
// };

// cust = {
//   name: "홍길동",
//   age: 26,
// };

// cust = {
//   name: "홍길동",
//   age: 26,
//   addr: "용산구",
// };

// type TUser = {
//   id: number;
//   name?: string;
// };
// type TUser2 = { id: number; name: string; addr: string };

// const hong = { id: 1, name: "Hong", addr: "Pusan" } as TUser; // ?
// const lee: TUser2 = { id: 1, name: "Lee", addr: "Seoul" }; // OK

// let tmpUser: TUser = lee; // ?
// let partner: TUser = { ...lee, id: 2, name: "Kim" }; // ?
// let partner2 = { ...hong, id: 3, addr: "Daejeon" } as TUser; // ?
// let friend: TUser = { ...lee }; // ?
// const xxx = { id: 9, addr: "Sokcho" };
// let friend2: TUser = { ...xxx, id: 8 }; // ?

// type X = {
//   id: number;
//   name: string;
// };

// type Y = {
//   id: number;
//   addr: string;
// };

// type Z = {
//   [i: string]: string | number;
//   id: number;
// };

// // type Z = X & Y;

// const compose: Z = { id: 1, name: "Hong", addr: "Seoul" };

// function fail(message: string): never {
//   throw new Error(`Invariant Failure : ${message}`);
// }

// function workWithUnsafeParam(param: unknown) {
//   if (typeof param !== "string") {
//     fail(`param should be a string, not ${typeof param}`);
//   }

//   // 여기에서 param의 타입은 string으로 알려짐
//   param.toUpperCase();
// }

// type AF = (n: number) => number;
// const af: AF = (n: number) => n ** 2;
// const af2: AF = function (n) {
//   return n ** 2;
// };

// interface XUser {
//   age: number;
//   init(this: XUser): (x: number) => {};
// }

// let u1: XUser = {
//   age: 20,
//   init(this: XUser) {
//     return (x: number) => this.age + x;
//   },
// };

// let getAge = u1.init();
// let age = getAge(5);
// console.log("🚀  age:", age);

// console.log("===================Array===================");
// let numbers: number[];
// numbers = [1, 2, 3, 4, 5];
// // numbers.push("six"); // Error

// type TUser = { id: number; name: string };
// const obj = { id: 1, name: "aa", addr: "1212" };
// let user: TUser = obj;
// const kim = { id: 2, name: "Kim", addr: "Pusan" };
// const users: TUser[] = [{ id: 3, name: "aa", addr: "1212" }, kim];

// console.log("===================Array===================");

// // array -> tuple -> union
// // ex) [A, B, AB, O]

// const bts = ["A", "B", "O", "AB"] as const;
// // type NA =Array<number>;
// type Array<T> = T[]; // number[]
// type BT<T extends any[]> = T[number];

// const bloodType: BTN<btn> = "AB";

// ==============interface================
// type Reading = { page: number };
// type Writing = { title: string };
// type ReadWrite = Reading | Writing;

// const x1: ReadWrite = { title: "aaa" }; // Writing
// const x2: ReadWrite = { title: "aaa", page: 1 }; // 알 수 없음
// const x3: ReadWrite = { page: 1 }; // Reading

// x1.title;
// x3.page;
// x2["title"];

interface Counts {
  [id: string]: number;
}

const counts: Counts = {};

counts.apple = 3;
counts.banana = 5;
