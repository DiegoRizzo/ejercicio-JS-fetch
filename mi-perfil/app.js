// áéíóúÁÉÍÓÚñ
const habilidades = ["Dibujar", "Videojuegos", "Cantar", "Programación", "Piano"];

const mostrarEtiquetas = (habilidades) => {
    habilidades.forEach(createSpan);
}

const createSpan = () => {
    const etiquetas = document.querySelector("#etiquetas");
    let nuevoSpan = document.createElement("span");
    nuevoSpan.classList.add("etiqueta");
    etiquetas.appendChild(nuevoSpan);
}

const construirPerfil = (datos) => {
    return {
        nombre: datos.name,
        usuario: "@" + datos.login,
        email: datos.email || "No disponible",
        ciudad: datos.location || "Sin ubicación",
        avatar: datos.avatar_url,
    }
}