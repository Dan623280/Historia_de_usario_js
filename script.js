

// ==========================
// Selección de elementos DOM
// ==========================

// Usando getElementById
const inputNota = document.getElementById("inputNota");
const btnAgregar = document.getElementById("btnAgregar");

// Usando querySelector
const listaNotas = document.querySelector("#listaNotas");

// Verificar referencias en consola
console.log(inputNota);
console.log(btnAgregar);
console.log(listaNotas);

// ==========================
// Arreglo para almacenar notas
// ==========================

let notas = [];

// ==========================
// Función para guardar notas
// ==========================

function guardarNotas() {

    // Guardar en Local Storage
    localStorage.setItem("notas", JSON.stringify(notas));

    console.log("Notas guardadas:", notas);
}

// ==========================
// Función para crear notas
// ==========================

function crearNota(texto) {

    // Crear elemento li
    const li = document.createElement("li");

    // Crear texto de la nota
    const textoNota = document.createElement("span");
    textoNota.textContent = texto;

    // Crear botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");

    // Evento para eliminar nota
    btnEliminar.addEventListener("click", () => {

        // Eliminar del DOM
        listaNotas.removeChild(li);

        // Eliminar del arreglo
        notas = notas.filter(nota => nota !== texto);

        // Guardar cambios
        guardarNotas();

        console.log("Nota eliminada:", texto);
    });

    // Agregar elementos al li
    li.appendChild(textoNota);
    li.appendChild(btnEliminar);

    // Agregar li a la lista
    listaNotas.appendChild(li);
}

// ==========================
// Evento para agregar notas
// ==========================

btnAgregar.addEventListener("click", () => {

    // Obtener valor del input
    const texto = inputNota.value.trim();

    // Validar campo vacío
    if (texto === "") {
        alert("Por favor escribe una nota");
        return;
    }

    // Agregar al arreglo
    notas.push(texto);

    // Crear nota en pantalla
    crearNota(texto);

    // Guardar en Local Storage
    guardarNotas();

    console.log("Nota agregada:", texto);

    // Limpiar input
    inputNota.value = "";

    // Enfocar nuevamente
    inputNota.focus();
});

// ==========================
// Cargar notas al iniciar
// ==========================

window.addEventListener("DOMContentLoaded", () => {

    // Obtener notas guardadas
    const notasGuardadas = localStorage.getItem("notas");

    // Verificar si existen
    if (notasGuardadas) {

        // Convertir JSON a arreglo
        notas = JSON.parse(notasGuardadas);

        // Renderizar notas
        notas.forEach(nota => {
            crearNota(nota);
        });

        console.log(`${notas.length} notas cargadas`);
    }
});