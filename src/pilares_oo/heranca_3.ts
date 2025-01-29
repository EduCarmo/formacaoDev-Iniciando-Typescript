interface Usuario {
    id: number
    nome: string
    email: string
    senha?: string
}

interface CasoDeUso {
    executar(entrada: any): any
}

class RegistrarUsuario implements CasoDeUso {
    executar(usuario: Usuario) {
        console.log('Executando registrar usuário')
    }
}

const casoDeUso: CasoDeUso = new RegistrarUsuario()
const u1: Usuario = {
    id: 1,
    nome: 'João',
    email: 'joao@gmail'
}

console.log(u1)
casoDeUso.executar(u1)
console.log('------------------------')

export {}