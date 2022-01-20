console.log("Exercise 2.1 - Looping a triangle");
var tri = "o";
for (var i = 0; i < 9; i++) {
  console.log(tri);
  tri += "o";
}

console.log("\nExercise 2.2 – FizzBuzz");
for (var i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 7 == 0) {
    console.log("Divisible by both 3 and 7");
  } else if (i % 3 == 0) {
    console.log("Divisible by 3");
  } else if (i % 7 == 0) {
    console.log("Divisible by 7");
  } else {
    console.log(i);
  }
}

const grid = (size) => {
  var tmp = "";
  for (var i = 0; i < size; i++) {
    if (i % 2 == 0) {
      for (var j = 0; j < size; j++) {
        if (j % 2 == 0) {
          tmp += " ";
        } else {
          tmp += "*";
        }
      }
    } else {
      for (var j = 0; j < size; j++) {
        if (j % 2 == 0) {
          tmp += "*";
        } else {
          tmp += " ";
        }
      }
    }
    tmp += "\n";
  }
  console.log(tmp);
};

console.log("\nn-by-n Grid");
var size = 6;
console.log("size=" + size);
grid(size);
size = 12;
console.log("size=" + size);
grid(size);
