import { useState, useMemo } from "react";

//Memoization cache result of funciton call
//use only as needed for expensive calculations
export default function App() {

    const [count, setCount] = useState(60);

    const expensiveCount = useMemo(() => {
        return count ** 2;
    }, [count])

    return <>
    <button onClick={() => {
        setCount(100)
    }}> Set Count to 100</button>
        <button onClick={() => {
        setCount(50)
    }}> Set Count to 50</button>
        <button onClick={() => {
        setCount(expensiveCount)
    }}> **2</button>
    <h1>{count}</h1>
    </>;
}