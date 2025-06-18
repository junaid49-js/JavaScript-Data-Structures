// As we know that JavaScript arrays are zero-indexed and it maintains the insertion order.
// We can use the indices to create or access elements in JavaScript arrays.

// 1. To access entire array, we use the variable name -

let fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log("Original fruits array:", fruits); // Output - 'Original fruits array: ["Apple", "Banana", "Cherry", "Date"]'

// Here, the console.log() prints something to the console.
// In this code, it prints a string "Original fruits array:" and then the array.

// 2. Using indexes to update elements in the array. For this we will use the code structure like the JavaScript new Array Keyword when we assign elements.

// To update an existing element, first access the array by the arrayName and use square brackets[] and add the index of the element you want to update. Then, assign the new value to the element

fruits[0] = "Mango"; // Change the first element
console.log("fruits after modification:", fruits); // Output: 'fruits after modification: ["Mango", "Banana", "Cherry", "Date"]'

// 3. Using indexes to create and add elements to the array. For this we will use the code structure like the JavaScript new Array Keyword when we assign elements.

/* To create and add a new element to the array, first access the array by the arrayName and use square brackets[] and add the index of 
where you want to create and add new element. Then, assign the new value to it, The indices where no value is placed will be an empty item */


fruits[6] = 'Pineapple' // Adds new element to index 6
console.log("fruits after adding value to index 6:", fruits) // Output: 'fruits after adding value to index 6: [ 'Mango', 'Banana', 'Cherry', 'Date', <2 empty items>, 'Pineapple' ]'

fruits[4] = 'Apple' // Adds new element to index 4
console.log("fruits after adding value to index 4:", fruits) // Output: 'fruits after adding value to index 6: [ 'Mango', 'Banana', 'Cherry', 'Date', 'Apple', <1 empty items>, 'Pineapple' ]'

fruits[5] = 'Strawberry' // Adds new element to index 5
console.log("fruits after adding value to index 5:", fruits) // Output: 'fruits after adding value to index 6: [ 'Mango', 'Banana', 'Cherry', 'Date', 'Apple', 'Strawberry', 'Pineapple' ]'
