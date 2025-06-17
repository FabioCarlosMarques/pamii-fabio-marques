interface ModoDeDirecao {
    dirigir(): void;
}

class Esportivo implements ModoDesDirecao {
    dirigir() {
        console.log('Modo Esportivo: Potência máxima');
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
    construtor()
}