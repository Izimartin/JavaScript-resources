//General way
render() {
    return (
        <MyInput onChange={this.handleChange.bind(this)} />
    );
}
//With Arrow Function
render() {
    return (
        <MyInput onChange={(e) => this.handleOnChange(e)} />
    );
}