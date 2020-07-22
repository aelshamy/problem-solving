class Stack {
  #data;
  constructor() {
    this.#data = [];
  }
  push(record) {
    this.#data.push(record);
  }
  pop() {
    return this.#data.pop();
  }
  peek() {
    if (!this.#data.length) {
      return;
    }
    return this.#data[this.#data.length - 1];
  }
}

module.exports = Stack;

const s = new Stack();
s.push(1);
s.push(2);
console.log(s.pop());
console.log(s.pop());
