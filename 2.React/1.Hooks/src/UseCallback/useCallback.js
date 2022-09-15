// useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.

function App() {

    const [count, setCount] = useState(60);

    const showCount = useCallBack() => {
        alert(`Count ${count}`)
    }, [count])

    return <> <someChild handler={showCount} /> </>;
}