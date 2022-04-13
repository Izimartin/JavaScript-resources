// The Array object has many properties and methods which help developers to handle arrays easily and efficiently. 
// You can get the value of a property by specifying arrayname.property and the output of a method by specifying arrayname.method().
// length property –> If you want to know the number of elements in an array, you can use the length property.
// prototype property –> If you want to add new properties and methods, you can use the prototype property.
// reverse method –> You can reverse the order of items in an array using a reverse method.
// sort method –> You can sort the items in an array using sort method.
// pop method –> You can remove the last item of an array using a pop method.
// shift method –> You can remove the first item of an array using shift method.
// push method –> You can add a value as the last item of the array.

var students = new Array("John", "Ann", "Aaron", "Edwin", "Elizabeth");
Array.prototype.displayItems = function () {
    for (i = 0; i < this.length; i++) {
        document.write(this[i] + "<br />");
    }
}
document.write("students array<br />");
students.displayItems();
document.write("<br />The number of items in students array is " + students.length + "<br />");
document.write("<br />The SORTED students array<br />");
students.sort();
students.displayItems();
document.write("<br />The REVERSED students array<br />");
students.reverse();
students.displayItems();
document.write("<br />THE students array after REMOVING the LAST item<br />");
students.pop();
students.displayItems();
document.write("<br />THE students array after PUSH<br />");
students.push("New Stuff");
students.displayItems();

concat() // Concatenates two or more arrays in one.
join() // Combines or Joins all elements of an array into a single string and returns it.
indexOf() // Returns the first index position at which a given element appears in the array, or -1 if it is not present.
lastIndexOf() // Returns the last index position at which a given element appears in the array, or -1 if it is not present.
pop() // Removes the last element from an array and returns that element.
push() // Adds one or more elements to the end of an array and returns the new length of the array.
reverse() // Reverses the order of the elements in an array.
shift() // Removes the first element from an array and returns that element.
unshift() // Adds one or more elements to the beginning of an array and returns the new length of the array.
slice() // Extracts or pulls a part or portion of an array and returns it as a new array.
sort() // Sorts the elements of an array in place and returns the array. Alphabetically
splice() // Adds and/or removes elements from an array in a specified way and position.
toString() // Converts an array to a string and returns it.
valueOf() // Returns the primitive value of an array or specified object. 