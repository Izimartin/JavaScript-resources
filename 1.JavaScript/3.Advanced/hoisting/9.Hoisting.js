const initApp = () => {
    console.log(stepOne);
    stepOne();
}

document.addEventListener("DOMContentLoaded", initApp);

const stepOne = () => {
    console.log('step one');
}