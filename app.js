// === 1. FASE DE SELECCIÓN ===[cite: 2]
// Capturamos todos los elementos que queremos modificar usando getElementById y querySelector
const tarjeta = document.getElementById('tarjeta-perfil');
const imagen = document.getElementById('foto-usuario');
const nombre = document.querySelector('#nombre-usuario'); 
const biografia = document.getElementById('bio-usuario');
const contenedorEstado = document.getElementById('estado-cuenta');


// === 2. FASE DE MODIFICACIÓN ===[cite: 2]

// Modificación 1: Cambiar textos usando textContent
nombre.textContent = "Ana Gómez";
biografia.textContent = "Ingeniera de Software Senior especializada en React.";

// Modificación 2: Cambiar la imagen usando setAttribute
// Cambiamos el archivo de la imagen y el texto alternativo
imagen.setAttribute('src', 'perfil2.jpg');
imagen.setAttribute('alt', 'Foto de Ana Gómez');

// Modificación 3: Inyectar HTML nuevo usando innerHTML
// Creamos una etiqueta fuerte y un salto de línea desde cero
contenedorEstado.innerHTML = "<br><strong style='color: green;'>🟢 Cuenta Verificada</strong>";

// Modificación 4: Cambiar el diseño usando classList
// Agregamos la clase que teníamos preparada en el CSS
tarjeta.classList.add('perfil-premium');