
// objeto de productos
let productos = [
    {"id": 1 , "nombre": "zapato", "precio": 5000},
    {"id": 2 , "nombre": "correa", "precio": 3000},
    {"id": 3 , "nombre": "pantalon", "precio": 1000}
]

// creacion del set
let numeros_repetidos = new Set([3,4,52,3,4])

// numeros repetidos en el set
console.log(numeros_repetidos)

// agregar un numero al set
let nuevo_numero = 6
numeros_repetidos.add(Number(nuevo_numero))

console.log(numeros_repetidos)

// verificar si existe el numero
let numero_verificacion = 6
console.log(numeros_repetidos.has(numero_verificacion) ? "el numero "+ numero_verificacion +" se encuentra": "el numero "+ numero_verificacion +" no se encuentra")


// eliminar numero de set con delete

let nmero_eliminar = 6

console.log(numeros_repetidos.delete(Number(nmero_eliminar)) ? "se logro eliminar el numero" : "numero "+nmero_eliminar+" no existe")

console.log(numeros_repetidos)


// mostrar set con for

for (const element of numeros_repetidos) {
    console.log(element)
}


// map categoria de producto
const categoriasProductos = new Map();

// 2. Asignación de datos (Categoría -> Array de nombres)
categoriasProductos.set('cuero', ['zapato', 'correa']);
categoriasProductos.set('tela', ['pantalon']);

console.log(categoriasProductos);


//listar propiedades y valores del objeto

for (let key in productos) {

    console.log(key,":",productos[key])
}

// mostrar set con for

for (const element of numeros_repetidos) {
    console.log(element)
}

// recorrer map con for each

categoriasProductos.forEach((valor,clave) =>{
    console.log(`Clave: ${clave}, Valor: ${valor}`);
}
)

// validacion de productos 

productos.forEach((producto, index) => {
    // 1. Validar ID (debe existir y ser un número)
    const idValido = typeof producto.id === 'number' && !isNaN(producto.id);
    
    // 2. Validar Nombre (debe existir, ser texto y no estar vacío)
    const nombreValido = typeof producto.nombre === 'string' && producto.nombre.trim() !== "";
    
    // 3. Validar Precio (debe existir, ser un número positivo)
    const precioValido = typeof producto.precio === 'number' && producto.precio >= 0;

    // Resultado de la validación
    if (idValido && nombreValido && precioValido) {
        console.log(`✅ Producto en posición ${index} es válido: ${producto.nombre}`);
    } else {
        console.error(`❌ Error en posición ${index}: Datos inválidos.`, { idValido, nombreValido, precioValido });
    }
});

//utilizacion de object en los productos

console.log("valores "+Object.values(productos)); 

console.log("claves "+Object.keys(productos)); 

console.log("claves y valores "+Object.entries(productos)); 