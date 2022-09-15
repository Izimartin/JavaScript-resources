function App() {
//
    const displayName = useDisplayName();
    return <button{displayName}</ button>;

}

        function useDisplayName() {

    const [displayName, setDisplayName] = useState();

    useEffect(() => {
        const data = fetchFromDatabase(props.userId);
        setDisplayName(data.displayName);
    }, []);

        useDebugValue(displayName ?? 'loading...')

        return displayName;

}