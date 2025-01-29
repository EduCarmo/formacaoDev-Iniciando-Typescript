class Carro {
    private velocidadeAtual: number = 0
    protected readonly VELOCIDADE_MAXIMA: number = 200
    
    constructor(public nome: string) {
    }

    get velocidade() {
        return this.velocidadeAtual
    }

    alterarVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta

        if (novaVelocidade >= 0 && novaVelocidade <= this.VELOCIDADE_MAXIMA) {
            this.velocidadeAtual = novaVelocidade
        }else {
            this.velocidadeAtual = delta > 0 ? this.VELOCIDADE_MAXIMA : 0
        }
    }

    acelerar() {
        this.alterarVelocidade(5)
    }
}

const c1 = new Carro('Fusca')
console.log(c1.nome)
c1.alterarVelocidade(50)
c1.acelerar()
c1.acelerar()
c1.acelerar()
console.log(c1.velocidade)


export {}