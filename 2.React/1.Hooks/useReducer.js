//Redux a different way to manage state
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state + 1};
        case 'decrement':
            return {count: state - 1};
        default:
            throw new Error();
    }
}

//Action type: string, payload: any
function App() {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <>
            Count: {state}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    );
}