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
    carrito.innerHTML = `<a href="#carritoCompras">Carrito (${carritoCount})</a>`;
};

function agregarProductoASeccion(divEspecifico){
    agregarProductoAlCarrito();
    const seccionCarrito = document.getElementById("section-carrito");

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
            cantidadDeProducto.textContent = productoExistente.cantidad
            console.log(cantidadDeProducto)
            


        } else {
            const nuevoParrafo = document.createElement("p");
            nuevoParrafo.id = `${nombreProductoNuevo}-cantidad`;
            
            const objetosCantidad = elementosCreados.find(objeto => objeto.nombre == nombreProductoNuevo)
            if(objetosCantidad){
                console.log('estoy entro')
                console.log(`${objetosCantidad.cantidad}`)

                nuevoParrafo.textContent = objetosCantidad.cantidad

                const divProducto = document.getElementById(`${divEspecifico.querySelector("h3").textContent}`)

                
                divProducto.appendChild(nuevoParrafo)
                
            } else {
                console.log("nada paso")
            }


            // nuevoParrafo.textContent = productoExistente.cantidad;
            // seccionCarrito.appendChild(nuevoParrafo)


            // cantidadDeProducto = productoExistente.cantidad
        }

        const precioDeProducto = document.getElementById(`${nombreProductoNuevo}-precio`);
        if(precioDeProducto !== null){
            precioDeProducto.id = `${nombreProductoNuevo}-precio`;
            const precioOriginal = divEspecifico.querySelector(`.card__valor`).textContent.trim()
            const precioOriginalNum = parseFloat(precioOriginal)
            precioDeProducto.textContent = `${precioOriginalNum*productoExistente.cantidad}`
        } else{
            alert("El sistema está fallando")
        }

        elementosCreados.forEach(element => {
            console.log(element.precio)
            console.log(element.cantidad)
            element.precioTotal = element.precio*element.cantidad
        });
        const sumaPreciosTotales = elementosCreados.reduce((acumulador, objeto) => {
            return acumulador + objeto.precioTotal;
          }, 0);
          document.getElementById('totalDeCompra').textContent = sumaPreciosTotales
         

        // const cantidadDeProducto = document.getElementById(`${nombreProductoNuevo}-cantidad`);
    
        // cantidadProducto.textContent = productoExistente.cantidad
        
        

    
        // const productoEnCarrito = document.getElementById(nombreProductoNuevo);
        // productoEnCarrito.querySelector(".cantidad").textContent = `Cantidad: ${productoExistente.cantidad}`;
    
    //ESTE ELSE ES DONDE CREA EL NUEVO ELEMENTO-------------------------------------------------------------------
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
    precioProducto.id = `${nombreProductoNuevo}-precio`
    const contenidoOriginalPrecio = divEspecifico.querySelector(".card__valor").textContent.trim();
    console.log(`Este es el precio en string ${contenidoOriginalPrecio}`)
    precioProducto.textContent = contenidoOriginalPrecio;
    console.log(precioProducto)
    nuevoProductoAñadido.appendChild(precioProducto);
    

    
    
    
    
    elementosCreados.push({
        nombre: nombreProductoNuevo.trim(),
        cantidad: 1,
        precio: parseFloat(contenidoOriginalPrecio),

    })
    elementosCreados.forEach(element => {
        console.log(element.precio)
        console.log(element.cantidad)
        element.precioTotal = element.precio*element.cantidad
    });
    const sumaPreciosTotales = elementosCreados.reduce((acumulador, objeto) => {
        return acumulador + objeto.precioTotal;
      }, 0);
      document.getElementById('totalDeCompra').textContent = sumaPreciosTotales

    
    
    
    
    
    
    seccionCarrito.appendChild(nuevoProductoAñadido);}
    console.log(elementosCreados)
    // const imagen = divEspecifico.querySelector("img")
    // const prueba = document.createElement("h1")
    // seccionCarrito.appendChild(imagen)
};

function restarCantidades(divEspecifico){
    carritoCount--;
    actualizarCarrito();
    const nombreProductoNuevo = divEspecifico.querySelector("h3").textContent.trim();

    console.log(typeof(nombreProductoNuevo))
    const seccionCarrito = document.getElementById("section-carrito");
    const precioProductoElementStringVariable = document.getElementById(`${nombreProductoNuevo}-precio`).textContent.trim();
    console.log(`string variable ${precioProductoElementStringVariable}`)

    const precioProductoElementStringEstatico = divEspecifico.querySelector(".card__valor").textContent.trim();
    console.log(`string estatico ${precioProductoElementStringEstatico}`)

    const precioProductoElementFloatEstatico = parseFloat(precioProductoElementStringEstatico)
    console.log(`float estatico ${precioProductoElementFloatEstatico}`)

    const precioProductoElementFloatVariable = parseFloat(precioProductoElementStringVariable)
    console.log(`float variable ${precioProductoElementStringVariable}`)

    // console.log(precioProductoElementFloatEstatico)
    
    const variableCero =document.getElementById(`${nombreProductoNuevo}-precio`).textContent = precioProductoElementFloatVariable - precioProductoElementFloatEstatico

    const nuevoProductoAñadido = document.getElementById(`${divEspecifico.querySelector("h3").textContent}`)

    // if(variableCero === 0 && nuevoProductoAñadido){
        
    //     seccionCarrito.removeChild(nuevoProductoAñadido);
    // }

    //     const nuevoProductoAñadido = document.createElement("div");
    
    // //Creamos un id para el div
    // nuevoProductoAñadido.setAttribute('id', `${divEspecifico.querySelector("h3").textContent}`);

    const objetosRestar = elementosCreados.find(objeto => objeto.nombre == nombreProductoNuevo)

    if(objetosRestar){
        console.log("si entre")
        objetosRestar.cantidad -= 1
        elementosCreados.forEach(element => {
            console.log(element.precio)
            console.log(element.cantidad)
            element.precioTotal = element.precio*element.cantidad
        });
        const sumaPreciosTotales = elementosCreados.reduce((acumulador, objeto) => {
            return acumulador + objeto.precioTotal;
          }, 0);
          document.getElementById('totalDeCompra').textContent = sumaPreciosTotales

        console.log(objetosRestar.cantidad)
        seccionCarrito.querySelector(`#${nombreProductoNuevo}-cantidad`).textContent = objetosRestar.cantidad

        console.log(elementosCreados)
    }

    console.log(`esto es en la resta ${precioProductoElementStringVariable}`);



    
}

function comprarProductos(){
    alert("Gracias por su compra, vuelva pronto")
}
