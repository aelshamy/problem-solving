const Stack = require('../stack/stack');

class QueueWithStack {
  #addStack;
  #removeStack;
  constructor() {
    this.#addStack = new Stack();
    this.#removeStack = new Stack();
  }

  add(record) {
    this.#addStack.push(record);
  }
  remove() {
    while (this.#addStack.peek()) {
      this.#removeStack.push(this.#addStack.pop());
    }
    const result = this.#removeStack.pop() || 'Queue is empty';
    while (this.#removeStack.peek()) {
      this.#addStack.push(this.#removeStack.pop());
    }

    return result;
  }
  peek() {
    while (this.#addStack.peek()) {
      this.#removeStack.push(this.#addStack.pop());
    }

    const record = this.#removeStack.peek();
    while (this.#removeStack.peek()) {
      this.#addStack.push(this.#removeStack.pop());
    }
    return record;
  }
}

const queue = new QueueWithStack();
queue.add(1);
queue.add(3);
console.log(queue.remove());
console.log(queue.peek());
console.log(queue.remove());
console.log(queue.remove());

module.exports = QueueWithStack;
