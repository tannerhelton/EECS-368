// Creates the Group class
class Group {
  // The constructor is what's called when a Group is made
  constructor() {
    // Initialize an empty array called dataArr, the this specifies that it is on this class
    this.dataArr = [];
  }

  // Add method - adds an input argument to the Group if it doesn't already exist
  add(input) {
    // Checks to see if this group contains the argument
    if (!this.has(input)) {
      // if this group doesn't contain the argument, then it adds it to the array
      this.dataArr.push(input);
    }
  }

  // Delete method - removes an input argument from the Group if it exists
  delete(input) {
    // Runs a loop through all elements of dataArr, then calls a callback with inputs - data and i (index)
    this.dataArr.forEach((data, i) => {
      // if the data matches the input, run some code
      if (data == input) {
        // this runs if the element exists, and it splices the array at that index (removes the element)
        this.dataArr.splice(i, 1);
      }
    });
  }

  // Has method - returns true if the input is in the group and false otherwise
  has(input) {
    // Runs a loop through all elements of dataArr
    // NOTE: Didn't use a forEach loop because return doesn't break the function call when inside a forEach loop
    for (var i = 0; i < this.dataArr.length; i++) {
      // Checks to see if the element exists in this group
      if (this.dataArr[i] == input) {
        // Returns true if the element is found
        return true;
      }
    }
    // Returns false after all elements have been checked - i.e. it is not in this group
    return false;
  }

  // Union method - returns the union of the two groups
  union(b) {
    // Create a tmp (temporary) group to work on
    var tmp = new Group();
    // Run through and add all elements of this group to the tmp group
    this.dataArr.forEach((data) => {
      // Add the data to the group -- checks for duplicated in the add method
      tmp.add(data);
    });
    // Run through and add all elements of b group to the tmp group
    b.dataArr.forEach((data) => {
      // Add the data to the group -- checks for duplicated in the add method
      tmp.add(data);
    });
    // Returns tmp, the group created from the union of this group and b group
    return tmp;
  }

  // intersection method - returns the intersection of the two groups
  intersection(b) {
    // Create a tmp (temporary) group to work on
    var tmp = new Group();
    // Run through and add all elements of this group to the tmp group that also exist in b
    this.dataArr.forEach((data) => {
      // Check if this element is in b
      if (b.has(data)) {
        // If it is in b, then add it to the tmp
        tmp.add(data);
      }
    });
    // Returns tmp, the group created from the intersection of this group and b group
    return tmp;
  }

  // difference method - returns the difference of the two groups
  difference(b) {
    // Create a tmp (temporary) group to work on
    var tmp = new Group();
    // Run through and add all elements of this group to the tmp group that don't exist in b
    this.dataArr.forEach((data) => {
      // Check if this element is in b
      if (!b.has(data)) {
        // If it isn't in b, then add it to the tmp
        tmp.add(data);
      }
    });
    // Returns tmp, the group created from the difference of this group and b group
    return tmp;
  }
}

/* Below is all of the test code given in the assignment handout */

let group1 = new Group();
let group2 = new Group();
group1.add(1);
group1.add(2);
group1.add(3);
console.log(group1); // Result should be [1, 2, 3]
group2.add(2);
group2.add(3);
group2.add(5);
group2.add(2);
console.log(group2); // Result should be [2, 3, 5]
console.log(group1.has(5)); // False
console.log(group2.has(3)); // True
console.log(group1.union(group2)); // [1, 2, 3, 5]
console.log(group1.intersection(group2)); // [2, 3]
console.log(group1.difference(group2)); // [1]
group1.delete(1);
console.log(group1); // [2, 3]
group2.delete(1);
console.log(group2); // [2, 3, 5]
