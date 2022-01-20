// This is printing the name of the exercise before it is run
console.log("Exercise 2.1 - Looping a triangle");
// Create a tri(angle) variable to concatenate in the loop
var tri = "o";
// Iterate 9 times
for (var i = 0; i < 9; i++) {
  // Print the triangle variable
  console.log(tri);
  // Concatenate an o to the end of tri (i.e. build the triangle)
  tri += "o";
}

// This is printing the name of the exercise before it is run
console.log("\nExercise 2.2 – FizzBuzz");
// Iterate from 1 to 100
for (var i = 1; i < 101; i++) {
  // Check is i is divisible by 3 & 7
  if (i % 3 == 0 && i % 7 == 0) {
    // Print this case
    console.log("Divisible by both 3 and 7");
    // Check is i is divisible by 3
  } else if (i % 3 == 0) {
    // Print this case
    console.log("Divisible by 3");
    // Check is i is divisible by 7
  } else if (i % 7 == 0) {
    // Print this case
    console.log("Divisible by 7");
    // If i is not divisible by 7, 3, or 3 & 7 then this will run
  } else {
    // Print the number if no cases were a match
    console.log(i);
  }
}

// Create a function, grid, to take an input of size and print the grid
const grid = (size) => {
  // Create a tmp string to concatenate later
  var tmp = "";
  // iterate size number of times - this loop is for the rows
  for (var i = 0; i < size; i++) {
    // Checks if i is divisible by 2 - basically an easy way to alternate every other run
    if (i % 2 == 0) {
      // Iterate size number of times - this loop is for the columns
      for (var j = 0; j < size; j++) {
        // Checks if i is divisible by 2 - basically an easy way to alternate every other run
        if (j % 2 == 0) {
          // Concatenate tmp with a space since this is the first row to run
          tmp += " ";
        } else {
          // Concatenate tmp with a * to build the grid
          tmp += "*";
        }
      }
    } else {
      // Iterate size number of times - this loop is for the columns
      for (var j = 0; j < size; j++) {
        // Checks if i is divisible by 2 - basically an easy way to alternate every other run
        if (j % 2 == 0) {
          // Concatenate tmp with a * to build the grid
          tmp += "*";
        } else {
          // Concatenate tmp with a space to build the grid
          tmp += " ";
        }
      }
    }
    // Concatenate a newline to the end of the row, therefore making a new row
    tmp += "\n";
  }
  // Lastly, print out the entire string
  console.log(tmp);
};

// This is printing the name of the exercise before it is run
console.log("\nExercise 2.3 - n-by-n Grid");

// Variable to hold the size of the grid
var size = 6;

// Print the size of the grid
console.log("size=" + size);

// Call the grid function with size as parameter
grid(size);

// Update the size of the grid
size = 12;

// Print the size of the grid
console.log("size=" + size);

// Call the grid function with size as parameter
grid(size);
