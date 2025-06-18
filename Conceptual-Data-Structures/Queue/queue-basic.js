class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
      console.log(`element ${element} added to queue`)
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Underflow - Queue is empty");
        return "Underflow - Queue is empty";
      }
      return this.items.shift();
    }
    
    isEmpty() {
      return this.items.length === 0;
    }
  
    peek() {
      if (this.isEmpty()){
        return "Queue is empty"
      }  
      return this.items[0];
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
