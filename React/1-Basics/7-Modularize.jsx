//ChildComponent.jsx
export default class ChildComponent extends React.Component {
    render() {
        return (

            <div>

                <h1>This is a child component</h1>

            </div>

        );
    }
}

//ParentComponent.jsx
import ChildComponent from './childcomponent.js';
class ParentComponent extends React.Component {
    render() {
        return (

            <div>
                <App />
            </div>

        );
    }
}