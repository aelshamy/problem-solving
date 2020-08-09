class MinHeap {
  constructor() {
    /* Initialing the array heap and adding a dummy element at index 0 */
    this.heap = [null];
  }

  getMin() {
    /* Accessing the min element at index 1 in the heap array */
    return this.heap[1];
  }
  insert(node) {
    /* Inserting the new node at the end of the heap array */
    this.heap.push(node);

    /* Finding the correct position for the new node */

    if (this.heap.length > 1) {
      let currentNodeIdx = this.heap.length - 1;
      let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);

      /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
      while (
        currentNodeIdx > 1 &&
        this.heap[currentNodeParentIdx] > this.heap[currentNodeIdx]
      ) {
        /* Swapping the two nodes by using the ES6 destructuring syntax*/
        [this.heap[currentNodeParentIdx], this.heap[currentNodeIdx]] = [
          this.heap[currentNodeIdx],
          this.heap[currentNodeParentIdx],
        ];
        currentNodeIdx = currentNodeParentIdx;
      }
    }
  }
}

const input = [-124, 500, 7, -40, 21, 100, 0];

const heap = new MinHeap();

for (item of input) {
  heap.insert(item);
}

console.log(heap.heap);
