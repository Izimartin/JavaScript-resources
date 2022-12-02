function useToggle(){
    const [state, setState] = useState(false);
    const handlers = useMemo(
        () => ({
        on: setState(true),
        off: setState(false),
        toggle: setState(!state),
        }),
        []
    );
    return [state, handlers];
}

const [toggleState, { on, off, toggle }] = useToggle();