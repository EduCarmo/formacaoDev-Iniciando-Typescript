interface OperacaoMatematicaObj {
    fn: (n1: number, n2: number) => number
}

const somaObj: OperacaoMatematicaObj = {
    fn(n1, n2) {
        return n1 + n2
    }
}

console.log(somaObj.fn(1, 2))

interface OperacaoMatematica {
    (n1: number, n2: number): number
}

const soma: OperacaoMatematica = (a, b) => a + b
const subtracao: OperacaoMatematica = (a, b) => a - b
const multiplicacao: OperacaoMatematica = (a, b) => a * b
const divisao: OperacaoMatematica = (a, b) => a / b

console.log(soma(1, 2))
console.log(subtracao(1, 2))
console.log(multiplicacao(1, 2))
console.log(divisao(1, 2))



