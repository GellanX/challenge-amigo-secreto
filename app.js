// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista para guardar nombres
let nombrePersonas = [];

//Función para agregar amigos a la lista
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    //Si el valor no es vacio, se agrega a la lista
    if (nombre !== "") {
        nombrePersonas.push(nombre);
        mostrarAmigos();
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

//Función para mostrar los amigos agregados
function mostrarAmigos() {
    let listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = "";

    for (let i = 0; i < nombrePersonas.length; i++) {
        let item = document.createElement("li");
        item.textContent = nombrePersonas[i];
        listaNombres.appendChild(item);
    }
}