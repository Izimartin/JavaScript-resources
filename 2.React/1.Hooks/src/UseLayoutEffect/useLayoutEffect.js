function CoolButton(props, ref) {

    const myBtn = useRef(null);
    //Runs after render but before painting to screen
    //Caution blocks visual updates 'til your callback is finished
    useLayoutEffect(() => {
        const rect = myBtn.current.getCoundingClientRect();

        console.log(box.height);

    })

    return <><button ref={ref}></button></>

}