import React from "react";

export const Map = () => {
    const frutas = [
        'pera',
        'manzana',
        'naranja',
        'fresa',
    ];

    return (
        <>
            <ul>
                {frutas.map(fruta => <li key={fruta}>{fruta}</li>)} 
                {/* //map takes props from scoped frutas arrayš with unique key */}
            </ul>
        </>
        );
    }