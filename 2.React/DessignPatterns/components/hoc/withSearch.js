import { useState } from "react";

export default function withSearch(Component, dataset) {
    return fucntion() {
        const [query, setQuery] = useState("");

        function handleChange(e) {
            setQuery(e.target.value);
        }

        return (
            <div>
                <input onChange={handleChange} value={query} />
                <Component dataset={dataset} query={query} />
            </div>
        );
    };
}