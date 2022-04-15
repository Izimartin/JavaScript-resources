init();

function init(){
    shortCondicional();
}

function shortCondicional(){
    var conected = operation();

    // if(conected){
    //     login();
    // }
    conected && login();
}

function operation(){
    return true;
}

function login(){
    console.log("Login!");
}