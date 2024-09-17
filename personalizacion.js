let productos =[
  { nombre : "nikeDunk",
    precio : 339950
  },
  { nombre : "nikePegasus",
    precio : 650280
  },
  { nombre : "adidasCourt",
    precio : 440580
  },
  { nombre : "adidasAdvantage",
    precio : 554504
  }

]
// Variables
let tenisBase = document.getElementById('tenisBase').value; /// ENSAYO PARA GUARDAR VALOR DE CADA TENIS// ES MEJOR HACERLO EN LA FUNCION QUE RELACIONA LOS TENIS
const cantidadInput = document.getElementById('cantidad');
const precioSpan = document.getElementById('precio');
const precioTotalSpan = document.getElementById('precioTotal');
const agregarCarritoBtn = document.getElementById('agregarCarrito');

// Función para calcular el precio total
function calcularPrecioTotal() {
  const cantidad = parseInt(cantidadInput.value);
  //const precioUnitario = parseFloat(precioSpan.textContent);// DEBO MODIFICAR ESTE VALOR CON LA FUNCION QUE RELACIONA LOS TENIS
  //const precioUnitario = parseFloat(precioSpan.textContent)
  const precioUnitario = parseFloat(precioSpan.textContent.replace(/\./g, '').replace(/,/g, '.'));
  const precioTotal = cantidad * precioUnitario;
  
  // Mostrar el precio total
  precioTotalSpan.textContent = precioTotal.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Evento para actualizar el precio total al cambiar la cantidad
cantidadInput.addEventListener('input', calcularPrecioTotal);

// Evento al hacer clic en "Agregar al carrito"
agregarCarritoBtn.addEventListener('click', function() {
  /*const talla = document.getElementById('talla').value;
  const tenisBase = document.getElementById('tenisBase').value;
  const logo = document.getElementById('logo').value;
  const cordon = document.getElementById('cordon').value;
  const diseño = document.getElementById('diseño').value;
  const cantidad = cantidadInput.value;
  const precioTotal = precioTotalSpan.textContent;*/
});
const mainImage = document.getElementById('mainImage');//ubicar la imagen donde se posiciona zapato base
const img1 = document.getElementById('imagen1');//ubicar la imagen donde se posiciona cordon
const img2 = document.getElementById('imagen2');//ubicar la imagen donde se posiciona cordon
const img3 = document.getElementById('imagen3');//ubicar la imagen donde se posiciona diseño
const tenisBaseSelect = document.getElementById('tenisBase');//ubicar la encuesta relacionada con la imagen zapato base
const logoSelect = document.getElementById('logo');//ubicar la encuesta relacionada con la imagen cordon
const cordonSelect = document.getElementById('cordon');//ubicar la encuesta relacionada con la imagen cordon
const diseñoSelect = document.getElementById('diseño');//ubicar la encuesta relacionada con la imagen diseño

// Función para cambiar la imagen según el diseño seleccionado
function imagenDiseño() {
  const diseño = diseñoSelect.value;
  // Cambiar la imagen dependiendo del valor seleccionado
  if (diseño === 'n/a') {
      img3.src = './PersonalizacionJulian/0logo_zapateria_2.png'; // Imagen logo
  } else if (diseño === 'onePiece') {
    img3.src = './PersonalizacionJulian/mod1.jpeg'; // Imagen para onePiece
  } else if (diseño === 'harryPotter') {
      img3.src = './PersonalizacionJulian/mod2.jpeg'; // Imagen para harryPotter
  } else if (diseño === 'naruto') {
      img3.src = './PersonalizacionJulian/mod3.png'; // Imagen para naruto
  } else if (diseño === 'pokemon') {
      img3.src = './PersonalizacionJulian/mod4.png'; // Imagen para pokemon
  } else if (diseño === 'alas') {
    img3.src = './PersonalizacionJulian/mod5.png'; // Imagen para alas
  } else if (diseño === 'Avatar') {
    img3.src = './PersonalizacionJulian/mod6.png'; // Imagen para Avatar
  }
}
// Función para cambiar la imagen según el Tenis Base seleccionado    |||| AGREGAR CAMBIO DE VALOR

function imagenTenisbase() {
  const tenisBase = tenisBaseSelect.value;
  // Cambiar la imagen dependiendo del valor seleccionado
  if (tenisBase === 'n/a') {
      mainImage.src = './PersonalizacionJulian/0logo_zapateria_2.png'; // Imagen logo
      precioUnitario = 0
      precioSpan.textContent = precioUnitario.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      
  } else if (tenisBase === 'nikeDunk') {
      mainImage.src = './PersonalizacionJulian/1nikedunklow.png'; // Imagen para nikeDunk
      let busqueda = productos.find(nombre => nombre.nombre === tenisBase)
      precioUnitario = busqueda.precio
      precioSpan.textContent = precioUnitario.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      
  } else if (tenisBase === 'adidasCourt') {
      mainImage.src = './PersonalizacionJulian/2adidascourtblock.png'; // Imagen para adidasCourt
      let busqueda = productos.find(nombre => nombre.nombre === tenisBase)
      precioUnitario = busqueda.precio
      precioSpan.textContent = precioUnitario.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      
  } else if (tenisBase === 'adidasAdvantage') {
      mainImage.src = './PersonalizacionJulian/3adidasadvantage.png'; // Imagen para adidasAdvantage
      let busqueda = productos.find(nombre => nombre.nombre === tenisBase)
      precioUnitario = busqueda.precio
      precioSpan.textContent = precioUnitario.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      
  } else if (tenisBase === 'nikePegasus') {
      mainImage.src = './PersonalizacionJulian/4nikepegasus.png'; // Imagen para nikePegasus
      let busqueda = productos.find(nombre => nombre.nombre === tenisBase)
      precioUnitario = busqueda.precio
      precioSpan.textContent = precioUnitario.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      
  } 
}
// Función para cambiar la imagen según el Tenis Base seleccionado
function imagenCordon() {
  const cordon = cordonSelect.value;
  // Cambiar la imagen dependiendo del valor seleccionado
  if (cordon === 'n/a') {
      img2.src = './PersonalizacionJulian/0logo_zapateria_2.png'; // Imagen logo
  } else if (cordon === 'Negro') {
      img2.src = './PersonalizacionJulian/cordon1.webp'; // Imagen para Negro
  } else if (cordon === 'Blanco') {
      img2.src = './PersonalizacionJulian/cordon3.webp'; // Imagen para Blanco
  } else if (cordon === 'Rojo') {
      img2.src = './PersonalizacionJulian/cordon4.webp'; // Imagen para Rojo
  } else if (cordon === 'Azul') {
      img2.src = './PersonalizacionJulian/cordon2.webp'; // Imagen para Azul
  } 
}
// Función para cambiar la imagen según el Logo seleccionado
function imagenLogo() {
  const logo = logoSelect.value;
  // Cambiar la imagen dependiendo del valor seleccionado
  if (logo === 'n/a') {
      img1.src = './PersonalizacionJulian/0logo_zapateria_2.png'; // Imagen logo
  } else if (logo === 'Negro') {
      img1.src = './PersonalizacionJulian/1.1nikedunklowlogonegro.jpg'; // Imagen para Negro
  } else if (logo === 'Blanco') {
      img1.src = './PersonalizacionJulian/1nikedunklow.png'; // Imagen para Blanco
  } else if (logo === 'Rojo') {
      img1.src = './PersonalizacionJulian/1.1nikedunklowlogorojo.jpg'; // Imagen para Rojo
  } else if (logo === 'Azul') {
      img1.src = './PersonalizacionJulian/1.1nikedunklowlogoazul.jpg'; // Imagen para Azul
  } 
}

// Escuchar el evento de cambio en el select de diseño,logo,cordon, tenis base
diseñoSelect.addEventListener('change', imagenDiseño);
logoSelect.addEventListener('change', imagenLogo);
cordonSelect.addEventListener('change', imagenCordon);
tenisBaseSelect.addEventListener('change', imagenTenisbase);
tenisBaseSelect.addEventListener('change', calcularPrecioTotal);

//////////////////////////////////////////////////////////////CARRITO/////////////////////////////////////////////
// Función para calcular el precio total
function calcularPrecioTotal2(precioUnitario, cantidad) {
  return precioUnitario * cantidad;
  }
  
// Función que guarda la selección del usuario
document.getElementById("agregarCarrito").addEventListener("click", function() {
// Capturamos los valores seleccionados por el usuario
  const productoSeleccionado = {
      talla: document.getElementById("talla").value,
      tenisBase: document.getElementById("tenisBase").value,
      logo: document.getElementById("logo").value,
      cordon: document.getElementById("cordon").value,
      diseño: document.getElementById("diseño").value,
      cantidad: document.getElementById("cantidad").value,
      precioUnitario: document.getElementById("precio").innerText,
      precioTotal: document.getElementById("precioTotal").innerText
  }

  // Mostramos el precio total en la página
 // document.getElementById("precioTotal").innerText = productoSeleccionado.precioTotal;

  // Guardamos el producto en el localStorage
  let carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Recuperamos el carrito existente o creamos uno nuevo
  carrito.push(productoSeleccionado); // Añadimos el producto al carrito
  localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardamos el carrito actualizado

  alert("Producto agregado al carrito")
});
