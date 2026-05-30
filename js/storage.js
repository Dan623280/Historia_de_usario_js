export function guardarProductos(productos) {
    localStorage.setItem(
        "productos",
        JSON.stringify(productos)
    );
}

export function cargarProductos() {
    return JSON.parse(
        localStorage.getItem("productos")
    ) || [];
}