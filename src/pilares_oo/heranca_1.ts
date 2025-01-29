interface Entidade {
    id: string
}

interface Vendavel {
    preco: number
    desconto: number
}

interface EntidadeComDatas extends Entidade {
    criadoEm: Date
    atualizadoEm: Date
    excluidoEm?: Date
}

interface Usuario extends EntidadeComDatas {
    nome: string
    email: string
    senha?: string
}

interface Produto extends Vendavel, EntidadeComDatas {
    
}


const u1: Usuario = {
    id: '123',
    nome: 'João',
    email: 'joao@gmail',
    criadoEm: new Date(),
    atualizadoEm: new Date()

}

const p1: Produto = {
    id: '123',
    preco: 20,
    desconto: 0.1,
    criadoEm: new Date(),
    atualizadoEm: new Date()
}

console.log(u1)
console.log(p1)

export {}