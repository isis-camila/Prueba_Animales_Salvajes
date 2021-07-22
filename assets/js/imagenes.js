import {
    animales
} from "./animales.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/hijo.js";

let boton = document.querySelector("#btnRegistrar");
let selectAnimal = document.querySelector("#animal");

// variable global forzando a guardarla de esa forma (global), para que se vea en el HTML
window.animalesArray = [];

selectAnimal.addEventListener("change", async() => {
    // la funcion animales es autoejecutable; por lo que no se le ponen ()
    let animalArray = await animales;
    animalArray = animalArray.animales;
    console.log(animalArray);
    // console.log(animalArray.animales);

    // Variables de información 
    let nombreAnimal = selectAnimal.value;
    console.log(nombreAnimal);

    let edad = document.querySelector("#edad").value;

    let comentario = document.getElementById("comentarios").value;

    let imagenPreview = document.getElementById("preview");

    // a = parámetro a buscar (león, oso, serpiente, y así). Se detiene cuando a.name (archivo json) === nombreAnimal (Seleccionado)
    // al poner {imagen} se está deconstruyendo la variable. va a devolver sólo la imagen
    const {
        imagen
    } = animalArray.find((a) => a.name === nombreAnimal);
    console.log(imagen);

    // acceder a css
    imagenPreview.style.backgroundImage = `url(/assets/imgs/${imagen})`;
    imagenPreview.style.backgroundSize = "cover";



});


// evento boton
boton.addEventListener("click", async() => {
    let nombreAnimal = document.querySelector("#animal").value;
    let edad = document.querySelector("#edad").value;
    let comentario = document.getElementById("comentarios").value;

    // validacion
    if (!nombreAnimal || !edad || !comentario) {
        // return punto final de la validación. en caso que no se cumpla, saca de la función
        return alert("faltan campos por llenar");
    }


    async function instanciaAnimal(tipoA, edad, comentario) {
        // fetch
        let animalArray = await animales;
        animalArray = animalArray.animales;

        // sacar del json imagen y sonido y guardarlos en variables del mismo nombre
        const {
            imagen,
            sonido
        } = animalArray.find((a) => a.name === nombreAnimal);
        console.log(imagen, sonido);

        switch (tipoA) {
            case "Leon":
                return new Leon(tipoA, edad, imagen, comentario, sonido);

            case "Lobo":
                return new Lobo(tipoA, edad, imagen, comentario, sonido);

            case "Oso":
                return new Oso(tipoA, edad, imagen, comentario, sonido);

            case "Serpiente":
                return new Serpiente(tipoA, edad, imagen, comentario, sonido);

            case "Aguila":
                return new Aguila(tipoA, edad, imagen, comentario, sonido);

            default:
                return `Recuerda seleccionar un animal`;

        }
        console.log(animalArray);
    }
    animalesArray.push(await instanciaAnimal(nombreAnimal, edad, comentario));
    generacionHtml(animalesArray);

});


function generacionHtml(animalArray) {
    // variable vacía
    let htmlAnimales = "";
    // for each itera sobre el arreglo, realizando cada plantilla por animal. Esto es una card, cambiando las variables
    animalesArray.forEach((animal, index) => {
        window.animal = animal;

        // Al apretar tarjeta Leon, ejecuta el método de sonido de cada animal
        const getSonido = () => {
            switch (animal.Nombre) {
                case 'Leon':
                    return `animalesArray[${index}].rugir()`;

                case 'Lobo':
                    return `animalesArray[${index}].aullar()`;

                case 'Oso':
                    return `animalesArray[${index}].grunir()`;

                case 'Serpiente':
                    return `animalesArray[${index}].sisear()`;

                case 'Aguila':
                    return `animalesArray[${index}].chillar()`;

            }

        };

        let plantillaHtml = `
        <div class="col-4">
            <div class="card h-100 w-100">

                <button id="btn-display-modal" data-toggle="modal" data-target="#exampleModal" data-img="/assets/imgs/${animal.Img}" data-edad="${animal.Edad}" data-comentarios="${animal.Comentarios}" class="btn" style="background-image:url(/assets/imgs/${animal.Img})">
                </button>

                <div class="card-footer" style="background-color:#6C757D;">
                    <a onclick="${getSonido()}" class="btn w-100"><i class="fas fa-volume-up text-white"></i>
                    </a>

               </div>

            </div>

        </div>`;
        // a la cadena vacía se le suma cada animal por cada ciclo
        htmlAnimales = htmlAnimales + plantillaHtml;
    });
    // agrega la cadena vacía al row del html
    document.querySelector("#Animales").innerHTML = htmlAnimales;

};

// evento boostrap para modales
$("#exampleModal").on("show.bs.modal", (e) => {
    // console.log("modalAbierto");

    // guarda evento que gatilla en const boton
    const boton = e.relatedTarget;
    console.log(boton);
    // get obtenemos el atributo img
    const img = boton.getAttribute("data-img");
    const edad = boton.getAttribute("data-edad");
    const comentarios = boton.getAttribute("data-comentarios");
    console.log(img);
    // set asignamos en el modal vacío cada dato
    document.querySelector("#modal-img").setAttribute("src", img);
    document.querySelector("#modal-edad").textContent = edad;
    document.querySelector("#modal-comentarios").textContent = comentarios;

});