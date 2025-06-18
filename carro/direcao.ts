interface ModoDeDirecao {
    dirigir(): void;
}

class Esportivo implements ModoDeDirecao {
    dirigir() {
        console.log('Modo Esportivo: Potência máxima!');
    }
}

class Economico implements ModoDeDirecao {
    dirigir() {
        console.log('Modo Econômico: Economia de combustível.');
    }
}

class offRoad implements ModoDeDirecao {
    dirigir() {
        console.log('Modo off-road: Preparado para terrenos difíceis.');
    }
}

class Carro {
    constructor(private modo: ModoDeDirecao) {}

    setModo(modo: ModoDeDirecao) {
      this.modo = modo;
    }

    dirigir() {
        this.modo.dirigir();
    }
}

// Uso
const meuCarro = new Carro(new Esportivo());
meuCarro.dirigir();

meuCarro.setModo(new Economico());
meuCarro.dirigir();

meuCarro.setModo(new offRoad());
meuCarro.dirigir();

