import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(titulo,descripcion,url,imagen){
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descripcion-video">
        <img src="./img/logo.png" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
    </div>`

    return video;
}

async function listarVideos(){

    try{
        const listaAPI = await conexionAPI.listarVideos();
        listaAPI.forEach(element=>lista.appendChild(crearCard(element.titulo,element.descripcion,element.url,element.imagen)));
    }catch{
        lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :( </h2>`;
    }
    
}

listarVideos();