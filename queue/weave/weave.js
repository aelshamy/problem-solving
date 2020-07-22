const Queue = require('../queue');
function weave(firstQueue, secondQueue) {
  const finalQueue = new Queue();
  while (firstQueue.peek() || secondQueue.peek()) {
    if (firstQueue.peek()) {
      finalQueue.add(firstQueue.remove());
    }
    if (secondQueue.peek()) {
      finalQueue.add(secondQueue.remove());
    }
  }
  return finalQueue;
}

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');
const q = weave(queueOne, queueTwo);
console.log(q.remove());
console.log(q.remove()); // 'Hi'
console.log(q.remove()); // 2
console.log(q.remove()); // 'There'
