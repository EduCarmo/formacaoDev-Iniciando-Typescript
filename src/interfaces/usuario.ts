interface Usuario {
    id?: number
    nome: string
    email: string
    senha?: string
}

const usuarioLogado: Usuario = {
    id: 123,
    nome: 'João',
    email: 'joao@gmail',
    senha: '123456'
}

console.log(usuarioLogado.id)
console.log(usuarioLogado.nome)
console.log(usuarioLogado.email)
console.log(usuarioLogado.senha)

const usuarioOpcional: Partial<Usuario> = {
    id: 12,
    nome: 'Eduardo',
    senha: '654231'
}


console.log('-------------------------')
console.log(usuarioOpcional.id)
console.log(usuarioOpcional.nome)
console.log(usuarioOpcional.senha)


const usuarioCompleto: Required<Usuario> = {
    id: 1,
    nome: 'Maria',
    email: 'Maria@gmail',
    senha: '987654'
}

console.log('-------------------------')
console.log(usuarioCompleto.id)
console.log(usuarioCompleto.nome)
console.log(usuarioCompleto.email)
console.log(usuarioCompleto.senha)
export {}