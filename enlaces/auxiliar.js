/*function auxiliar2(){
    alert("Las redes no estan disponibles en este momento..");*/

let seleccionar = document.querySelector('#tdqueja');

seleccionar.addEventListener('change', avion);

function avion(){
    let eleccion = seleccionar.value;
    if(eleccion ==='--'){ 
    document.querySelector('#parrafo1').innerHTML = '';
    document.querySelector('#comentario').innerHTML = '';
    document.querySelector('#tercero').innerHTML = '';
    }else if(eleccion ==='-1'){ 
    document.querySelector('#parrafo1').innerHTML = '<h4 id="titulo1">Problemas frecuentes</h4><br><div id="problemasfr"><button id="serviciopocosatisfactorio" onclick="funcion1()" >Servicio poco satisfactorio</button><br><button id="faltadeinformacion" onclick="funcion2()" >Falta de información</button><br><button id="tiempodeespera"onclick="funcion3()">Tiempo de espera prolongado</button><br><button id="otros" onclick="funcion4()">Otros...</button></div>';
    document.querySelector('#comentario').innerHTML = '';
    document.querySelector('#tercero').innerHTML = '';
    }else if(eleccion ==='-2'){ 
    document.querySelector('#parrafo1').innerHTML = '    <div class="boton" ><button onclick="A()" class="boton1" >No cargan las imagenes</button><br><button onclick="B()"class="boton2"  >Problemas al ingresar</button><br><button onclick="C()" class="boton3" >Los enlaces no funcionan</button><br><button onclick="D()"class="boton4" >Otros...</button><br></br>';
    document.querySelector('#comentario').innerHTML = '';
    document.querySelector('#tercero').innerHTML = '<h5 id="comentario2" >Notifique algun mal funcionamiento de la pagina</h5>';
    }else if(eleccion ==='-3'){ 
    document.querySelector('#parrafo1').innerHTML = '<p id="telefono">Teléfono fijo = 297-5022411</p><br>  ';
    document.querySelector('#comentario').innerHTML = '<div class="redes" ><h4 id="redes" >Redes</h4><br><h5 id="facebook" >Facebook : Frutillita Comercio</h5><br><h5 id="instagram" >Instagram: ComercioFrutillita077</h5></div>';
    document.querySelector('#tercero').innerHTML = '<h5 id="corrreoelectronico" >Correo = <a href="mailto:scolque155@gmail.com">scolque@gmail.com</a></h5>';
    }else if(eleccion === '-4'){
    document.querySelector('#parrafo1').innerHTML = '<textarea name="Escribe tu mensaje" id="texto"> </textarea> ';
    document.querySelector('#comentario').innerHTML ='<h5 id="comentario">Manipule el recuadro según le resulte conveniente</h5>';
    document.querySelector('#tercero').innerHTML = '<div id = "nombredelcliente" ><label>Cliente</label><input id="cuadrodenombre"  type="text"></div> <button id="enviar" onclick = "enviar()">Enviar</button> ';
    }
}
//volver
function volver(){
    document.querySelector('#parrafo1').innerHTML = '<h4 id="titulo1">Problemas frecuentes</h4><br><div id="problemasfr"><button id="serviciopocosatisfactorio" onclick="funcion1()" >Servicio poco satisfactorio</button><br><button id="faltadeinformacion" onclick="funcion2()" >Falta de informacion</button><br><button id="tiempodeespera"  onclick="funcion3()">Tiempo de espera prolongado</button><br><button id="otros" onclick="funcion4()" >Otros...</button></div>';
    document.querySelector('#comentario').innerHTML = '';
    document.querySelector('#tercero').innerHTML = '';
}
//mensaje
function enviar(){
    alert("Su mensaje es importante para nosotros, en breve será respondido...")
}
//Quejas sobre el servicio


