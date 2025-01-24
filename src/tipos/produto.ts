// Nome, Preço, Desconto (0-1), Função precoComDesconto

let produto: {
    nome: string,
    preco: number,
    desconto: number,
    precoComDesconto: () => number
}

produto = {
    nome: 'Caneta',
    preco: 15.95,
    desconto: 0.1,
    precoComDesconto() {
        return this.preco * (1 - this.desconto)
    }
}

console.log('Nome:', produto.nome)
console.log('Preço:', produto.preco)
console.log('Desconto:', produto.desconto)
console.log('Preço com desconto:', produto.precoComDesconto())
