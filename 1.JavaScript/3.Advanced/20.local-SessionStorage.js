if (typeof (Storage) === 'undefined') {
    console.log(Storage);

    // Asign elements as string
    localStorage.setItem("llave", "Valor");
    localStorage.canal = "TestStorage";
    localStorage.lenguaje = "JavaScript";

    // Asign object element
    let cursos = ["PHP", "Python", "JavaScript", "TypeScript"];
    localStorage.setItem("cursos", JSON.stringify(cursos));

    // Read Asigned Elements
    console.log("llave");

    let cursosAlmacenados = JSON.parse(localStorage.getItem("cursos"));
    console.log(cursosAlmacenados);
    console.log(localStorage.lenguaje);

    // Elminate element
    localStorage.removeItem("canal");

    // Eliminate all elements 
    // localStorage.clear();

    // Print in browser
    cursosAlmacenados.forEach(element => {
        let elements = document.getElementById("elements");
        let div = document.createElement("div");
        div.innerHTML = element.name + " " + element.age;
        elements.appendChild(div);
    });
} else {
    alert("Storage not supported by this browser")
}

