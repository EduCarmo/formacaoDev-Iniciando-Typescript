abstract class Celular {
    ligar() {
        console.log('Em ligação...')
    }

    abstract acessarRedeMovel(): void
}

class Iphone23Pro extends Celular {
    acessarRedeMovel(): void {
        console.log('Iphone23Pro Acessando rede móvel...')
    }
}
class GalaxyS22Ultra extends Celular {
    acessarRedeMovel(): void {
        console.log('GalaxyS22Ultra Acessando rede móvel...')
    }
}

let c1 = new GalaxyS22Ultra()
c1.ligar()
c1.acessarRedeMovel()

c1 = new Iphone23Pro()
c1.ligar()
c1.acessarRedeMovel()

export {}