// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.

// Create a Set
const letters = new Set(["a","b","c"]);

// Or
// Create a Set
const letters2 = new Set();

// Add Values to the Set
letters2.add("a");
letters2.add("b");
letters2.add("c");

//Or
// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

// Add element to Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

typeof letters;      // Returns object

letters instanceof Set;  // Returns true
