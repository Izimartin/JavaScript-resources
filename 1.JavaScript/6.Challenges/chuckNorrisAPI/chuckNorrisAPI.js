const box = document.getElementById("box");
const p = document.createElement("P");
 
const url = "https://api.chucknorris.io/jokes/random";

function quotegen(){
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      // Work with JSON data here
    p.innerHTML = data.value;
    box.appendChild(p);
    })
}