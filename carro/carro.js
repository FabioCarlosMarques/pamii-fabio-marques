var Carro = /** @class */ (function () {
    function Carro(marca) {
        this.marca = marca;
    }
    return Carro;
}());
var carro1 = new Carro('Toyota'); // Instância do Carro
var carro2 = new Carro('Honda'); // Outra instância
var carro3 = new Carro('Renault'); // Outra instância
console.log(carro1.marca); // Toyota
console.log(carro2.marca); // Honda
console.log(carro3.marca); // Renault
