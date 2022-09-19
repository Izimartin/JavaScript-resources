import { useRef } from 'react';

function MyComponent() {
    const ref = useRef();

    useEffect(() => {
        console.log(ref.current); //reference to div
    }, [])

    return <div ref={ref} />
}

export default MyComponent;

// This variable is then passed to a given React element (not a component) 
// to get a reference to the underlying DOM element(that is, div, span, and so on).
// Refs are often referred to as an "escape hatch" to be able to work with a DOM element directly. 
// They allow us to do certain operations that can't be done through React otherwise, such as clearing or focusing an input.

function App() {
//useRef() doesn't trigger or re-render like setState()
//grab native HTML elements from JSX
    const = myBtn = useRef(null);

    const clickIt = () => myBtn.current.click()

    return (

        <button ref={myBtn}></button>
    );

}