import React from "react";
import Components from "./component";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // titulo: "Hola prop",
            // color: "#ff0000"
        };
     }

    render() {
        return (
          <React.Fragment>
            <Components />
            <Components color="blue" titulo="Hola blue" />
            <Components color="green" titulo="Hola green" />
          </React.Fragment>
        );
    }
}

export default App;