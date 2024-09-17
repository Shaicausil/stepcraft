// Recuperar el carrito del localStorage
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const carritoDiv = document.getElementById('carrito');
let subtotal = 0;
const iva = 0.19

// Elementos del modal
const modalCompra = document.getElementById('modalCompra');
const botonSalir = document.getElementById('botonSalir');
const botonComprar = document.getElementById('botonComprar');
const formCompra = document.getElementById('formCompra');

// Botones adicionales
const vaciarCarritoBtn = document.getElementById('vaciarCarrito');
const comprarBtn = document.getElementById('comprar');


// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    carritoDiv.innerHTML = ''; // Limpiar contenido previo
    subtotal = 0;
    carrito.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        const precioUnitarioFormateado = producto.precioUnitario;
        const precioTotalFormateado = producto.precioTotal;

        productoDiv.innerHTML = `
            <p><strong>Talla:</strong> ${producto.talla}</p>
            <p><strong>Tenis Base:</strong> ${producto.tenisBase}</p>
            <p><strong>Logo:</strong> ${producto.logo}</p>
            <p><strong>Cordón:</strong> ${producto.cordon}</p>
            <p><strong>Diseño:</strong> ${producto.diseño}</p>
            <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
            <p><strong>Precio Unitario:</strong> $${precioUnitarioFormateado} pesos.</p>
            <p><strong>Precio Total:</strong> $${precioTotalFormateado} pesos.</p>
            <button class="eliminarBtn" data-index="${index}">Eliminar</button>
            `;
        
        carritoDiv.appendChild(productoDiv);

        // Calcular subtotal
        subtotal += parseFloat(producto.precioTotal.replace(/\./g, '').replace(/,/g, '.'));
        
    });
    const totaIva = subtotal * iva
    const totalConImpuesto = subtotal + totaIva

    // Actualizar subtotal y total
    document.getElementById('subtotal').textContent = `${subtotal.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} pesos.`;
    document.getElementById('impuesto').textContent = `${totaIva.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} pesos.`; 
    document.getElementById('total').textContent = `${totalConImpuesto.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} pesos.`; 

    // Añadir event listeners a los botones de eliminar
    document.querySelectorAll(".eliminarBtn").forEach((boton) => {
        boton.addEventListener("click", eliminarDelCarrito);
     });
}
// Función para eliminar un producto del carrito
function eliminarDelCarrito(event) {
    const index = event.target.getAttribute("data-index"); // Obtenemos el índice del producto a eliminar
    let carrito2 = carrito;
    carrito2.splice(index, 1); // Eliminamos el producto del array
    localStorage.setItem("carrito", JSON.stringify(carrito2)); // Guardamos el carrito actualizado
    mostrarCarrito(); // Actualizamos la vista del carrito
  }
  // Función para abrir el modal de compra
comprarBtn.addEventListener('click', function() {
    modalCompra.style.display = 'block';
});

// Cerrar el modal al hacer clic en el botón "Salir"
botonSalir.addEventListener('click', function() {
    modalCompra.style.display = 'none';
});

// Función para manejar el formulario de compra
formCompra.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
    alert('Compra exitosa');
    modalCompra.style.display = 'none';
});

// Función para vaciar el carrito
vaciarCarritoBtn.addEventListener("click", function() {
    carrito.length = 0; // Vaciar el array del carrito
    localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizar el localStorage
    mostrarCarrito(); // Actualizar la vista del carrito
});
// Llamar a la función para mostrar los productos
mostrarCarrito();

