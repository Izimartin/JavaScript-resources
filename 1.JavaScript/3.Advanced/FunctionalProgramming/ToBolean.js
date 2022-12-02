init();

function init(){
    var cuenta = new Cuenta(0);
    console.log(cuenta.dinero);
    console.log(cuenta.tieneDinero);
}

function Cuenta(dinero){
    this.dinero = dinero;
    //To bolean
    this.tieneDinero = !!dinero;
}
