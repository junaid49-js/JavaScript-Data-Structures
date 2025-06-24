class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  isEmpty(){
    return this.size === 0
  }

  getSize(){
    return this.size;
  }

  push(value){
    const node = new Node(value);
    if (this.isEmpty()){
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  pop(){
    let removedNode;
    if (this.isEmpty()){
      return null;
    } else {
      removedNode = this.head.value;
      this.head = this.head.next;
      this.size--;
      return removedNode
    }

  }

  peek(){
    if (this.isEmpty()){
      return null;
    } else {
      return this.head.value;
    }
  }
}
