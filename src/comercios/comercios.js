
function valorSeleccionado(){

    var select = document.getElementById('comercio');
    var value = select.options[select.selectedIndex].value;

    traer(value)
}



function traer(idComercio) {

    const url = `https://backend-estadisticas-quejas.herokuapp.com/comercio/${idComercio}`;

    fetch(url)
        .then(res => res.json())
        .then(datos => {

            tabla(datos)
        })
}

function tabla(datos) {
    

    const longitu = datos.length

    contenido.innerHTML = '';
    total.innerHTML = `Total de quejas: ${longitu}`;

    for(let valor of datos){
        
        
        contenido.innerHTML += `
        
        <tr>
            <th scope="row">${ valor.deptoNombre }</th>
            <td>${ valor.municipioNombre }</td>
            <td>${ valor.quejaFecha}</td>
            <td>${ valor.sucursalDireccion}</td>
            <td>${ valor.quejaDescripcion}</td>
        </tr>
        
        `
    }
}