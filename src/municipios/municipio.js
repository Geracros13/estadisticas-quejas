var contenido = document.querySelector('#contenido')
var total = document.querySelector('#total')

function traer() {

    const url = "https://backend-estadisticas-quejas.herokuapp.com/municipio/";

    fetch(url)
        .then(res => res.json())
        .then(datos => {

            tabla(datos)
        })
}

function tabla(datos) {
    

    const longitu = datos.length

    contenido.innerHTML = '';
    total.innerHTML = `Total de quejas por Municipio: ${longitu}`;

    for(let valor of datos){
        
        
        contenido.innerHTML += `
        
        <tr>
            <th scope="row">${ valor.municipioNombre }</th>
            <td>${ valor.Total }</td>
        </tr>
        
        `
    }
}