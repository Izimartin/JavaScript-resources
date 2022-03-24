function showData(obj) { 
    document.querySelector("output").innerHTML += J
}

const array = [1, 2, 2, 2, 3, 3, 3, 4, 5, 10]

const unique = [... new Set(array)]

showData(uniue)