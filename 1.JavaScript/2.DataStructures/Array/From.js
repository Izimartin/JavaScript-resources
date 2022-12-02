init();

function init() {
    nodeListArray();
}

function nodeListArray() {
    // var elements = document.querySelectorAll("div");
    const elements = 'foo';
    //Create an array from the node list with .from()
    console.log(Array.from(elements));
}
