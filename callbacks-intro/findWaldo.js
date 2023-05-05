const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  }
}

const actionWhenFound = function(i) {
  console.log("Found Waldo at " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// # 1 - Callback Arguments: 
// Modify the callback function so that it accepts a single argument index and logs it. 
// Modify the actionWhenFound function to let it receive and use the index
// Modify the findWaldo function so that it passes the index array to the callback
// Output: The problem should output something like "Found Waldo at index 2!".

// Another example:
//const actionWhenFoundWaldo = function(i) {
//  console.log("Found Waldo at the position " + i + "!");
//}
//findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFoundWaldo);

// #2 - Array forEach:
// Refactor the function findWaldo to use the forEach() method instead of a for loop.

const names = ['Alice', 'Bob', 'Waldo', 'Winston'];
const copyItems = [];

names.forEach((names) => {
  copyItems.push(names);
});