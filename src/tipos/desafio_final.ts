// type ContaCorrente (numero, saldo, movimentar)
// type Cliente (nome, email, constas[])

// lista de clientes = [cliente1, cliente2, cliente3]


type ContaCorrente = {
    numero: number,
    saldo: number,
    movimentar: (valor: number) => void
}

function movimentar(this: ContaCorrente, valor: number) {
    this.saldo += valor
}

type Cliente = {
    nome: string,
    email: string,
    contas: ContaCorrente[]
}

const clientes: Cliente[] = [
    {
        nome: 'Ana',
        email: 'ana@gmail',
        contas: [
            { numero: 1234, saldo: 0, movimentar, },
            { numero: 644, saldo: 35.330, movimentar, },
        ]

    },
    {
        nome: 'Pedro',
        email: 'pedro@gmail',
        contas: [
            { numero: 456, saldo: 30, movimentar, },
            { numero: 644, saldo: 35.330, movimentar, },
        ]
    }
]

function movimentarConta(numConta: number, valor: number) {
    const contas = clientes.map(cli => {
        return cli.contas.find(cc => cc.numero === numConta)
    }).filter(c => c )[0]   
    contas?.movimentar(valor)

}

function consultarSaldo(numConta: number): number | null {
    const contas = clientes.map(cli => {
        return cli.contas.find(cc => cc.numero === numConta)
    }).filter(c => c )[0]   
    return contas?.saldo ?? null

}

movimentarConta(456, 678.90)
console.log(consultarSaldo(456))