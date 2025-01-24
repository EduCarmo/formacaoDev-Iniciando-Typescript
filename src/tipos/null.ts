type Usuario = { nome: string, email: string }

const usuarios: Usuario[] = [
    {nome: 'João', email: 'joao@gmail'},
    {nome: 'Maria', email: 'maria@gmail'},
    {nome: 'Pedro', email: 'pedro@gmail'},
]

function buscarPorEmail(email: string): Usuario | null {
    return usuarios.find(u => u.email === email) ?? null
    // const usuario = usuarios.find(u => u.email === email)
    // return usuario ?? null
}

console.log(buscarPorEmail('joao@gmail'))
console.log(buscarPorEmail('maria@gmail'))