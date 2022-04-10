import React from 'react';
import Widget from '../widget';
import style from './style.module.css';

class Page extends React.Component {
    state = {
        fail: true,
    }

    toggle = () => {
        this.setState({ fail: !this.state.fail });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <button onClick={this.toggle}>Toggle</button>
                    <h1>{this.state.fail ? 'Bad' : 'Good'}</h1>
                </div>
                <div className={style.container}>
                    <Widget />
                    <Widget fail={this.state.fail} />
                    <Widget />
                </div>
            </React.Fragment>
        );
    }
}

export default (Page);
