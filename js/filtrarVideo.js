import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function filtrarVideo(evento){
    evento.preventDefault();
    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);

    const lista = document.querySelector("[data-lista]");
    
    /*
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }*/
    
    lista.replaceChildren();

    busqueda.forEach(elemento=>lista.appendChild(crearCard(elemento.titulo,elemento.descripcion,elemento.url,elemento.imagen)));

    /*verificar el tamaño de la lista de búsqueda y,
    en caso de que sea cero, se muestra un mensaje en el elemento de lista.*/
    if(busqueda.length==0){
        lista.innerHTML = `<h class="mensaje__titulo">No fueron encontrados elementos para ${datosDeBusqueda}</h>`;
    }
    //console.log(busqueda);
}

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click",evento=>filtrarVideo(evento));