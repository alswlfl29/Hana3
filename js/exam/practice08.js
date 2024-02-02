// class와 Array를 이용하여 Stack과 Queue를 구현하시오.
/*
이전 장표에서 작성한 Stack과 Queue에 공통 기능을 확장하시오.(Collection)
공통: clear(), toArray(), print(), remove(), isEmtpy, peek, poll, length
peek: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 (요소 삭제 없음!)
poll: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 & 삭제 ⇐⇒ Stack.pop, Queue.dequeue
remove: 가장 (Stack:나중, Queue:먼저) 들어간 요소 삭제(skip)
*/
class Collection {
  #items;
  constructor(item) {
    this.#items = item || [];
    this.headIndex = 0;
    this.tailIndex = item ? item.length : 0;
  }
  get _items() {}
  clear() {}
  toArray() {}
  print() {}
  remove() {}
  isEmtpy() {}
  peek() {
    return this.#items[this.tailIndex - 1];
  }
  poll() {}
  length() {
    return this.tailIndex - this.headIndex;
  }
}
// ex1) Stack
class Stack extends Collection {
  constructor(item) {
    super();
  }
  push(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
    console.log(this.items);
  }
  pop() {
    const item = this.items[this.tailIndex - 1];
    delete this.items[this.tailIndex - 1];
    this.tailIndex--;
    return item;
  }
}
const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
console.log("peek:", stack.peek());
console.log("length:", stack.length());

// ex2) Queue
class Queue extends Collection {
  constructor(item) {
    super();
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
    console.log(this.items);
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
}
const queue = new Queue([1, 2]);
queue.enqueue(3); // 추가하기
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
