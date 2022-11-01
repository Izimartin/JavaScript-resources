import React, { Fragment, } from "react";
import { useLocalStorage } from "./useLocalStorae";

export function App() {
    const [text, setText] = useLocalStorage('text', '')

    return (
        <Fragment>
            <textarea
                onChange={e => setText(e.target.value)}
                value={text}
                placeholder="Que piensas?"
            ></textarea>
            <button>Enviar</button>
        </Fragment>
    );
}