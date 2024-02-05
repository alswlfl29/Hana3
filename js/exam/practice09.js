// 두 개의 수를 입력 받아 더하기를 수행하는 제너레이터를 작성하시오.
function* add() {
  const a = yield "첫 번째 수?";
  const b = yield "두 번째 수?";
  return a + b;
}
const itAdd = add();
console.log(itAdd.next().value);
console.log(itAdd.next(1).value);
console.log("result =", itAdd.next(2).value);
return;

class Collection {
  #arr; // 멤버 변수
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args;
  }
  get _arr() {
    return this.#arr;
  }

  push(value) {
    this.#arr.push(value);
    return this;
  }
  claer() {}
  toArray() {
    return [...this.#arr];
  }
  // remove: 가장 (Stack:나중, Queue:먼저) 들어간 요소 삭제(skip)
  remove() {}
  // peek: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 (요소 삭제 없음!)
  peek() {
    return this.#arr.at(this.isStack ? -1 : 0);
  }
  isStack() {
    return this.constructor_name === "Stack";
  }
  // poll: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 & 삭제
  poll() {}
  get isEmpty() {}

  get size() {
    return this.#arr?.length;
  }
  toString() {
    return `${this.constructor.name}(${this.size}) ${JSON.stringify(
      this.#arr
    )}`;
  }
  print() {
    console.log(this.toString());
  }
}
class Stack extends Collection {
  // Collection에 넣어도됨
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr.at(-1);
  }
  *[Symbol.iterator]() {
    for (let i = 0; i < this.size; i += 1) {
      yield this._arr[i];
    }
  }
  iterator() {
    return this[Symbol.iterator]();
  }
}

class Queue extends Collection {
  enqueue(value) {
    this.push(value);
    return this;
  }
  dequeue() {
    return this._arr.shift();
  }
  peek() {
    return this._arr.at(0);
  }
}

const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
stack.push(3).push(5); // 추가하기
console.log("last pop =", stack.pop());
stack.print();
console.log("XXXX>>>>", [...stack]); // Bad
const itStack = stack[Symbol.iterator](); // 또는 const itStack = stack.iterator();
console.log("it1>>", itStack.next());
console.log("it2>>", itStack.next());

const queue = new Queue();
queue.enqueue(3).enqueue(5); // 추가하기
console.log("last queue =", queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
queue.print();
