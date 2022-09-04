function MyComponent() {
    const [state, setState] = useState(0);
    
    state = {
        name: 'Maxx',
        id: '101'
    }
    setTimeout(() => { setState({ name: 'Jaeha', id: '222' }) }, 2000)

    return (
        
        <div>
            <h1>Hello {state.name}.</h1>
            <h1>Your ID is: {state.id}</h1>
        </div>
    );

}