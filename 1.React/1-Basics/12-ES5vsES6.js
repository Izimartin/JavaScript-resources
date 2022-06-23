// require vs import
// ES5
var React = require('react');
// ES6
import React from 'react';

// export vs exports
// ES5
module.exports = Component;
// ES6
export default Component;

// component and function
// ES5

var MyComponent = React.createClass({
    render: function () {
        return

        <h3>Hello Edureka!</h3>
            ;
    }
});
// ES6
class MyComponent extends React.Component {
    render() {
        return

        <h3>Hello Edureka!</h3>
            ;
    }
}

// props
// ES5
var App = React.createClass({
    propTypes: { name: React.PropTypes.string },
    render: function () {
        return

        <h3>Hello, {this.props.name}!</h3>
            ;
    }
});

// ES6
class App extends React.Component {
    render() {
        return

        <h3>Hello, {this.props.name}!</h3>
            ;
    }
}

// state
// ES5
var App = React.createClass({
    getInitialState: function () {
        return { name: 'world' };
    },
    render: function () {
        return

        <h3>Hello, {this.state.name}!</h3>
            ;
    }
});
// ES6
class App extends React.Component {
    constructor() {
        super();
        this.state = { name: 'world' };
    }
    render() {
        return

        <h3>Hello, {this.state.name}!</h3>
            ;
    }
}