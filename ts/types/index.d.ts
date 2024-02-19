declare global {
  interface Window {
    gName: string;
  }

  interface Array<T> {
    first(): T;
  }
}

type X = string | number; // export를 안쓰면 전역이됨

declare module "mmm" {
  export const xx: string;
}
