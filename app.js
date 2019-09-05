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
let axios = require('axios');
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let app = express();

let promesaCategorias = new Promise((resolve, reject) => {
    let url = "https://gist.githubusercontent.com/josejbocanegra/c6c2c82a091b880d0f6062b0a90cce88/raw/abb6016942f7db2797846988b039005c6ea62c2f/categories.json";
    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        console.log("Solicitud del JSON enviada");
        if(req.status == 200){
            console.log("JSON resuelto");
            resolve(req.responseText);
        }
        else {
            reject(req.statusText);
        }
    };
    req.send();
});





function cargarIndex(cllBack) {
    /*fs.readFile("index.html", (err, dataBuffer) => {
        cllBack(dataBuffer);
    });*/

    promesaCategorias.then((resultado) => {
        try{
            console.log("Intentando resolver promesa");

            let categorias = JSON.parse(resultado);
    
            let burgers = categorias[0];
            let tacos = categorias[1];
            let salads = categorias[2];
            let desserts = categorias[3];
            let drinksSides = categorias[4];
    
            
            //ACCEDER A UN PRODUCTO EN PARTICULAR DADA UNA CATEGORIA
            console.log(burgers.products[0]);
            console.log(tacos.products[0]);
            console.log(salads.products[0]);
            console.log(desserts.products[0]);
            console.log(drinksSides.products[0]);
            
            //TEST-------------------------------------------------------------------------
            fs.readFile("index.html", (err, dataBuffer) => {
                cllBack(dataBuffer);
            });
            //-----------------------------------------------------------------------------

        }
        catch(err){
            console.error(err);
        }
    });
}

app.get('/', (req, res) => {
    cargarIndex((dataBuffer) => {
        res.send(dataBuffer.toString());
    });
    console.log("Solicitud a localhost:8081/ resuelta");
});

app.listen(8081, () => {
    console.log("Listening on port 8081!");
});