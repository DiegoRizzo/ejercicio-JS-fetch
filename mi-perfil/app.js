// áéíóúÁÉÍÓÚñ
const habilidades = ["Dibujar", "Videojuegos", "Cantar", "Programación", "Piano"];

const mostrarEtiquetas = (habilidades) => {
    habilidades.forEach(createSpan);
}

const createSpan = () => {
    let nuevoSpan = document.createElement("span");
    nuevoSpan.classList.add("etiqueta");
    
}