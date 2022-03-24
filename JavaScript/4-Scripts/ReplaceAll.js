init();

function init() {
    replaceAll();
}

function replaceAll(){
    var text = "I am a developer";
    console.log(text.replace(/developer/g, "programmer"));
}