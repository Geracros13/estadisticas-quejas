var contenido = document.querySelector('#contenido')
var total = document.querySelector('#total')

function traer() {

    const url = "https://backend-estadisticas-quejas.herokuapp.com/region/2";

    fetch(url)
        .then(res => res.json())
        .then(datos => {

            tabla(datos)
        })
}

function tabla(datos) {
    

    const longitu = datos.length

    contenido.innerHTML = '';
    total.innerHTML = `Total de quejas en Region Centro: ${longitu}`;

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