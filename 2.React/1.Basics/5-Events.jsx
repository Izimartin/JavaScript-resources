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
// event key
onKeyPress = {
    (event) =>
      event.key === ‘Enter’ && handleSearch()   //check the equality
  }