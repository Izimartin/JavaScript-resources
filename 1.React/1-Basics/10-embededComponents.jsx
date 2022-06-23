class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>

        <Header />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return;

    <h1>Header Component</h1>;
  }
}
ReactDOM.render(<MyComponent />, document.getElementById("content"));
