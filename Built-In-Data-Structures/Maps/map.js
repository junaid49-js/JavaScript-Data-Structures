// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Set Map Values
fruits.set("grapes", 300);
fruits.set("watermelons", 300);
fruits.set("tomatos", 200);

// Change Map Values ( Same as Set)
fruits.set("apples", 300);

// Get Map Values
fruits.get("apples");    // Returns 300

// Get Size of Map
fruits.size;

// Delete a Map element
fruits.delete("apples");

// Remove all the elements from the Map
fruits.clear();

// Returns true is the element is in the Map
fruits.has("apples");

// Returns object:
typeof fruits;

// Returns true:
fruits instanceof Map;
