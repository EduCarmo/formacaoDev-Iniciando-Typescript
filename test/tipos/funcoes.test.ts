import { multiplicar, saudacao } from "../../src/tipos/funcoes"

test('Deve retornar uma saudação baseada na hora atual', () => {
    const s = saudacao('Eduardo')
    expect(s).toBe('Olá, Eduardo! Passar bem')
})

test('Deve multiplicar dois números', () => {
    const resultado = multiplicar(2, 2)
    expect(resultado).toBe(4)
})
