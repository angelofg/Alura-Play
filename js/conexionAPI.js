async function listarVideos(){
    const conexion = await fetch("http://localhost:3001/videos");
    const conexionConvertida = await conexion.json();
    //console.log(conexionConvertida);
    return conexionConvertida;
}

async function enviarVideo(titulo,descripcion,url,imagen){
    const conexion = await fetch("http://localhost:3001/videos",{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })
    });

     /*verificar si la conexión fue exitosa, 
    y en caso contrario, se lanza un nuevo error indicando que no se pudo enviar el video.*/
    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video.")
    }

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function buscarVideos(palabraClave){
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}   

export const conexionAPI = {
    listarVideos,
    enviarVideo,
    buscarVideos
}

//listarVideos();