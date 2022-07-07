class foo {
    private _bar: boolean = false

    get bar(): boolean {
        return this._bar
    }
    set bar(theBar: boolean) {
        this._bar = theBar
    }
}


var myBar = myFoo.bar
// correct(get)
myFoo.bar = true
