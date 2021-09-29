var contenido = document.querySelector('#contenido')
var total = document.querySelector('#total')

function traer() {

    const url = "https://backend-estadisticas-quejas.herokuapp.com/region/2";

    fetch(url)
        .then(res => res.json())
        .then(datos => {
            console.log(datos)
            tabla(datos)
        })
}

function tabla(datos) {
    // console.log(datos)

    const longitu = datos.length
    console.log(longitu);

    contenido.innerHTML = '';
    total.innerHTML = `Total de quejas en Region Centro: ${longitu}`;

    for(let valor of datos){
        // console.log(valor.nombre)
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