//Definiremos las variables que vamos a utilizar en el programa
const carrito = document.getElementById("carritoConteo");
const productos = document.getElementById("productos");
let carritoCount = 0;

//Función para agregar un producto al carrito
function agregarProductoAlCarrito(){
    carritoCount++;
    actualizarCarrito();

};

//Funcion para actualizar la cantidad del carrito
function actualizarCarrito() {
    carrito.innerHTML = `<a href="#">Carrito (${carritoCount})</a>`;
};

function agregarProductoASeccion(){

};