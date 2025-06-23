// Maps are like objects. Maps are ordered where as objects are unordered.
// Keys in Objects can only be string or symbol type whereas they can be of any type in Maps.
// An Object has a prototype and may contain a few default keys which may collide with your own keys if you're not careful. A map on the other hand does not contain any keys by default.
// Objects are not iterables where as Maps are iterables.
// The numbers of items in an object must be determined manually where as it is readily available with the size property in a Map.
// Apart from storing data, you can attach functionality to an object where as Maps are restricted to just storing data.

const map = new Map([['a', 1],['b', 2]]);

for ( const [key, value] of map){
  console.log(`${key}: ${value}`)
}
