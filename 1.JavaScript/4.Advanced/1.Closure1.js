function create() {
    var counter = 0;
    return {
        increment: function () {
            counter++;
        },

        print: function () {
            console.log(counter);
        }
        
    }
}

//Get accessto local variables from the closure
var c = create();
c.increment();
c.print();  


