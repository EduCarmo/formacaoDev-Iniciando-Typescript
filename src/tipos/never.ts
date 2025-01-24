function falhar(mgs: string): never {
    throw new Error(mgs)
}

falhar('Descrição muito pequena')