// Arrow:

const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const passing = grades.filter((num) => {
  return (num >= 70); 
})
  console.log('passing grades: ', passing);



// Write code to filter only passing grades (70 or above).

// Use the Array filter function to print out only the passing grades.

// Start by declaring the callback function.

// Then refactor it to be inline and anonymous, or start with an anonymous function to begin with.

// Convert the anonymous function into an arrow function in order to get some practice with them.

// Basic form 
/*
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const passing = grades.filter(function(num) {
  return num >= 70; 
});

console.log(passing);
*/

