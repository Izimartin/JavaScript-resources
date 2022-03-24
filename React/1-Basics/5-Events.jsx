class Display extends React.Compponets({
    show(evt) {
        alert(evt.target.value);
    },
    render() {
        return (
            <div onClick={this.show}>Clcik Me!</div>
        );
    }
});
