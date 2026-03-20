// Sección A: Arreglo de Habilidades
const habilidades = ["Dibujar", "Videojuegos", "Cantar", "Programación", "Piano"];

// Sección B: Función que renderiza etiquetas
const mostrarEtiquetas = (lista) => {
    const contenedorEtiquetas = document.querySelector("#etiquetas");

    lista.forEach((habilidad) => {
        let nuevoSpan = document.createElement("span");
        nuevoSpan.classList.add("etiqueta");
        etiquetas.appendChild(nuevoSpan);
    });
}

// Sección C: Función que construye un objeto de perfil
const construirPerfil = (datos) => {
    return {
        nombre: datos.name,
        usuario: "@" + datos.login,
        email: datos.email || "No disponible",
        ciudad: datos.location || "Sin ubicación",
        avatar: datos.avatar_url,
    }
}

// Sección D: Función que actualiza el DOM
const renderizarPerfil = (perfil) => {
    document.querySelector("#nombre").textContent = perfil.nombre;
    document.querySelector("#usuario").textContent = perfil.usuario;
    document.querySelector("#email").textContent = perfil.email;
    document.querySelector("#ciudad").textContent = perfil.ciudad;
    document.querySelector("#avatar").src = perfil.avatar;
}

// Sección E: Fetch API
async function cargarUsuarios() {
    let mensaje = document.querySelector("#mensaje");
    mensaje.textContent = "Cargando...";

    try {
        let users = await fetch("https://api.github.com/users");
        let userData = await users.json();

        let perfil = construirPerfil(userData);
        renderizarPerfil(perfil);
        mostrarEtiquetas(habilidades);

        mensaje.textContent = "";
    } catch (error) {
        mensaje.textContent = "Error al cargar usuario."
        console.error(error);
    }
}