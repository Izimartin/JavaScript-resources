class ReferenceDemo extends React.Component {

  display() {
    const name = this.inputDemo.value;
    document.getElementById('disp').innerHTML = name;
  }

  render() {
    return (

      <div>
        Name: <input type="text" ref={input => this.inputDemo = input} />
        <button name="Click" onClick={this.display}>Click</button>

        <h2>Hello <span id="disp"></span> !!!</h2>

      </div>
    );
  }
}