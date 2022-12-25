//seleccionador
let seleccionar = document.querySelector('#seleccion');
//nombres de los productos
let parra1 = document.querySelector('#nomproducto1');
let parra2 = document.querySelector('#nomproducto2');
let parra3 = document.querySelector('#nomproducto3');
let parra4 = document.querySelector('#nomproducto4');
let parra5 = document.querySelector('#nomproducto5');
let parra6 = document.querySelector('#nomproducto6');
let parra7 = document.querySelector('#nomproducto7');
//precios de los productos
let precio1 = document.querySelector('#precio1');
let precio2 = document.querySelector('#precio2');
let precio3 = document.querySelector('#precio3');
let precio4 = document.querySelector('#precio4');
let precio5 = document.querySelector('#precio5');
let precio6 = document.querySelector('#precio6');
let precio7 = document.querySelector('#precio7');
//imagenes
let imagen1 = document.querySelector('#imagen1');
let imagen2 = document.querySelector('#imagen2');
let imagen3 = document.querySelector('#imagen3');
let imagen4 = document.querySelector('#imagen4');
let imagen5 = document.querySelector('#imagen5');
let imagen6 = document.querySelector('#imagen6');
let imagen7 = document.querySelector('#imagen7');

//evento
seleccionar.addEventListener('change', InformacionProductos);

