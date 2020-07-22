class Node {
  data;
  next;
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head;

  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    this.removeAt(this.size() - 1);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }

  insertAt(index, data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index == 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }

  forEach(fn) {
    if (!this.head) {
      return;
    }
    let node = this.head;
    let counter = 0;

    while (node) {
      fn(node, counter);
      counter++;
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  size() {
    let node = this.head;
    let size = 0;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  clear() {
    this.head = null;
  }
}

const linkedList = new LinkedList();
linkedList.insertFirst(123);
linkedList.insertLast(456);
linkedList.insertLast(789);

// console.log(linkedList.size());
// console.log(linkedList.getFirst());
// console.log(linkedList.getLast());
// console.log(linkedList.getAt(3));
console.log('================= forEach =========================');
linkedList.forEach(console.log);
console.log('================= For Of=========================');
for (let item of linkedList) {
  console.log(item);
}
// linkedList.removeFirst();
// linkedList.clear();
// console.log(linkedList.size());
// linkedList.removeLast();
// console.log(linkedList.getLast());

module.exports = { Node, LinkedList };
