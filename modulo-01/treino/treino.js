"use strict";
let cachorro = ["pinscher", "pit bull", "vira lata", "bull dog"];
console.log(cachorro);
class Carro {
    constructor() {
        this.preco = [14.000, 500.000, 100.000];
        this.ano = [2000, 2020, 2018];
        this.modelo = ['corsa', 'porsche', 'jetta'];
    }
    getPreco() {
        return this.preco;
    }
    getAno() {
        return this.ano;
    }
    getModelo() {
        return this.modelo;
    }
}
const meuCarro = new Carro();
console.log(meuCarro.getModelo(), meuCarro.getAno(), meuCarro.getPreco());
