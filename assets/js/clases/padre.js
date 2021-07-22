class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        let _Nombre = nombre;
        let _Edad = edad;
        let _Img = img;
        let _Comentarios = comentarios;
        let _Sonido = sonido;

        this.getNombre = () => _Nombre;
        this.getEdad = () => _Edad;
        this.getImg = () => _Img;
        this.getComentarios = () => _Comentarios;
        this.getSonido = () => _Sonido;
        this.setComentarios = (nuevocomentario) => (_Comentarios = nuevocomentario);

    }

    get Nombre() {
        return this.getNombre();
    }

    get Edad() {
        return this.getEdad();
    }

    get Img() {
        return this.getImg();
    }

    get Comentarios() {
        return this.getComentarios();
    }

    get Sonido() {
        return this.getSonido();
    }

    set Comentarios(nuevoComentarios) {
        return this.setComentarios(nuevoComentarios);
    }
}

export default Animal;