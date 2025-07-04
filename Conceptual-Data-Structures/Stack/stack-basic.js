class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
      console.log(`element ${element} added to stack`)
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items.toString());
    }
  
    clear() {
      this.items = [];
    }
  }
