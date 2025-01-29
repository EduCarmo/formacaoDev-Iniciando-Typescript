class Carro {
    private _velocidade: number = 0

    constructor(readonly velocidadeMaxima: number = 200) {

    }

    get velocidade() {
        return this._velocidade
    }

    acelerar() {
        this.alterarVelocidade(5)
    }

    frear() {
        this.alterarVelocidade(-5)
    }

    protected alterarVelocidade(delta: number) {
        const novaVelocidade = this._velocidade + delta

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this._velocidade = novaVelocidade
        } else {
            this._velocidade = delta > 0 ? this.velocidadeMaxima : 0
        }
    }
}


class Fusca extends Carro {
    constructor() {
        super(165)
    }
}

class Ferrari extends Carro {
    constructor() {
        super(355)
    }

    acelerar(): void {
        this.alterarVelocidade(35)
    }
}



let c1: Carro = new Fusca()

c1.acelerar()
c1.acelerar()
c1.acelerar()

console.log(c1.velocidade)
console.log(c1.velocidadeMaxima)

c1 = new Ferrari()
c1.acelerar()
c1.acelerar()
c1.acelerar()
console.log(c1.velocidade)
console.log(c1.velocidadeMaxima)

export { }