function InformacionProductos(){
    let eleccion = seleccionar.value
    parra1,parra2,precio1,precio2.textContent = '';
    if( eleccion ==='seleccionar'){
        parra1.textContent =' ';
        parra2.textContent =' ';
        parra3.textContent='';
        parra4.textContent='';
        parra5.textContent='';
        parra6.textContent='';
        parra7.textContent='';
        precio1.textContent =' ';
        precio2.textContent =' ';
        precio3.textContent = ' '; 
        precio4.textContent = ' '; 
        precio5.textContent = ' '; 
        precio6.textContent = ' '; 
        precio7.textContent = ' ';
        imagen1.innerHTML= ' ';
        imagen2.innerHTML= ' ';
        imagen3.innerHTML= ' ';
        imagen4.innerHTML= ' ';
        imagen5.innerHTML= ' ';
        imagen6.innerHTML= ' ';
        imagen7.innerHTML=' '; 
    }
    //limpieza
    else if(eleccion ==='l'){
        parra1.innerHTML = 'Lavandina';
        parra2.innerHTML = 'Jabon tocador';
        parra3.textContent='Jabon blanco';
        parra4.textContent='Desodorante de piso';
        parra5.textContent='Suavizante';
        parra6.textContent='Alcohol en gel';
        parra7.textContent=' ';
        precio1.innerHTML = '$270.00';
        precio2.innerHTML = '$399.00';
        precio3.textContent = '$200.00'; 
        precio4.textContent = '$400.00'; 
        precio5.textContent = '$390.00'; 
        precio6.textContent = '$280.00'; 
        precio7.textContent = ' ';   
        imagen1.innerHTML= "<img src='imagenesProductos/lavandina.jpg' width='120' height='120'>";
        imagen2.innerHTML= "<img src='imagenesProductos/jabonTocador.jpg' width='120' height='120'>";
        imagen3.innerHTML= "<img src='imagenesProductos/jabonBlanco.jpg' width='120' height='120'>";
        imagen4.innerHTML= "<img src='imagenesProductos/desodoranteDePiso.jpg' width='120' height='120'>";
        imagen5.innerHTML= "<img src='imagenesProductos/suavizante.jpg' width='120' height='120'>";
        imagen6.innerHTML= "<img src='imagenesProductos/alcoholEnGel.jpg' width='120' height='120'>";
        imagen7.innerHTML= '';
    }
    //BEBIDAS
    else if(eleccion ==='b'){
        parra1.textContent = 'Gaseosas 900ml';
        parra2.textContent = 'Jugos';
        parra3.textContent= 'Agua mineral';
        parra4.textContent= 'Bebidas energizantes';
        parra5.textContent= 'Soda sifón';
        parra6.textContent='Gaseosas litro';
        parra7.textContent='Cervezas';
        precio1.innerHTML = 'Precio no disponible';
        precio2.innerHTML = '$370.00';
        precio3.textContent = '$280.00'; 
        precio4.textContent = 'No disponible'; 
        precio5.textContent = '$530.00'; 
        precio6.textContent = '$600.00'; 
        precio7.textContent = '$370.00'; 
        imagen1.innerHTML= "<img src='imagenesProductos/gaseosas 900ml.jpg' width='120' height='120'>";
        imagen2.innerHTML= "<img src='imagenesProductos/jugos.jpg' width='120' height='120'>";
        imagen3.innerHTML= "<img src='imagenesProductos/aguaMineral.jpg' width='120' height='120'>";
        imagen4.innerHTML= "<img src='imagenesProductos/bebidaEnergizante.jpg' width='120' height='120'>";
        imagen5.innerHTML= "<img src='imagenesProductos/sifon soda.jpg' width='120' height='120'>";
        imagen6.innerHTML= "<img src='imagenesProductos/gaseosas 1,5.jpg' width='120' height='120'>";
        imagen7.innerHTML= "<img src='imagenesProductos/cervezas.jpg' width='120' height='120'>";
        
    //DULCES Y GOLOSINAS
    }else if( eleccion ==='dyg'){
        parra1.textContent ='Arcor varios';
        parra2.textContent ='Alfajores';
        parra3.textContent='Bombones';
        parra4.textContent='Chocolates';
        parra5.textContent='Chupetines';
        parra6.textContent='Chicles';
        parra7.textContent='Licoritas';
        precio1.innerHTML = 'Consultar al personal';
        precio2.innerHTML = '$180-$260';
        precio3.textContent = 'No disponible'; 
        precio4.textContent = 'Variable'; 
        precio5.textContent = '$500.00'; 
        precio6.textContent = '$450.00'; 
        precio7.textContent = '$2215.00'; 
        imagen1.innerHTML= "<img src='imagenesProductos/arcorVarios.jpg' width='120' height='120'>";
        imagen2.innerHTML= "<img src='imagenesProductos/alfajores.jpg' width='120' height='120'>";
        imagen3.innerHTML= "<img src='imagenesProductos/bombones.jpg' width='120' height='120'>";
        imagen4.innerHTML= "<img src='imagenesProductos/chocolatesVarios.jpg' width='120' height='120'>";
        imagen5.innerHTML= "<img src='imagenesProductos/chupetines.jpg' width='120' height='120'>";
        imagen6.innerHTML= "<img src='imagenesProductos/chicles.jpg' width='120' height='120'>";
        imagen7.innerHTML= "<img src='imagenesProductos/licoritas.jpg' width='120' height='120'>";
    //JUGUETES      
    }else if( eleccion ==='j'){
        parra1.textContent ='Set de playa';
        parra2.textContent ='Pistolas de agua';
        parra3.textContent='Autos/Camiones';
        parra4.textContent='Set de Barbies';
        parra5.textContent='Yohoo peluches';
        parra6.textContent='Spiners';
        parra7.textContent='Disfrazes';
        precio1.innerHTML = 'Variable';
        precio2.innerHTML = 'Sin stock';
        precio3.textContent = '$700.00'; 
        precio4.textContent = 'Sin stock'; 
        precio5.textContent = '$890.00'; 
        precio6.textContent = '$900.00'; 
        precio7.textContent = 'Variable'; 
        imagen1.innerHTML= "<img src='imagenesProductos/set de playa.jpg' width='120' height='120'>";
        imagen2.innerHTML= "<img src='imagenesProductos/pistolasDeAgua.jpg' width='120' height='120'>";
        imagen3.innerHTML= "<img src='imagenesProductos/autitos.jpg' width='120' height='120'>";
        imagen4.innerHTML= "<img src='imagenesProductos/barbies.jpg' width='120' height='120'>";
        imagen5.innerHTML= "<img src='imagenesProductos/peluches.jpg' width='120' height='120'>";
        imagen6.innerHTML= "<img src='imagenesProductos/spiners.jpg' width='120' height='120'>";
        imagen7.innerHTML= "<img src='imagenesProductos/disfrazes.jpg' width='120' height='120'>";
    //FRIOS Y EMBUTIDOS
    }else if( eleccion ==='fye'){
        parra1.textContent ='Bandeja de picada';
        parra2.textContent ='Queso cremoso';
        parra3.textContent='Jamón';
        parra4.textContent='Paladini Varios';
        parra5.textContent='Fiambres';
        parra6.textContent='Salchichas';
        parra7.textContent='Hamburguesas Paty';
        precio1.innerHTML = '$1250.00';
        precio2.innerHTML = '$50/100gr ';
        precio3.textContent = '$9000.00'; 
        precio4.textContent = 'Consultar al personal'; 
        precio5.textContent = 'Variable'; 
        precio6.textContent = 'Sin stock'; 
        precio7.textContent = '$780.00'; 
        imagen1.innerHTML= "<img src='imagenesProductos/bandejas picadas.jpg' width='120' height='120'>";
        imagen2.innerHTML= "<img src='imagenesProductos/queso cremoso.jpg' width='120' height='120'>";
        imagen3.innerHTML= "<img src='imagenesProductos/jamon.jpg' width='120' height='120'>";
        imagen4.innerHTML= "<img src='imagenesProductos/paladini.jpg' width='120' height='120'>";
        imagen5.innerHTML= "<img src='imagenesProductos/fiambres.jpg' width='120' height='120'>";
        imagen6.innerHTML= "<img src='imagenesProductos/salchichas.jpg' width='120' height='120'>";
        imagen7.innerHTML= "<img src='imagenesProductos/hamburguesas.jpg' width='120' height='120'>";
    //BAZAR
    }else if( eleccion ==='baz'){
        parra1.textContent='Vasos';
        parra2.textContent='Cubiertos';
        parra3.textContent= 'Platos';
        parra4.textContent= 'Utensilios de cocina';
        parra5.textContent= 'Ollas';
        parra6.textContent= '';
        parra7.textContent= ' ';
        precio1.innerHTML ='$400.00 Cada uno ';
        precio2.innerHTML = '$1200.00';
        precio3.textContent = '$12000.00'; 
        precio4.textContent = 'Varian'; 
        precio5.textContent = '$2700.00'; 
        precio6.textContent = ''; 
        precio7.textContent = ' '; 
        imagen1.innerHTML= "<img src='imagenesProductos/vasos.jpg' width='120' height='120'>";
        imagen2.innerHTML= "<img src='imagenesProductos/cubiertos.jpg' width='120' height='120'>";
        imagen3.innerHTML= "<img src='imagenesProductos/platos.jpg' width='120' height='120'>";
        imagen4.innerHTML= "<img src='imagenesProductos/utensilios.jpg' width='120' height='120'>";
        imagen5.innerHTML= "<img src='imagenesProductos/ollas.jpg' width='120' height='120'>";
        imagen6.innerHTML= ' ';
        imagen7.innerHTML= ' ';
    }else if( eleccion ==='Farmacia'){
        parra1.textContent ='Actron ';
        parra2.textContent ='Migral';
        parra3.textContent='Vic Vaporub (Varios)';
        parra4.textContent='Buscapina';
        parra5.textContent='Tafirol migra';
        parra6.textContent='Asperineta';
        parra7.textContent='';
        precio1.textContent ='$90.00/Und';
        precio2.textContent ='$64.00/Und';
        precio3.textContent = '$120.00'; 
        precio4.textContent = '$58.00/Und'; 
        precio5.textContent = '$10.00/Und'; 
        precio6.textContent = 'Sin stock'; 
        precio7.textContent = ' ';
        imagen1.innerHTML= " <img src='imagenesProductos/actron.jpg' width='120' height='120'>";
        imagen2.innerHTML= " <img src='imagenesProductos/migral.jpg' width='120' height='120'>";
        imagen3.innerHTML= " <img src='imagenesProductos/vic vaporub.jpg' width='120' height='120'>";
        imagen4.innerHTML= " <img src='imagenesProductos/buscapina.jpg' width='120' height='120'>";
        imagen5.innerHTML= " <img src='imagenesProductos/tafirolMigra.jpg' width='120' height='120'>";
        imagen6.innerHTML= " <img src='imagenesProductos/asperinetas.jpg' width='120' height='120'>";
        imagen7.innerHTML=' '; 
    }
}





