//Debouncing forces a function to wait a certain amount of time before running again.
// In other words, it limits the rate at which a function gets invoked.

const initApp = () => {
    const tbutton = document.querySelector('#throttle');

    tbutton.addEventListener('click', throttle(clickLog, 2000));
    tbutton.addEventListener('click', throttle(scrollLog, 200));
}

const clickLog = () => console.log('click');
const scrollLog = () => console.log('scrolling');


document.addEventListener("DOMContentLoaded", initApp);

const throttle = () => {
    let lastTime = 0;
    console.log(`called Throttle inmediately`);
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastTime < delay)
            return;
        lastTime = now;
        console.log(`event id: ${id}`);
        fn(...args);
    }

}