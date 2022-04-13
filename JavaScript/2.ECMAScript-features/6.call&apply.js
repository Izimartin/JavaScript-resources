var someObject = {
myProperty : 'Foo',

myMethod : function(prefix, postfix) {

    alert(prefix + this.myProperty + postfix);
}
};
someObject.myMethod('<', '>'); // alerts '<Foo>'
var someOtherObject  = {

    myProperty : 'Bar.'

};
someObject.myMethod.call(someOtherObject, '<', '>'); // alerts '<Bar>'

someObject.myMethod.apply(someOtherObject, ['<', '>']); // alerts '<Bar>'

// The function .call() and .apply() are very similar in their usage except a little difference. .call()
// is used when the number of the function’s arguments are known to the programmer, 
// as they have to be mentioned as arguments in the call statement. On the other hand, .apply() 
// is used when the number is not known. The function .apply() expects the argument to be an array.

// The basic difference between .call() and .apply() is in the way arguments are passed to the function. 
// Their usage can be illustrated by the given example.