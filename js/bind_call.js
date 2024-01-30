function f(id, addr) {
  console.log(this, id, addr, this.name);
}

const obj = { name: "Hong" };
const bf = f.bind(obj);

bf(1, "Sungsoo");

// this의 arguments, 배열인자
f.apply(obj, [2, "Seoul"]);
// this의 arguments, 인자들
f.call(obj, 2, "Pusan");
