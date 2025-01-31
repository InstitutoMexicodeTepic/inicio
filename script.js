let indice = 0;
const slides = document.querySelectorAll(".slide");

function mostrarImagen(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
}

function cambiarImagen(n) {
    indice += n;
    if (indice >= slides.length) indice = 0;
    if (indice < 0) indice = slides.length - 1;
    mostrarImagen(indice);
}

setInterval(() => cambiarImagen(1), 3000); // Cambio automático cada 3 segundos

// Mostrar la primera imagen al cargar la página
mostrarImagen(indice);

// Muestra el botón cuando el usuario se desplaza hacia abajo
window.onscroll = function() {
    let boton = document.getElementById("btnVolverArriba");
    if (document.documentElement.scrollTop > 300) {
        boton.style.display = "flex";
    } else {
        boton.style.display = "none";
    }
};

// Función para volver al inicio con desplazamiento suave
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario enviado. Nos pondremos en contacto contigo pronto.");
});

