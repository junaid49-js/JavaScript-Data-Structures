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

// Returns object:
typeof fruits;

// Returns true:
fruits instanceof Map;
