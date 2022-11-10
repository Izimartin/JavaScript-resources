var header = document.querySelector("h1")

function getRandomColor() {

    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var num = 0; num < 6; num++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

function changeHeaderColor() {
    colorInput = getRandomColor()
    header.style.color = colorInput;
}

SetInterval("changeHeaderColor()", 500);