//Definiremos las variables que vamos a utilizar en el programa
const carrito = document.getElementById("carritoConteo");
const productos = document.getElementById("productos");
const imagenDeProducto = document.querySelector(".imagenventa");
const elementosCreados = [];

let producto1 = 0;
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

function agregarProductoASeccion(divEspecifico){
    agregarProductoAlCarrito();
    const seccionCarrito = document.getElementById("carritoCompras");

    // if(elementosCreados[seccionCarrito.getElementById(`${divEspecifico.querySelector("h2").textContent}`)]){
    //     //sumar cantidad de producto
    // } else {

    // };

    const nombreProductoNuevo = divEspecifico.querySelector("h3").textContent.trim();

    let productoExistente = null;
    for (const producto of elementosCreados) {
        if (producto.nombre === nombreProductoNuevo) {
            productoExistente = producto;
            break;
        }
    }

    if (productoExistente) {
        // El producto ya existe, puedes aumentar la cantidad aquí
        productoExistente.cantidad++
        console.log(productoExistente.cantidad)

        const cantidadDeProducto = document.getElementById(`${nombreProductoNuevo}-cantidad`);

        console.log(cantidadDeProducto)
        
        if(cantidadDeProducto !== null){
            
            cantidadDeProducto.id = `${nombreProductoNuevo}-cantidad`;
            cantidadDeProducto.textContent = `Cantidad: ${productoExistente.cantidad}`
            console.log(cantidadDeProducto)
            


        } else {
            const nuevoParrafo = document.createElement("p");
            nuevoParrafo.id = `${nombreProductoNuevo}-cantidad`;
            nuevoParrafo.textContent = `Cantidad: ${productoExistente.cantidad}`;
            seccionCarrito.appendChild(nuevoParrafo)


            // cantidadDeProducto = productoExistente.cantidad
        }
        // cantidadProducto.textContent = productoExistente.cantidad
        
        

    
        // const productoEnCarrito = document.getElementById(nombreProductoNuevo);
        // productoEnCarrito.querySelector(".cantidad").textContent = `Cantidad: ${productoExistente.cantidad}`;
    
    
    }else {
    
    
    // if(seccionCarrito.getElementById(`${divEspecifico.querySelector(".card__titulo").textContent}`)){
    //     console.log("si es verdadero")
    // } else {
    const nuevoProductoAñadido = document.createElement("div");
    
    //Creamos un id para el div
    nuevoProductoAñadido.setAttribute('id', `${divEspecifico.querySelector("h3").textContent}`);

    //Creamos la seccion del producto para carrito
    nuevoProductoAñadido.classList.add('producto_creado');
    //creamos una imagen y le enlazamos el src de la imagen del html
    const imagen = document.createElement("img");
    imagenHTML = divEspecifico.querySelector("img");
    const srcDeImagen = imagenHTML.getAttribute('src');
    imagen.setAttribute('src', srcDeImagen);
    //añadimos la imagen como elemento del div

    nuevoProductoAñadido.appendChild(imagen);

    //Añadiremos el título del producto
    const nombreProducto = document.createElement("h3");
    const contenidoOriginal = divEspecifico.querySelector("h3").textContent;
    nombreProducto.textContent = contenidoOriginal;
    nuevoProductoAñadido.appendChild(nombreProducto);

    
    

    //añadimos el div al campo section como tal
    
    //Añadiremos el precio como tal del producto
    const precioProducto = document.createElement("p");
    const contenidoOriginalPrecio = divEspecifico.querySelector(".card__valor").textContent;
    precioProducto.textContent = contenidoOriginalPrecio;
    nuevoProductoAñadido.appendChild(precioProducto);

    elementosCreados.push({
        nombre: nombreProductoNuevo.trim(),
        cantidad: 1
    })
    
    
    
    
    
    seccionCarrito.appendChild(nuevoProductoAñadido);}
    console.log(elementosCreados)
    // const imagen = divEspecifico.querySelector("img")
    // const prueba = document.createElement("h1")
    // seccionCarrito.appendChild(imagen)
};