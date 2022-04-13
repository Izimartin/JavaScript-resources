// Many times, variables or arrays are not sufficient to simulate real-life situations. 
// JavaScript allows you to create objects that act like real-life objects. 
// A student or a home can be an object that has many unique characteristics of its own. 
// You can create properties and methods for your objects to make programming easier. 
// If your object is a student, it will have properties like the first name, last name, id, etc., and methods like calculating rank, change address, etc. 
// If your object is a home, it will have properties like a number of rooms, paint color, location, etc. The methods like to calculate area, change owner, etc.

// How to Create an Object

// You can create an object like this:
var objName = new Object();
objName.property1 = value1;
objName.property2 = value2;
objName.method1 = function () {
    // line of code
}

// OR

var objName = {
    property1: value1, property2: value2, method1: function () {
        // lines of code
    }};