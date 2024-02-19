// const s: number = 1;

import { Y } from "./types/study";
import { xx } from "mmm";
// export {};
// // a.ts는 모듈로써, 별도의 스코프를 가짐

const s: number = 1;
const str = "abc";
console.log("str>>", str.replaceAll("a", "A"));

let x: X;
let y: Y;

console.log(xx);

type Animals = "dog" | "cat" | "pig" | 9;
type AnimalCounts = {
  [key in Animals]: number;
};

type AnimalCounts2<T extends string | number> = {
  // [key in T extends string ? T : `x${T}`]: number;
  [key in T extends string ? T : `x${T}`]: key extends "x9" ? string : number;
};
type Ac2 = AnimalCounts2<Animals>;

type ArrayifyUnlessString<T> = T extends string ? T : T[];
type HalfArrayified = ArrayifyUnlessString<string | number>;
type HalfArrayified2 = ArrayifyUnlessString<"str" | 1 | 2>; //?

type TI<T, U> = T extends U[] ? U : T;
type TII<T> = T extends (infer U)[] ? U : T;

type TT1 = TI<string[], string>;
type TT2 = TI<string, string>;

type TII1 = TII<string[]>;
type TTI2 = TII<string>;

type OnlyStringProperties<T> = {
  [k in keyof T]: T[k] extends string ? k : never;
}[keyof T];

// type YYY = OnlyStringProperties<AllEventData>;
// type QQQ = YYY[keyof YYY];
// type X = keyof YYY;

interface AllEventData {
  participants: string[];
  location: string;
  name: string;
  year: number;
}

// 'location' | 'name'
type OnlyStringEventData = OnlyStringProperties<AllEventData>;

// --------------------------------------
type G = "Hi" | "Hello";
type GG = `${G}xx`;

type Greeting = `Hello${string}`;
const g1: Greeting = "Hello123";

type Method = "get";
type Version = "1.0" | "2.0";
type Model = "user" | "post";
type Req = `${Method} /api/${Version}/${Model}s${`/${number}` | ""}`;

type DataKey = "location" | "name" | "year";

type ExistenceChecks = {
  [key in `check${Capitalize<DataKey>}`]: () => boolean;
};

function checkExistence(checks: ExistenceChecks) {
  checks.checkLocation();
  checks.checkName();
  // checks.checks.checkWrong(); // Error
}
