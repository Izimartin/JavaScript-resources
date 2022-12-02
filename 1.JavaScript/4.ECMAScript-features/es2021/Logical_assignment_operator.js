// There are some new operators:

// And & Equals (&&=)
// OR & Equals (||=)
// Nullish Coalescing & Equals (??=)

// 1. And & Equals (&&=):
// Before
let a = 1;
if(a){
  a = 8;
}
// Output: a = 8

// After
let a = 1;
a &&= 3
// Output: a = 3

// 2. OR & Equals (||=)
// Before
// If conditional
let a = undefined;
if(!a){
  a = 5;
}
// Output: a = 5

// OR
a = a || 3;

// Output: a = 3
// After
let a = 0;
a ||= 3
// Output: a = 3

// 3. Nullish Coalescing & Equals (??=)
let a = undefined; 
a ??= 7

// Output: a = 7
