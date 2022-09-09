let xhr = new XMLHttpRequest();
let url = new URL('https://google.com/search');
url.searchParams.set('q', 'pruébame!');

// xhr.open(method, URL, [async, user, password])
xhr.open('GET', url);

xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.getResponseHeader('Content-Type')
// CORS
xhr.withCredentials = true;

// xhr.send([body])
xhr.send();

xhr.onload = function () {
    if (xhr.status != 200) { // analiza el estado HTTP de la respuesta
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
    } else { // muestra el resultado
        alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
    }
};

xhr.onprogress = function (event) {
    if (event.lengthComputable) {
        alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
    } else {
        alert(`Recibidos ${event.loaded} bytes`); // sin Content-Length
    }

};

xhr.onerror = function () {
    alert("Solicitud fallida");
};

xhr.timeout = 10000;

xhr.onreadystatechange = function () {
    if (xhr.readyState == 3) {
        // cargando
    }
    if (xhr.readyState == 4) {
        // solicitud finalizada
        xhr.abort(); // termina la solicitud

    }
};