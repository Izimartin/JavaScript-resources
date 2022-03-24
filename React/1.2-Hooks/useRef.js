function App() {
//useRef() doesn't trigger or re-render like setState()
//grab native HTML elements from JSX
    const = myBtn = useRef(null);

    const clickIt = () => myBtn.current.click()

    return (

        <button ref={myBtn}></button>
    );

}