var Esportivo = /** @class */ (function () {
    function Esportivo() {
    }
    Esportivo.prototype.dirigir = function () {
        console.log('Modo Esportivo: Potência máxima!');
    };
    return Esportivo;
}());
var Economico = /** @class */ (function () {
    function Economico() {
    }
    Economico.prototype.dirigir = function () {
        console.log('Modo Econômico: Economia de combustível.');
    };
    return Economico;
}());
var offRoad = /** @class */ (function () {
    function offRoad() {
    }
    offRoad.prototype.dirigir = function () {
        console.log('Modo off-road: Preparado para terrenos difíceis.');
    };
    return offRoad;
}());
var Carro = /** @class */ (function () {
    function Carro(modo) {
        this.modo = modo;
    }
    Carro.prototype.setModo = function (modo) {
        this.modo = modo;
    };
    Carro.prototype.dirigir = function () {
        this.modo.dirigir();
    };
    return Carro;
}());
// Uso
var meuCarro = new Carro(new Esportivo());
meuCarro.dirigir();
meuCarro.setModo(new Economico());
meuCarro.dirigir();
meuCarro.setModo(new offRoad());
meuCarro.dirigir();
