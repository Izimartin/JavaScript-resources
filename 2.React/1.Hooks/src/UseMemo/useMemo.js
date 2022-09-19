//Memoization cache result of funciton call
//use only as needed for expensive calculations
function App() {

    const [count, setCount] = useState(60);

    const expensiveCount = useMemo(() => {
        return count ** 2;
    }, [count])

    return <></>;
}