class Queue {
  #data;
  constructor() {
    this.#data = [];
  }

  add(record) {
    this.#data.unshift(record);
  }
  remove() {
    return this.#data.pop() || 'queue is empty';
  }
  peek() {
    if (!this.#data.length) {
      return;
    }
    return this.#data[this.#data.length - 1];
  }
}

const queue = new Queue();
queue.add(1);
queue.add(3);
console.log(queue.remove());
console.log(queue.remove());
console.log(queue.remove());

module.exports = Queue;
