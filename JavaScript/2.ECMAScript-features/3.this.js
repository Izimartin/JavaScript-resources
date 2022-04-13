// 3.What about "this"
// In the era of ES6+, the scope of "this" keyword has been simplified a lot. 
// That's why I do ask fewer questions on this.
//  One of my favorite questions on this topic is as follows.

var fullname = 'Brealy Padron';
var obj = {
    fullname: 'Fabian Padron',
    prop: {
        fullname: 'Fabian Padron Rodriguez',
        getFullname: function () {
            return this.fullname;

        }
    },
    getMyName: function () {
        return this.fullname;
    },
    getFirstName: () => {
        return this.fullname.split('')[0];
    },
    getLastName: (function() {
        return this.fullname.split('')[1];
    }) ()
};

console.log(obj.prop.getFullname());
console.log(obj.getFirstName());
console.log(obj.getMyName());
console.log(obj.getLastName);
// I've programmed this in such a way that just one question would suffice to get the clarity on the interviewee's comprehensive understanding of "this" keyword.

