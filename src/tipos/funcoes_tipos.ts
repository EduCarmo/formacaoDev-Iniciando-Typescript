let operacao: (a: number, b: number) => number


function somar(n1: number, n2: number): number {
    return n1 + n2
}

operacao = somar

console.log(operacao(1, 2))

