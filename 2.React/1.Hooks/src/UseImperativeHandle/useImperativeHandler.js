function App() {

    const ref = useRef(null);
    return <><CoolButton ref={ref}></CoolButton></>
    }

    function CoolButton(props, ref) {

    const myBtn = useRef(null);

    useImperativeHanlder(ref, () => ({
    click: () => {
        console.log('clicking button!');
        mybtn.current.click();

    }
    }));
//forward reference to element
    return <><button ref={ref}></button></>

}