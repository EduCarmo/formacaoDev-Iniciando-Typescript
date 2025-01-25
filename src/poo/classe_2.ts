class Curso {
    constructor(readonly id: number, public nome?: string) {
        if(id < 1) throw new Error('id inválido')
    }
}

const c1 = new Curso(123)
c1.nome = 'Iniciando com TypeScript'
console.log(`Id: ${c1.id} - Nome: ${c1.nome}`)

const c2 = new Curso(456, 'Avançando com TypeScript')
console.log(`Id ${c2.id} - Nome: ${c2.nome}`)