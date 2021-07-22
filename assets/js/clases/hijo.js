import Animal from "./padre.js";

let audioPlayer = document.getElementById("player");

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    rugir() {
        var audio = new Audio(`/assets/sounds/${this.Sonido}`);
        audio.play();

    }
};

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    aullar() {
        var audio = new Audio(`/assets/sounds/${this.Sonido}`);
        audio.play();
    }
};

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    grunir() {
        var audio = new Audio(`/assets/sounds/${this.Sonido}`);
        audio.play();
    }
};

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    sisear() {
        var audio = new Audio(`/assets/sounds/${this.Sonido}`);
        audio.play();
    }
};

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    chillar() {
        var audio = new Audio(`/assets/sounds/${this.Sonido}`);
        audio.play();
    }
};

export {
    Leon,
    Lobo,
    Oso,
    Serpiente,
    Aguila
}