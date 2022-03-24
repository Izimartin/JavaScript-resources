import { useEffect, useState } from 'react';

function Btn() {

    const [count, setCount] = useState(0);
    const [loaded, setLoaded] = useState(false);
//Run when mounted & when state canges
    useEffect(() => {
        alert('hello side effect!')
    })
// Control over infinite Loop
    useEffect(
        () => {
            fetch('foo').then(() => setLoaded(true))
        }, 
// Run when count changes
        [count]
    )

    return (
        <button on click={() => setCount(count + 1)}>
            {count}
        </button>

    );
}