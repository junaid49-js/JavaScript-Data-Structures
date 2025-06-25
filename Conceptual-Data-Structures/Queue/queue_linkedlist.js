class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Peek at the first element
  peek() {
    return this.first?.value;
  }

  // Enqueue (add to the end)
  enqueue(value) {
    const newNode = new Node(value);
    
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    
    this.length++;
    return this;
  }

  // Dequeue (remove from the front)
  dequeue() {
    if (!this.first) return null;
    
    const removedNode = this.first;
    
    if (this.first === this.last) {
      this.last = null;
    }
    
    this.first = this.first.next;
    this.length--;
    return removedNode.value;
  }

  // Check if queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Print the queue as an array (for visualization)
  printQueue() {
    const array = [];
    let currentNode = this.first;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}
 
