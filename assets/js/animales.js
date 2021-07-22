// función autoejecutable animales
export let animales = (async() => {
    const url = "/animales.json";
    // async entrega una promesa, por eso poner await(con esto obtengo resultado)
    const getData = async() => {
        const res = await fetch(url);
        // convertir a formato json y guardar en dato
        const dato = await res.json();
        // console.log(dato);
        return dato;
    }

    // funcion no autoejecutable, por lo que hay que llamarla con ()
    return await getData();

})();