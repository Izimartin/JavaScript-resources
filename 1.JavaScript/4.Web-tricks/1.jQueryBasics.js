$.ajax("url", {
    method: "GET", //POST, PUT, DELETE
    success: function(data) {
      //se ejecuta cuando todo sale bien
      //data: lo que devuelve el api
    },
    error: function(error) {
      //se ejecuta cuando hay un error
      //error: mensaje de error del api
    }
  })