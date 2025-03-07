// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista para guardar nombres
let nombrePersonas = [];

//Función para agregar amigos a la lista
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    //Si el valor no es vacio, se agrega a la lista
    if (nombre !== "") {
        nombrePersonas.push(nombre);
        //Cuando se agrega el nombre, se muestra en pantalla el nombre del amigo
        mostrarAmigos();
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

//Función para mostrar los nombres de los amigos
function mostrarAmigos() {
    let listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = "";

    for (let i = 0; i < nombrePersonas.length; i++) {
        let item = document.createElement("li");
        //El contador parte desde el inicio de la lista, así que siempre da con el nombre que se agrega
        //El contador parte en cero, cuando la lista se haga más grande, el contador aumentará
        item.textContent = nombrePersonas[i];
        listaNombres.appendChild(item);
    }
}

//Función para hacer el sorteo de los nombres de los amigos
function sortearAmigo() {
    if (nombrePersonas.length > 0) {
        let numeroGanador = Math.floor(Math.random()*nombrePersonas.length);
        let amigoGanador = nombrePersonas[numeroGanador];
        document.getElementById("resultado").textContent = `El ganador es: ${amigoGanador}`;
    } else {
        alert("No hay nombres para sortear");
    }
}