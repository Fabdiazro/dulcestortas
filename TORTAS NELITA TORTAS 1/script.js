let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Oculta todas las imágenes
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Vuelve al inicio
    slides[slideIndex - 1].style.display = "block"; // Muestra la imagen activa
    setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
}

function plusSlides(n) {
    slideIndex += n; // Cambia el índice
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    showSlidesManualmente(slideIndex); // Muestra la imagen manualmente
}

function showSlidesManualmente(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Oculta todas las imágenes
    }
    slides[n - 1].style.display = "block"; // Muestra la imagen activa
}

// Datos de los productos
const productos = [
    { nombre: "Torta de Halloween 1", categoria: "bodas", imagen: "images/torta de halloween_1.jpg" },
    { nombre: "Torta de Halloween 2", categoria: "cumpleaños", imagen: "images/torta de halloween_2.jpg" },
    { nombre: "Torta de Halloween 3", categoria: "muñecos de Tortas", imagen: "images/tortadehalloween_3.jpg" },
    { nombre: "Torta de Halloween 4", categoria: "cumpleaños", imagen: "images/torta de halloween_4.jpg" },
    // Agrega más productos según sea necesario
];

function filterProducts(categoria) {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = ""; // Limpiar el contenedor

    productos.forEach(producto => {
        if (producto.categoria === categoria || categoria === "todos") {
            const div = document.createElement("div");
            div.className = "producto";
            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" style="width:100%; height:auto;">
                <p>${producto.nombre}</p>
            `;
            contenedor.appendChild(div);
        }
    });
}

// Muestra todos los productos al cargar
filterProducts('todos'); // Cambia 'cumpleaños' a 'todos' si quieres mostrar todos los productos
