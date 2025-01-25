// Pruduto (id, nome, preco, desconto, precoFinal)

import Validador from "./validador"

class Produto {
    constructor(
        readonly id: number,
        readonly nome: string,
        readonly preco: number,
        readonly desconto: number = 0
    ) {
        Validador.marioQueZero(id, 'Id inválido')
        Validador.tamanhoEntre(nome, 2, 250, 'Nome inválido')
        Validador.marioQueZero(preco, 'Preço inválido')
        Validador.entre(desconto, 0, 0.8, 'Desconto inválido')
    }

    get precoComDesconto(): number {
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto(1, 'Caneta', 1.99, 0.1)
console.log(`Nome do produto: ${p1.nome} custa ${p1.precoComDesconto} com desconto`)
const p2 = new Produto(2, 'Notebook', 2999.99, 0.25)
console.log(`Nome do produto: ${p2.nome} custa ${p2.precoComDesconto} com desconto`)

console.log(Validador.ERRO_DESCONHECIDO)
