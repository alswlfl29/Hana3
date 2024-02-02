// const obj = {
//   id: 1,
//   name: "Hong",
//   f() {
//     console.log("ffffffffffff");
//   },
// };

// const objProxy = new Proxy(obj, {
//   set(target, prop, value) {
//     console.log("proxy.set>>", prop, value);
//     target[prop] = value;
//   },
//   get(target, prop) {
//     console.log(`proxy.get>>`, prop);
//     if (prop === "id_name") return `${target["id"]}. ${target["name"]}`;
//     return target[prop];
//   },
// });
// objProxy.id = 100;
// console.log("obj.id>>", objProxy.id);
// console.log("obj.id>>", objProxy.id_name);
// objProxy.f();
// console.log("::>>", objProxy instanceof obj.constructor); // objProxy는 obj의 인스턴스 -> 같은 프로토타입 보고 있음

// // console.table(obj);
// class Animal {
//   #name; // private 변수
//   // super(); // object의 생성자 함수 -> 숨겨져 있음
//   // instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
//   constructor(name) {
//     this.#name = name || super.constructor.name;
//     console.log("🚀 ~ constructor:", super.constructor);
//     console.log("prototype:", super.__proto__);
//   }
//   move() {
//     return "MOV";
//   }
//   getName() {
//     return this.#name;
//   }
//   xx() {
//     throw new Error("xxxx");
//   }
// }
// const dog = new Animal("Dog");
// console.log("🚀 ~ dog:", dog.name, dog.getName());
// console.log("🚀 ~ ani:", dog.constructor.name);
// console.log("ani::>>", Animal.prototype);
// console.log("dog.move::>>", dog.__proto__.move());
// const cat = new Animal();
// console.log("🚀 ~ cat:", cat.name);

// console.log("ok=", Object.keys(obj));
// console.log("ak=", Object.keys(dog));
// for (let k in dog) console.log("k=", k);
// // console.log("oh=", obj.hasOwnProperty("id"));
// // console.log("dh=", dog.hasOwnProperty("id"));
// console.log("dog-ani>>>", dog instanceof Animal, typeof dog);
// console.log("ani-fn>>>", Animal instanceof Function, typeof Animal);

// const cls = new (class {
//   constructor() {
//     console.log("constructor!");
//   }
//   eat() {}
// })();
// console.log(cls instanceof Object);

// Animal.prototype.f = function () {
//   console.log("Animal.f>>", this.name);
// };
// dog.f(); // Animal.f
// // dog.__proto__.f();

// console.log("------------------------------");
// console.log("P1>>>", obj.__proto__);
// console.log("P2>>>", dog.__proto__);
// console.log(Object.getPrototypeOf(dog));

// console.log("------------------------------");
// console.log(Animal === dog.constructor);
// console.log(Animal.prototype === dog.__proto__);

// console.log("obj.proto>>", obj.__proto__);
// const objX = Object.create(obj);
// console.log("🚀 ~ objX:", objX);
// console.log(Animal === dog.constructor);

// // array에 first라는 함수가 있는 것처럼 동작
// // Array.prototype.first = function () {
// //   return this[0];
// // };
// Object.defineProperties(Array.prototype, {
//   first: {
//     get: function () {
//       return this[0];
//     },
//   },
//   last: {
//     get: function () {
//       return this.slice(-1)[0];
//       // return this[this.length - 1];
//     },
//   },
// });

// const arr = [1, 2, 3];

// // console.log("first-old>>", arr.first());
// console.log("first-new>>", arr.first);
// console.log("last-new>>", arr.last);

// console.log("------------------------------");

// class Singleton {
//   static #_instance;
//   constructor() {
//     if (Singleton.#_instance) return Singleton.#_instance;
//     console.log("Singleton.constructor!!");
//     this.name = "Singleton";
//     Singleton.#_instance = this;
//   }
//   static getInstance() {
//     if (this.#_instance) return this.#_instance;
//     return new this(); // static 함수에서는 class 자기 자신
//     // this.#_instance || new this()
//   }
//   // 부모 toString() 메서드 overriding
//   toString() {
//     return `[Singleton: ${this.name}]`;
//   }
// }

// const s1 = new Singleton();
// const s2 = new Singleton();
// const s3 = Singleton.getInstance();
// console.log("🚀 ~ s3:", s3);
// console.log("toString>>", s3.toString());

// console.log("------------------------------");
// class Emp {
//   #name;
//   // constructor(name) {
//   //   this.nm = name;
//   // }
//   // 프로퍼티인 것 처럼 사용
//   set name(name) {
//     this.#name = name;
//   }
//   get name() {
//     return this.#name;
//   }
//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(" ");
//   }

//   get fullName() {
//     // accessor
//     return `${this.firstName} ${this.lastName}`;
//   }
//   toString() {
//     return `first: ${this.firstName}, last: ${this.lastName}`;
//   }
// }
// const hong = new Emp();

// // console.log("🚀 ~ hong11:", hong.toString());
// // hong.fullName = "Uncle Bob";
// // console.log("🚀 ~ hong22:", hong.toString());
// // console.log("🚀 ~ hong22:", hong.fullName);

// // hong.fullName = "Kildong Hong";
// // console.log(hong.fullName); // ?
// // console.log(Object.getOwnPropertyDescriptor(Emp.prototype, "fullName"));
// // console.log("------------------------------");
// // class Pet {
// //   feed(nutrient) {
// //     console.log(`feed to ${this.name} :`, nutrient);
// //   }
// // }

// function mixin(mainClass) {
//   Object.assign(mainClass.prototype, { feed: Pet.prototype.feed });
//   return mainClass;
// }
// class Dog extends Animal {
//   constructor(name) {
//     // cf. super(...args)
//     super(name); // 필수(chaining), 중복(overload) 안됨!
//   }
//   [Symbol.iterator]() {
//     // return this.name.split(", ").values();
//     const names = this.name.split("");
//     let idx = 0;
//     return {
//       next() {
//         return { value: names[idx++], done: idx > names.length };
//       },
//     };
//   }
//   bark() {
//     console.log("bowwow!");
//   }
// }

// // const mixin = {
// //   feed(nutrient) {
// //     console.log(`feed to ${th}`);
// //   },
// // };
// // const jake = new Dog("jake");
// // jake.feed("Banana");

// const it = jake[Symbol.iterator]();
// console.log(it.next());

function* gener() {
  const x = yield 1;
  const y = yield x + 10; // 할당되는 것이 아닌 값을 주는 것?
  console.log("x y =", x, y);
  return x + y;
}
const it3 = gener();
console.log(it3.next()); // { value: 1, done: false }
console.log(it3.next(3)); // { value: 13, done: false }

console.log(it3.next(5));

const arr = [1, 2, 3];

// 방법1) 역방향
let node2;
for (let i = arr.length - 1; i >= 0; i -= 1) {
  node2 = { value: arr[i], rest: node2 };
}
console.log("node2:", node2);
// 방법2) 순방향
let list;
let preNode;
for (let i = 0; i < arr.length; i++) {
  const node = { value: arr[i], rest: undefined };
  if (!list) {
    list = node;
  } else {
    preNode.rest = node;
  }
  preNode = node;
}
console.log("list:", list);
