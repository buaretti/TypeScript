let cachorro: string[] = ["pinscher", "pit bull", "vira lata", "bull dog"];
console.log(cachorro);

class Carro {
    preco: number[] = [14.000, 500.000, 100.000];
    ano: number[] = [2000, 2020, 2018];
    modelo: string[] = ['corsa', 'porsche', 'jetta'];
    
    getPreco(): number[] {
        return this.preco;
    }
    
    getAno(): number[] {
        return this.ano;
    }
    
    getModelo(): string[] {
        return this.modelo;
    }
}

const meuCarro = new Carro();
console.log(meuCarro.getModelo(), meuCarro.getAno(), meuCarro.getPreco());
