class formComponent extends React.Component {

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleSubmit} />
                </label>
                <input type="submit" value="Submit" />
            </form>

        );
    }
}
