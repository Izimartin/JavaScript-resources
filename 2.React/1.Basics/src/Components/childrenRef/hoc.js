import React from 'react';

import Dashboard from './dashboard';

class App extends React.Component {
    sampleRef = React.createRef();

    handleClick = () => {
        const data = this.sampleRef.current.getData();
        console.log(data);
    }

    render() {
        return (
            <div>
                <h1>HOC</h1>
                <Dashboard ref={this.sampleRef} />
                <br />

                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}

export default App;
