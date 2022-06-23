// 1.Hoisting

console.log('bar:', bar);
bar = 15;
var foo = 1;
console.log("foo:", foo, "bar:", bar);
var bar;

// The output is simple. The first console-log should print undefined and the second console-log should print "foo:1  bar:15". 
// Here, I do observe how the candidate approaches the problem. Someone who has a profound knowledge of how hoisting works can explain this precisely.
// Let's have a look at another example.
