class Display extends React.Component {
    show(evt) {
        alert(evt.target.value);
    }
    render() {
        return (
            <div onClick={this.show}>Clcik Me!</div>
        );
    }
}
