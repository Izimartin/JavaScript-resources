import React from 'react';

function App() {
    const frutas = [
        'pera',
        'manzana',
        'naranja',
        'fresa',
    ];

    return (
        <React.Fragment>
            <ul>
                {frutas.map(fruta => <li key={fruta}>{fruta}</li>)} //map takes props from scoped frutas arrayš with unique key
            </ul>
        </React.Fragment>
        );
    }

export default App;