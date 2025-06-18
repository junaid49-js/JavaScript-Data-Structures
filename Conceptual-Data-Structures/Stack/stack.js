class Stack {
    constructor(capacity = Infinity) {
      this.items = [];
      this.capacity = capacity;
    }
  
    push(element) {
      if (this.isFull()) {
        console.log("Overflow - Stack is full");
        return "Overflow - Stack is full";
      }
      this.items.push(element);
      console.log(`element ${element} added to stack`)
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Underflow - Stack is empty");
        return "Underflow - Stack is empty";
      }
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    isFull() {
      return this.items.length >= this.capacity;
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
