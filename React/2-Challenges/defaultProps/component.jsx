import React from "react";

function Components(props) {
    const {
        titulo,
        color,
        items,
    } = props;
 
    return (
        <div style={{ padding: '1em', backgroundColor: color }}>
            <h1>{titulo}</h1>
            <ul>
                {items.map(item => (
                    <li key={items}>{item}</li>

                ))}
            </ul>
        </div>
    );
}

Components.defaultProps = {
    color: "#ff0000",
    titulo: "Titulo por defecto",
    items: ["iPhone", "AirPods"],
};

export default Components;