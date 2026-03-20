// Sección A: Arreglo de Habilidades
const habilidades = ["Dibujar", "Videojuegos", "Cantar", "Programación", "Piano"];

// Sección B: Función que renderiza etiquetas
const mostrarEtiquetas = (lista) => {
    const contenedorEtiquetas = document.querySelector("#etiquetas");

    lista.forEach((habilidad) => {
        let nuevoSpan = document.createElement("span");
        nuevoSpan.classList.add("etiqueta");
        nuevoSpan.textContent = habilidad;
        contenedorEtiquetas.appendChild(nuevoSpan);
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
    let contenedor = document.getElementById("contenedor");

    let _div = document.createElement("div");
    _div.style.width = "100px";
    _div.style.height = "100px";
    _div.style.backgroundColor = "lightGreen";
    _div.style.padding = "10px";
    contenedor.appendChild(_div);

    let _img = document.createElement("img");
    _img.src = perfil.avatar_url;
    _img.width = "20px";
    _img.height = "20px";
    _div.appendChild(_img);

    let _h1 = document.createElement("h1");
    _h1.innerText = perfil.nombre;
    _div.appendChild(_h1);

    let _h2 = document.createElement("h2");
    _h1.innerText = perfil.usuario;
    _div.appendChild(_h2);

    let _h3 = document.createElement("h3");
    _h1.innerText = perfil.email;
    _div.appendChild(_h3);

    let _h4 = document.createElement("h3");
    _h1.innerText = perfil.ciudad;
    _div.appendChild(_h4);

}

// Sección E: Fetch API
async function cargarUsuarios() {
    let mensaje = document.createElement("p");
    mensaje.textContent = "Cargando...";

    try {
        document.body.appendChild(mensaje);
        let users = await fetch("https://api.github.com/users");
        let userData = await users.json();

        let nuevoDiv = document.createElement("div");
        nuevoDiv.style.width = "100vw";
        nuevoDiv.style.width = "100vh";
        nuevoDiv.style.backgroundColor = "lightBlue";
        nuevoDiv.style.padding = "16px";
        nuevoDiv.id = "contenedor";
        document.body.appendChild(nuevoDiv);

        userData.forEach((_usuario) => {
            construirPerfil(_usuario);
            renderizarPerfil(_usuario);
        });

        mensaje.textContent = "";
    } catch (error) {
        mensaje.textContent = "Error al cargar usuario."
        console.error(error);
    }
}

// Sección F: Conectar el botón
let button = document.createElement("button");
button.innerText = "Cargar Usuarios";
button.style.width = "250px";
button.style.height = "100px";
button.addEventListener("click", () => { cargarUsuarios(); });
document.body.appendChild(button);