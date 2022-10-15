//The debounce() function forces a function to wait a certain amount of time before running again. 
//The function is built to limit the number of times a function is called. 

const initApp = () => {
    // select our: button
    const button = document.querySelector('button');
    // add click listener and executes an action that debounces 2 seconds
    button.addEventListener(`click`, debounce(clickLog, 2000));
    // add click listener and executes an action disable button for 2 seconds
    button.addEventListener(`click`, () => {
        clickLog();
        button.disabled = true;
        setTimeout(() => button.disabled = false, 2000);
    });
}

const clickLog = () => console.log(`clicked`);
// add DOMContentLoaded event to page and executes the function initAApp 
document.addEventListener('DOMContentLoaded', initApp);

const debounce = (fn, delay) => {
    let id;
    console.log(`id at inmediate load: ${id}`);
    return (...args) => {
        console.log(`previous id: ${id}`);
        if (id) clearTimeOut(id);
        id = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}