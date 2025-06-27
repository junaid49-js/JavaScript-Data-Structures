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

  insert(value){
    let newNode = new Node(value);
    if(isEmpty()){
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    
  }

  insertNode(root, newNode){
    if(newNode.value < root.value){
      if(root.leftChild === null){
        root.leftChild = newNode;
      } else {
        this.insertNode(root.leftChild, newNode)
      }
    } else {
      if(root.rightChild === null){
        root.rightChild = newNode;
      } else {
        this.insertNode(root.rightChild, newNode)
      }
    }
  }
}
