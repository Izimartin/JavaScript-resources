class Foo {
    myMethod(a: string);
    myMethod(a: number);
    myMethod(a: number, b: string);
    myMethod(a: any, b?: string) {
        alert(a.toString());
    }
}