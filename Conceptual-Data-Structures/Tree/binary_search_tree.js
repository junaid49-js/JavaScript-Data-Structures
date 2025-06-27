class Node{
  constructor(value){
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class binarySearchTree{
  constructor(){
    this.root = null;
  }

  isEmpty(){
    return this.root === null;
  }
}
