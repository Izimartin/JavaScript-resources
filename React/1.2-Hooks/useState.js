import { useState } from 'react';
//useState() when data changes re-render the UI
function App() {
    const [count, setCount] = useState(0)
    //UI updates when state changes
    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>

    );
}
//cleaner solution than:
// class Btn estends React.Components {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
// }

// render() {
//     return (
//         <button onClick={() => this.setState({ count: this.state.count + 1 )
//         }>
//             {this.state.count}
//         </button>
//     );
//   }
// }


