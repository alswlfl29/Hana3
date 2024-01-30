function f(a) {
  return a ** 2;
}

const af = (a) => a ** 2;

console.log(f(3));
console.log(af(3));

function f2(a, b) {
  const c = a ** b;
  return Math.sqrt(c);
}

const af2 = (a, b) => {
  console.log(arguments);
  const c = a ** b;
  return Math.sqrt(c);
};

console.log(f2(3, 4));
console.log(af2(3, 4));

function gugudan(a) {
  return function (b) {
    return a * b;
  };
}

const fff = (a) => (b) => {
  for (let i = 1; i <= 9; i++) {
    console.log(`${a} X ${i} = ${a * i}`);
  }
};

const gugu2dan = gugudan(2);
gugu2dan();
const gugu3dan = gugudan(3);
gugu3dan();
console.log(gugu2dan(5));
console.log("🚀 ~ gugu3dan:", gugu3dan(9));

console.log("--------------------------");
globalThis.y = 10;
// var y =10; // 모듈로 잡힘?
function bfn_fd(x) {
  console.log(x, this.y);
}

const bfn = (x) => console.log(x, this.y);

bfn(9); // 9 10
bfn.bind({ y: 999 })(7); // 7 999 -> 7을 this로 인식

this.name = "moduleName";

const obj = {
  name: "ObjName",
  addr: { city: "Seoul", road: this.name },

  // bark1과 bark2는 메서드
  bark1() {
    console.log("1=", this.name);
    const self = this;
    setTimeout(function () {
      console.log("11=", self.name);
    }, 1000);
    console.log("xxxx");
  },
  bark2() {
    console.log("2=", this.name);
    setTimeout(() => {
      console.log("22=", this.name);
    }, 1000);
  },
  // f1과 f2는 프로퍼티
  // 일반함수에서 this는 해당 함수의 this -> 메서드와 동급
  f1: function () {
    console.log("f1>>>", this.name, this);
  },
  // 화살표 함수에서의 this는 내 부모의 this
  // node에서는 모듈로 찍히고, 브라우저에서는 window로 찍힘
  f2: () => {
    console.log("f2>>>", this.name, this.age, this);
  },
};

obj.bark1();
obj.bark2();
obj.f1();
obj.f2();

const xxx1 = obj.f1;
const xxx2 = obj.f2;
const oname = obj.name;
console.log("oname:", oname);
console.log("aa", obj.addr);
xxx1();
xxx2();
