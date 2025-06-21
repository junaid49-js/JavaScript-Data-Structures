// A Linked List is a linear data structure that includes a series of connected nodes.
// Each node consists of a data value and a pointer that points to the next node.
// The List elements can be easily inserted or removed without reallocation or reorganization of the entire structure.
// Random access of elements is not feasible, and accessing an element has linear time complexity.

// The Linked List Data Structure supports three main operations.
// -> Insertion - To add an element at the beginning, end, or at a given index in the List.
// -> Deletion - To remove an element given its index or value.
// -> Search - To find an element given its value.

// We will create a node class and assign a value to it and point it to null.

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// Now we will define a class for the linked list itself

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }
  
  // define a method to check is the list is empty
  isEmpty(){
    return this.size === 0;
  }

  // define a method to get size of the list
  getSize(){
    return this.size;
  }
}
