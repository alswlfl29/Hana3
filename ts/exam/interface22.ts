interface User {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}

// type Ud2 = (TUser | TDept) & {addr: string};
interface Ud2 {
  [idx: string]: string | number;
  id: number; // 필수값
  addr: string;
}
// interface Ud2 extends Partial<User>, Partial<Dept> {
//   id: number;
//   addr: string;
// }

// interface Ud2 extends User, Dept {
//   id: number;
//   name?: string;
//   dname?: string;
//   caption?: string;
//   addr: string;
// }
// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };
const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };
