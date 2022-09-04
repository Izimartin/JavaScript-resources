function randomFact() {
    // We call the Web Service via AJAX
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.chucknorris.io/jokes/random";
    xmlhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        // We parse the JSON response
        parseJson(json);
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }

  function parseJson(json) {
    var fact = "<b>" + json["value"] + "</b>";
    document.getElementById("data").innerHTML = fact;
  }

  // Finally we add a click event listener on the logo of Chuck Norris
  // to load a new random fact when the user will click on it
  document.getElementById("logo").addEventListener("click", function() {
    randomFact();
  });

  randomFact();