export function renderizarProductos(
    productos,
    lista,
    eliminar,
    editar
) {

    lista.innerHTML = "";

    productos.forEach(producto => {

        const li = document.createElement("li");

        li.textContent =
            `${producto.nombre} - $${producto.precio}`;

        // Botón editar
        const btnEditar =
            document.createElement("button");

        btnEditar.textContent = "Editar";

        btnEditar.addEventListener("click", () => {
            editar(producto);
        });

        li.appendChild(btnEditar);

        // Botón eliminar
        const btnEliminar =
            document.createElement("button");

        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", () => {
            eliminar(producto.id);
        });

        li.appendChild(btnEliminar);

        lista.appendChild(li);

    });

}