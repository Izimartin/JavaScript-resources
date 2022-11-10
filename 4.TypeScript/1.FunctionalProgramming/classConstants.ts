class MyClass {
    readonly myReadonlyProperty = 1;
    public publicProperty = 1;

    myMethod() {
        console.log(this.myReadonlyProperty);
    }
}

new MyClass().publicProperty = 5;
new MyClass().myReadonlyProperty = 5; // error, readonly