//servicio poco satisfactorio
function funcion1(){
    document.querySelector('#parrafo1').innerHTML = '<h2  id="barco">Servicio poco satisfactorio</h2>';
    document.querySelector('#comentario').innerHTML = '';
    document.querySelector('#tercero').innerHTML = '<textarea id="textobarco"></textarea> <button id="botonbarco" onclick="enviar()">Enviar</button> <button id ="botonvolver"onclick = "volver()" >Volver</button>';
}
//falta de informacion
function funcion2(){
    document.querySelector('#parrafo1').innerHTML = '<h2  id="barco">Falta de informacion</h2>';
    document.querySelector('#comentario').innerHTML = '';
    document.querySelector('#tercero').innerHTML = '<textarea id="textobarco"></textarea> <button id="botonbarco" onclick="enviar()">Enviar</button> <button id ="botonvolver"onclick = "volver()" >Volver</button>';
}
//tiempo de espera
function funcion3(){
    document.querySelector('#parrafo1').innerHTML = '<h2  id="barco">Tiempo de espera prolongado</h2>';
    document.querySelector('#comentario').innerHTML = '';
    document.querySelector('#tercero').innerHTML = '<textarea id="textobarco"></textarea> <button id="botonbarco" onclick="enviar()">Enviar</button> <button id ="botonvolver"onclick = "volver()" >Volver</button>';
}
//otro
function funcion4(){
    document.querySelector('#parrafo1').innerHTML = '<div id="client" ><label for="" id="cliente1" >Cliente</label><input type="text" name="" id="cliente1"></div>';
    document.querySelector('#comentario').innerHTML = '<h4 id="comentario1" >Coloque su nombre y describa su queja</h4>';
    document.querySelector('#tercero').innerHTML = '<textarea id="textobarco"></textarea> <button id="botonbarco" onclick="enviar()">Enviar</button> <button id ="botonvolver"onclick = "volver()">Volver</button>';
}
function volver2(){
    document.querySelector('#parrafo1').innerHTML = '    <div class="boton" ><button onclick="A()" class="boton1" >No cargan las imagenes</button><br><button onclick="B()"class="boton2"  >Problemas al ingresar</button><br><button onclick="C()" class="boton3" >Los enlaces no funcionan</button><br><button onclick="D()"class="boton4" >Otros...</button><br></br>';
    document.querySelector('#comentario').innerHTML = '';
    document.querySelector('#tercero').innerHTML = '<h5 id="comentario2" >Notifique algun mal funcionamiento de la página</h5>';
}
function A(){
    alert("Describa su problema y coloque su nombre y un número de telefono en preferencia...")
    document.querySelector('#parrafo1').innerHTML = '<div id="div1" ><label>Cliente</label><input type="text"></div>';
    document.querySelector('#comentario').innerHTML = '';
    document.querySelector('#tercero').innerHTML = '<textarea id="textobarco"></textarea> <button id="botonbarco" onclick="enviarimagenes()">Enviar</button><button id="volver2" onclick="volver2()" >Volver</button>';
}
function enviarimagenes(){
    alert("Por lo general el error en las imagenes se debe a un error de formato, en breve será contactado por alguien del personal...")
} 
function B(){
    alert("Describa su problema y coloque su nombre y un número de telefono en preferencia...")
    document.querySelector('#parrafo1').innerHTML = '<div id="div1" ><label>Cliente</label><input type="text"></div>';
    document.querySelector('#comentario').innerHTML = '';
    document.querySelector('#tercero').innerHTML = '<textarea id="textobarco"></textarea> <button id="botonbarco" onclick="enviaringresar()">Enviar</button><button id="volver2" onclick="volver2()" >Volver</button>';
}
function enviaringresar(){
    alert("Problablemente se deba a un error en el link de ingreso, espere a ser contactado...")
}
function C(){
    alert("Describa su problema y coloque su nombre y un número de telefono en preferencia...")
    document.querySelector('#parrafo1').innerHTML = '<div id="div1" ><label>Cliente</label><input type="text"></div>';
    document.querySelector('#comentario').innerHTML = '';
    document.querySelector('#tercero').innerHTML = '<textarea id="textobarco"></textarea> <button id="botonbarco" onclick="enviarenlases()">Enviar</button><button id="volver2" onclick="volver2()" >Volver</button>';
}
function enviarenlases(){
    alert("Los enlaces serán revisados por nuestro personal, será contactado en breve...")
}
function D(){
    alert("Describa su problema y coloque su nombre y un número de telefono en preferencia...")
    document.querySelector('#parrafo1').innerHTML = '<div id="div1" ><label>Cliente</label><input type="text"></div>';
    document.querySelector('#comentario').innerHTML = '';
    document.querySelector('#tercero').innerHTML = '<textarea id="textobarco"></textarea> <button id="botonbarco" onclick="enviarotros()">Enviarotros</button><button id="volver2" onclick="volver2()" >Volver</button>';
}
function enviarotros(){
    alert("Gracias por su consulta, en breve será contactado...")
}
