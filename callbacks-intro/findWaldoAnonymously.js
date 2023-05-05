const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  }
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(i) {
  console.log("Found Waldo at " + i + "!")
});


/*

const names = ['Alice', 'Bob', 'Waldo', 'Winston'];
const copyItems = [];

names.forEach((names) => {
  copyItems.push(names);
});




findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});


*/