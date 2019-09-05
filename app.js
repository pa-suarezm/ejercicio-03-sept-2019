/*
Pablo Suárez - 201632293
*/

let fs = require('fs');
let express = require('express');
let axios = require('axios');

let app = express();

function cargarIndex(cllBack) {
    axios.get('https://gist.githubusercontent.com/josejbocanegra/c6c2c82a091b880d0f6062b0a90cce88/raw/abb6016942f7db2797846988b039005c6ea62c2f/categories.json')
        .then(function (response) {
            try{
                console.log("Intentando resolver promesa");

                //console.log(resultado);

                let categorias = response.data;
        
                console.log(categorias);

                let burgers = categorias[0];
                let tacos = categorias[1];
                let salads = categorias[2];
                let desserts = categorias[3];
                let drinksSides = categorias[4];
                
                //-------------------------------------------------------------------------
                //index.html

                //Primera parte
                let index = "<!DOCTYPE html>";
                index += "<html lang=\"en\">";
                index += "<head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">";
                index += "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">";
                index += "<title>Restaurant</title></head>";
                index += "<body>";
                index += "<div id=\"accordion\">";
                index += "<div class=\"card\"><div class=\"card-header\"><a class=\"card-link\" data-toggle=\"collapse\" href=\"#collapseOne\">Burgers</a></div>";
                index += "<div id=\"collapseOne\" class=\"collapse\" data-parent=\"#accordion\"><div class=\"card-body\">";

                //Agregar todas las hamburguesas
                for(let burger of burgers.products){
                    index += "<div class=\"card\" style=\"width: 18rem;\">";
                    index += "    <img src=\"" + burger.image + "\" class=\"card-img-top\" alt=\"" + burger.name + "\">";
                    index += "    <div class=\"card-body\">";
                    index += "        <h5 class=\"card-title\">" + burger.name + " [$" + burger.price + "]</h5>";
                    index += "        <p class=\"card-text\">" + burger.description + "</p>";
                    index += "        <a href=\"#\" class=\"btn btn-primary\">Add to cart</a>";
                    index += "    </div>";
                    index += "</div>";
                }

                //Lo que va entre las hamrbuguesas y los tacos
                index += "</div></div></div>";
                index += "<div class=\"card\">";
                index += "      <div class=\"card-header\">";
                index += "        <a class=\"collapsed card-link\" data-toggle=\"collapse\" href=\"#collapseTwo\">";
                index += "          Tacos</a></div>";
                index += "      <div id=\"collapseTwo\" class=\"collapse\" data-parent=\"#accordion\">";
                index += "        <div class=\"card-body\">";

                //Agregar todos los tacos
                for(let taco of tacos.products){
                    index += "<div class=\"card\" style=\"width: 18rem;\">";
                    index += "    <img src=\"" + taco.image + "\" class=\"card-img-top\" alt=\"" + taco.name + "\">";
                    index += "    <div class=\"card-body\">";
                    index += "        <h5 class=\"card-title\">" + taco.name + " [$" + taco.price + "]</h5>";
                    index += "        <p class=\"card-text\">" + taco.description + "</p>";
                    index += "        <a href=\"#\" class=\"btn btn-primary\">Add to cart</a>";
                    index += "    </div>";
                    index += "</div>";
                }

                //Lo que va entre los tacos y los postres
                index += "</div></div></div>";
                index += "<div class=\"card\">";
                index += "        <div class=\"card-header\">";
                index += "            <a class=\"collapsed card-link\" data-toggle=\"collapse\" href=\"#collapseThree\">";
                index += "                Desserts</a></div>";
                index += "        <div id=\"collapseThree\" class=\"collapse\" data-parent=\"#accordion\">";
                index += "            <div class=\"card-body\"></div>";

                //Agregar todos los postres
                for(let dessert of desserts.products){
                    index += "<div class=\"card\" style=\"width: 18rem;\">";
                    index += "    <img src=\"" + dessert.image + "\" class=\"card-img-top\" alt=\"" + dessert.name + "\">";
                    index += "    <div class=\"card-body\">";
                    index += "        <h5 class=\"card-title\">" + dessert.name + " [$" + dessert.price + "]</h5>";
                    index += "        <p class=\"card-text\">" + dessert.description + "</p>";
                    index += "        <a href=\"#\" class=\"btn btn-primary\">Add to cart</a>";
                    index += "    </div>";
                    index += "</div>";
                }

                //Lo que va entre los postres y las bebidas
                index += "</div></div></div>";
                index += "<div class=\"card\">";
                index += "        <div class=\"card-header\">";
                index += "            <a class=\"collapsed card-link\" data-toggle=\"collapse\" href=\"#collapseFour\">";
                index += "                Drinks and Sides</a></div>";
                index += "        <div id=\"collapseFour\" class=\"collapse\" data-parent=\"#accordion\">";
                index += "            <div class=\"card-body\"></div>";

                //Agregar todas las bebidas
                for(let drinkSide of drinksSides.products){
                    index += "<div class=\"card\" style=\"width: 18rem;\">";
                    index += "    <img src=\"" + drinkSide.image + "\" class=\"card-img-top\" alt=\"" + drinkSide.name + "\">";
                    index += "    <div class=\"card-body\">";
                    index += "        <h5 class=\"card-title\">" + drinkSide.name + " [$" + drinkSide.price + "]</h5>";
                    index += "        <p class=\"card-text\">" + drinkSide.description + "</p>";
                    index += "        <a href=\"#\" class=\"btn btn-primary\">Add to cart</a>";
                    index += "    </div>";
                    index += "</div>";
                }

                //Lo que va entre las bebidas y las ensaladas
                index += "</div></div></div>";
                index += "<div class=\"card\">";
                index += "            <div class=\"card-header\">";
                index += "                <a class=\"collapsed card-link\" data-toggle=\"collapse\" href=\"#collapseFive\">";
                index += "                    Salads</a></div>";
                index += "            <div id=\"collapseFive\" class=\"collapse\" data-parent=\"#accordion\">";
                index += "                <div class=\"card-body\"></div>";

                //Agregar todas las ensaladas
                for(let salad of salads.products){
                    index += "<div class=\"card\" style=\"width: 18rem;\">";
                    index += "    <img src=\"" + salad.image + "\" class=\"card-img-top\" alt=\"" + salad.name + "\">";
                    index += "    <div class=\"card-body\">";
                    index += "        <h5 class=\"card-title\">" + salad.name + " [$" + salad.price + "]</h5>";
                    index += "        <p class=\"card-text\">" + salad.description + "</p>";
                    index += "        <a href=\"#\" class=\"btn btn-primary\">Add to cart</a>";
                    index += "    </div>";
                    index += "</div>";
                }

                //Lo que va después de todo
                index += "</div></div></div></div>";
                index += "<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>";
                index += "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>";
                index += "<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>";
                index += "</body></html>";

                //-------------------------------------------------------------------------

                fs.writeFile("index.html", index, (err) => {
                    //fs.writeFile's callback function
                    console.log("index.html escrito correctamente");
                    fs.readFile("index.html", (err, dataBuffer) => {
                        cllBack(dataBuffer);
                    });
                });
            }
            catch(err){
                console.error(err);
            }
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
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