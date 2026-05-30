import {
    obtenerProductos,
    crearProducto,
    eliminarProducto,
    actualizarProducto
} from "./api.js";

import {
    guardarProductos,
    cargarProductos
} from "./storage.js";

import {
    renderizarProductos
} from "./dom.js";

const formulario = document.getElementById("formProducto");
const nombreInput = document.getElementById("nombre");
const precioInput = document.getElementById("precio");
const listaProductos = document.getElementById("listaProductos");

let productos = cargarProductos();

/* =========================
   Cargar datos iniciales
========================= */

document.addEventListener("DOMContentLoaded", async () => {

    renderizar();

    try {

        const datosAPI = await obtenerProductos();

        console.log("Productos API:", datosAPI);

    } catch (error) {

        console.error("Error al obtener productos:", error);

    }

});

/* =========================
   Renderizar lista
========================= */

function renderizar() {

    renderizarProductos(
        productos,
        listaProductos,
        eliminar,
        editar
    );

}

/* =========================
   Agregar producto
========================= */

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const precio = Number(precioInput.value);

    if (nombre === "") {
        alert("Ingrese un nombre");
        return;
    }

    if (precio <= 0) {
        alert("Ingrese un precio válido");
        return;
    }

    const producto = {
        nombre,
        precio
    };

    try {

        const productoGuardado =
            await crearProducto(producto);

        productos.push(productoGuardado);

        guardarProductos(productos);

        renderizar();

        console.log("Producto enviado a la API");

    } catch (error) {

        console.error(
            "Error al guardar en API:",
            error
        );

    }

    formulario.reset();

});

/* =========================
   Editar producto
========================= */

async function editar(producto) {

    const nuevoNombre =
        prompt(
            "Nuevo nombre:",
            producto.nombre
        );

    const nuevoPrecio =
        Number(
            prompt(
                "Nuevo precio:",
                producto.precio
            )
        );

    if (!nuevoNombre || nuevoPrecio <= 0) {
        return;
    }

    const productoActualizado = {
        ...producto,
        nombre: nuevoNombre,
        precio: nuevoPrecio
    };

    try {

        await actualizarProducto(
            producto.id,
            productoActualizado
        );

        const indice =
            productos.findIndex(
                p => p.id === producto.id
            );

        productos[indice] =
            productoActualizado;

        guardarProductos(productos);

        renderizar();

    } catch (error) {

        console.error(error);

    }

}

/* =========================
   Eliminar producto
========================= */

async function eliminar(id) {

    productos = productos.filter(
        producto => producto.id !== id
    );

    guardarProductos(productos);

    renderizar();

    try {

        await eliminarProducto(id);

        console.log("Producto eliminado de la API");

    } catch (error) {

        console.error(
            "Error al eliminar en API:",
            error
        );

    }

}