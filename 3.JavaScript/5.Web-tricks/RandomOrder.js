init();

function init() {
    randomOrder();
}
// Create random order with the Math.random()
function randomOrder(){
    var array = [2,4,6,7,8,10,12];
    console.log(array.sort(function(){
        return Math.random() - 0.5;
    }));
}
