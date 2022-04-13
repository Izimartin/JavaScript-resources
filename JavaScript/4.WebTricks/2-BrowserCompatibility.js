init();

function init() {
    operation();
}

function operation() {
    if ('querySelector' in document) {
        document.querySelector("#container");
    }
    else {
        document.querySelector("container");
    }
}