import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearVideo(evento){
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    const descripcion = Math.floor(Math.random*10).toString();

    /*Si se produce algún problema durante la creación del video, 
    se mostrará una alerta con el mensaje de error correspondiente.*/
    try{
        await conexionAPI.enviarVideo(titulo,descripcion,url,imagen);
        window.location.href = "../pages/envio-concluido.html";
    }catch(e){
        alert(e);
    }
}

formulario.addEventListener("submit",evento=>crearVideo(evento));