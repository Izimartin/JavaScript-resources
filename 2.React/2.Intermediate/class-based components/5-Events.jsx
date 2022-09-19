class Display extends React.Component({
    show(evt) {
        alert(evt.target.value);
    },
    render() {
        return (
            <div onClick={this.show}>Clcik Me!</div>
        );
    }
<<<<<<< HEAD:2.React/1.Basics/5-Events.jsx
});
// event key
onKeyPress = {
    (event) =>
      event.key === ‘Enter’ && handleSearch()   //check the equality
  }
=======
});
>>>>>>> 9ce79e105a42c404b18545f4a27e244f59704a67:2.React/2.Intermediate/class-based components/5-Events.jsx
