function App() {

    const [count, setCount] = useState(60);

    const showCount = useCallBack() => {
        alert(`Count ${count}`)
    }, [count])

    return <> <someChild handler={showCount} /> </>;
}