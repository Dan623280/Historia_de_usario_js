# Gestión de Productos


-------------------------------------------------------------------------

## 📌 Descripcion

La aplicación permite gestionar productos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar), utilizando JavaScript, Local Storage y JSON Server como API simulada.

------------------------------------------------------------------------

## 📌 Requisitos

Antes de utilizar la aplicación, asegúrese de tener instalado:

Node.js
JSON Server

-------------------------------------------------------------------------

## 🚀 ¿Cómo acceder al proyecto?


### 1. Clona el repositorio

``` bash

git clone -b H4 https://github.com/Dan623280/Historia_de_usario_js.git

```
------------------------------------------------------------------------
## Estructtura

``` tree
.
├── css
│   └── style.css
├── db.json
├── index.html
├── js
│   ├── api.js
│   ├── app.js
│   ├── dom.js
│   └── storage.js
└── README.md



```

------------------------------------------------------------------------


## Inicialización del proyecto

1. Abrir una terminal en la carpeta del proyecto.
2. Ejecutar el siguiente comando para iniciar la API:

``` bash
json-server --watch db.json --port 3000

```

------------------------------------------------------------------------

##  Funcionalidades

![alt text](image.png)

### Agregar Producto

1. Ingresar el nombre del producto.
2. Ingresar el precio.
3. Presionar el botón Agregar Producto.
4. El producto se almacenará en:
   - La interfaz gráfica.
   - Local Storage.
   - La API (db.json).


### Editar producto
1. Presionar el botón Editar del producto deseado.
2. Ingresar el nuevo nombre.
3. Ingresar el nuevo precio.
4. Confirmar los cambios.
5. La información se actualizará en la aplicación y en la API.


### Eliminar producto
1. Presionar el botón Eliminar del producto deseado.
2. El producto será removido de:
3. La interfaz.
    - Local Storage.
    - La API.

## Persistencia de datos

La aplicación utiliza Local Storage para mantener los datos almacenados en el navegador y JSON Server para simular una base de datos externa.


## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Local Storage
- Fetch API
- JSON Server


## Operaciones CRUD implementadas

- GET: Obtener productos.
- POST: Crear productos.
- PUT: Actualizar productos.
- DELETE: Eliminar productos.
------------------------------------------------------------------------
## 👤 author

Daniel Elias Alvarez Diaz
