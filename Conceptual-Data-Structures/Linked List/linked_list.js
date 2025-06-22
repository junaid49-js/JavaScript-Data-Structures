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
  
  // Define a method to check is the list is empty
  isEmpty(){
    return this.size === 0;
  }

  // Define a method to get size of the list
  getSize(){
    return this.size;
  }

  // Define method for prepending an element to the list
  prepend(value){
    let node = new Node(value);
    if( this.size === 0){
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Define method for appending an element to the list
  append(value){
    let node = new Node(value);
    if( this.size === 0){
      this.head = node;
    } else {
      let prev = this.head;
      while(prev.next){
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  // Define method to insert an element to given index
  insert(value, index){
    if(index < 0 || index > this.size){
      return
    }
    if(index === 0){
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for(let i = 0; i < index - 1; i++ ){
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  // Define a method to remove an element from a given index
  removeFrom(index){
    if(index < 0 || index >= this.size){
      return null;
    }
    let removedNode;
    if(index === 0){
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++){
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  // Define a method to remove an element by value
  // If the element is present multiple times, it removes only the first 
  remove(value){
    if(this.isEmpty()){
      return null;
    }
    if(this.head.value === value){
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while(prev.next && prev.next.value !== value){
        prev = prev.next;
      }
      if(prev.next){
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value
      }
      return null;
    }
  }

  // Define a method to search an element from the list
  search(value){
    if(this.isEmpty()){
      return -1
    }
    let i = 0;
    let curr = this.head;
    while(curr){
      if(curr.value === value){
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  // Define a method to print the list
  print(){
    if(this.isEmpty()) {
      console.log('List is Empty')
    } else {
      let curr = this.head;
      let listItems = '';
      while(curr){
        listItems = listItems + `${curr.value} `
        curr = curr.next;
      }
      console.log(listItems);
    }
  }
}
