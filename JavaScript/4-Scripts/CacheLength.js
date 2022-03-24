init();

function init(){
    cacheCycle();
}

function cacheCycle(){
    var array = [2,4,6,8,9,23,13,56,11,67,16,52];

    for(var i = 0, n = array.length; i< array.length; i++){
        console.log(array[i]);
    }
}