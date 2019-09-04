/*
Pablo Suárez - 201632293

Desarrollar una aplicación en Node.js que incluya los módulos File System, Express, y axios.

Requerimientos:
- Obtener, mediante promesas (usando el módulo de axios), un archivo JSON. Este archivo 
  contiene los datos correspondientes a un conjunto de productos ofrecidos por un restaurante.

- Modificar el contenido de una página web (usando el módulo fs) para incluir los datos del
  JSON. En concreto se requiere usar un compnente Accordion de Bootstrap para agrupar las
  categorias de los productos (por ejemplo, hamburguesas, ensaldas, etc). Como contenido del
  Accordion se debe incluir un componente Card que contenga la imagen del producto, su nombre,
  el precio, la descripción y un botón para agregar al carro de compras.

- Correr en un servidor web que escuche peticiones en el puerto 8081.

Subir a la actividad de SICUA la url de su repositorio en GitHub. Recuerde que no debe subir el
contenido de la carpeta node_modules
*/

let fs = require('fs');
let express = require('express');

let app = express();

function cargarIndex(cllBack) {
    fs.readFile("index.html", (err, dataBuffer) => {
        cllBack(dataBuffer);
    });
}

app.get('/', (req, res) => {
    cargarIndex((dataBuffer) => {
        res.send(dataBuffer.toString());
    });
});

app.get('/burguers', (req, res) => {
    //Load burguers.json and send data
});

app.listen(8081, () => {
    console.log("Listening on port 8081!");
});