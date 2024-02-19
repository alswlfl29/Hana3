/*
 * 두 타입을 합치는 Combine 유틸리티 타입 만들기
 *  힌트: 두 타입의 같은 key 라면 union type, 그렇지 않다면 각 타입의 key type
    - 공통키: 키들의 교집합
 */

interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

// type Combine<T, U> = {
//   [key in keyof (T & U)]: key extends keyof T & keyof U
//     ? T[key] | U[key]
//     : key extends keyof U
//     ? U[key]
//     : key extends keyof T
//     ? T[key]
//     : unknown;
// };
type Combine<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};
type ICombined = Combine<IUser, IDept>;
