var text = document.getElementById("one").innerHTML;
alert("The first heading is " + text);

var paragraphs = document.getElementsByTagName("p");

alert("Content in the second paragraph is " + paragraphs[1].innerHTML);

document.getElementById("second").innerHTML = "The orginal message is changed.";
document.getElementById(id).addEventListener("click", functionname)
document.getElementById(id).addEventListener("click", functionname)

document.getElementById("btnClick").addEventListener("click", clicked);
function clicked() {
        alert("You clicked me!!!");
}
// Document
getElementById() // returns the element with the specified id.
getElementByTagName() // returns a list of elements with the specified tag name.
createElement() // creates an element text node with specified text
createAtrribute() // create a new attribute with specified name and value
addEventListener() // attach an event handler to an element
// Node
appendChild() // appends a child node to the current node
removeChild() // removes a child node from the current node
hasChildNodes() // returns true if the current node has child nodes
ChildNodes() // returns a collection or Nodelist of child nodes
parentNode() // returns the parent node of the current node
insertBefore(new, existing) // inserts a newNode as child node before an existingNode
replaceChild() // replaces a child node with another child node
// DOM EVENTS
//Mouse
onclick // when the user clicks on an element
onmouseover // when the user moves the mouse over an element
onmouseout // when the user moves the mouse out of an element
onmousedown // when the user presses the mouse button over an element
onmouseup // when the user releases the mouse button over an element
//Keyboard
onkeydown // when the user presses a key
onkeyup // when the user releases a key
onkeypress // when the user presses a key
//Form 
onchange // when the value of an element changes
onfocus // when an element gets focus
onblur // when an element loses focus
//Window
onload // when the page is loaded
onunload // when the page is closed
onresize // when the window is resized 
onscroll // when the window is scrolled
//Other 
onabort // when the user aborts the loading of an image
oncanplay // when the browser can play the media
oncanplaythrough // when the browser can play through the media
ondurationchange // when the duration of the media changes
onemptied // when the media has become empty
onended // when the media has finished playing
onerror // when an error occurs
onloadeddata // when the browser has loaded the current frame of the media
onloadedmetadata // when the browser has loaded meta data for the media
onloadstart // when the browser starts looking for the media
onpause // when the media is paused
onplay // when the media is playing 
onplaying // when the media is playing
onprogress // when the browser is looking for the media
onratechange // when the playback rate changes 
onreadystatechange // when the ready state changes
onseeked // when the user seeks the media
onseeking // when the user is seeking the media
onstalled // when the browser is stalled 
onsuspend // when the media is suspended
ontimeupdate // when the time is updated 
onvolumechange // when the volume is changed 
onwaiting // when the media is waiting
//Event
preventDefault() // cancels the event if it is cancelable
stopPropagation() // prevents the event from bubbling up the DOM tree
stopImmediatePropagation() // prevents the event from bubbling up the DOM tree
//EventTarget
addEventListener() // attach an event handler to an element
removeEventListener() // removes an event handler from an element
dispatchEvent() // dispatches an event
//EventListener
handleEvent() // executes when an event is dispatched
//Event
type // returns the type of event
