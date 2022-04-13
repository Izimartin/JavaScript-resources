init();

function init(){
    var user = new User("Brealy", 26);
    // var user = new User();

    console.log(user.name);
    console.log(user.age);

}

function User(name, age){
    this.name = name || "Not Defined";
    this.age = age || "Not Defined";
}