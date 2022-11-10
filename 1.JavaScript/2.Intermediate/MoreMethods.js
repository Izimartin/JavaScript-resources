alert() // alerts a message
alert(document.getElementById('checkbox1').checked); // status of a CheckBox
confirm() // asks a question and returns true or false
prompt() // asks a question and returns a string or displays a dialog box that prompts the user to enter an input.
close() // closes the current window
open() // opens a new window

atob()  // converts a base-64 encoded string to a binary string
btoa() // converts a binary string to a base-64 encoded string
blur() // removes focus from an element window
focus() // sets focus on an element window

// Timers
setTimeout(function, delay);
setInterval(function, delay);
clearTimeout(timeout); // clears a timeout set with setTimeout()
clearInterval(interval); // stops a timer or clears a timer set with setInterval()

requestAnimationFrame() // requests that the browser schedule a repaint of the window for the next animation frame
cancelAnimationFrame() // cancels a requestAnimationFrame() call
resizeBy() // increases or decreases the size of the window by the specified amounts of pixels.
resizeTo() // changes the size of the window to the specified width and height.
scrollBy() // increases or decreases the position of the upper-left corner of the window by the specified amounts.
scrollTo() // moves the scroll bar to the specified position.
stop() // stops the current windows from loading


var JSQuestion = confirm("Do you like JavaScript?");
console.log(JSQuestion);
document.write("Welcome!") //  is used to print the text–Welcome on the screen.
return JSQuestion;


//The onload function is not run until all the information on the page is loaded.
//  This leads to a substantial delay before any code is executed.
window.onload
//onDocumentReady loads the code just after the DOM is loaded. 
// This allows early manipulation of the code.
onDocumentReady

