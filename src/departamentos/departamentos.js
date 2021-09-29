
function valorSeleccionado(){

    var select = document.getElementById('depart');
    var value = select.options[select.selectedIndex].value;
    console.log(value); // en
    traer(value)
}



function traer(idDepartamento) {

    const url = `https://backend-estadisticas-quejas.herokuapp.com/departamento/${idDepartamento}`;

    fetch(url)
        .then(res => res.json())
        .then(datos => {
            console.log(datos);
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
            <th scope="row">${ valor.comercioNombre }</th>
            <td>${ valor.deptoNombre }</td>
            <td>${ valor.municipioNombre }</td>
            <td>${ valor.quejaFecha}</td>
            <td>${ valor.sucursalDireccion}</td>
            <td>${ valor.quejaDescripcion}</td>
        </tr>
        
        `
    }
}