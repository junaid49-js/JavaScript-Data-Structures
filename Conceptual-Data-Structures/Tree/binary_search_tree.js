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

  search(root, value){
    if(!root){
      return -1
    } else {
      if(root.value === value){
        return true
      } else if(value < root.value){
          return this.search(root.leftChild, value);
        } else {
            return this.search(root.rightChild, value);
        }
    }
  }

  // Depth First Search
  //DFS Pre Order Traversal
  preOrder(root){
    if(root){
      console.log(root.value);
      this.preOrder(root.leftChild);
      this.preOrder(root.rightChild);
    }
  }

  //DFS In Order Traversal
  inOrder(root){
    if(root){
      this.inOrder(root.leftChild);
      console.log(root.value);
      this.inOrder(root.rightChild);
    }
  }

  //DFS Post Order Traversal
  postOrder(root){
    if(root){
      this.postOrder(root.leftChild);
      this.postOrder(root.rightChild);
      console.log(root.value);
    }
  }
}
