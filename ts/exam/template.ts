// 특정 함수의 인자 타입을 추출하는 유틸리티 타입을 작성하시오

type FirstArgs<F> = F extends (a: infer First, ...r: any) => any
  ? First
  : never;
type SecondArgs<F> = F extends (a: any, b: infer Second, ...r: any) => any
  ? Second
  : never;

// type Args<F> = F extends (...args: infer P) => any ? P : never; // 파라미터 타입 확인
type Args<F> = F extends (...args: infer P) => any ? P[number] : never;

function add(a: number, b: string) {}
function add2(a: number, b: string, c: boolean) {}

type A = FirstArgs<typeof add>; // number
type B = SecondArgs<typeof add>; // string

type SecondArgs2<F> = F extends (...args: infer P) => any
  ? P[1] extends undefined
    ? never
    : P[1]
  : never;
// type BLog = SecondArgs2<typeof log>; // never
type BLog2 = SecondArgs2<typeof add>; // never

type C = Args<typeof add>; // number | string
type C2 = Args<typeof add2>; // number | string | boolean

type EndWith = typeof String.prototype.endsWith;
type AX1 = Args<EndWith>;
// ⇒ string | number | undefined
type AX2 = Args<typeof String.prototype.charAt>;
// ⇒ number
