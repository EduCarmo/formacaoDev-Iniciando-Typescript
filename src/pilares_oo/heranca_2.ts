interface Entidade {
    id: number
}

interface Vendavel {
    nome: string
    preco: number
    desconto: number
}

class Produto implements Entidade, Vendavel {
    constructor(
        public readonly id: number,
        public nome: string,
        public preco: number,
        public desconto: number
    ) {}

    get precoFinal(): number {
        return this.preco * (1 - this.desconto)
    }
}


class Servicos implements Entidade, Vendavel {
    constructor(
        public readonly id: number,
        public nome: string,
        public preco: number,
        public desconto: number
    ) {}
}


const p1 = new Produto(123, 'Caneta', 9.80, 0.05)
console.log(p1)
console.log(p1.precoFinal)


let v1: Vendavel = new Produto(1, 'Caneta', 10, 0)
console.log(v1)

v1 = new Servicos(1, 'Limpeza', 100, 0.1)
console.log(v1)
export { }