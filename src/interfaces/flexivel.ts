interface Flexivel {
    nome: string
    [atributo: string]: any
}

const f1: Flexivel = {
    nome: 'Teste',
    idade: 20,
    salario: 1234,
    dependentes: [{nome: 'João'}, {nome: 'Maria'}]
}

console.log(f1.nome)
console.log(f1.idade)

export {}