const URL = "http://localhost:3000/productos";

export async function obtenerProductos() {
    const response = await fetch(URL);
    return await response.json();
}

export async function crearProducto(producto) {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });

    return await response.json();
}

export async function actualizarProducto(id, producto) {
    const response = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });

    return await response.json();
}

export async function eliminarProducto(id) {
    await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });
}