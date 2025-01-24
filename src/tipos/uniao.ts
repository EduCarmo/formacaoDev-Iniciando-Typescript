let nota: number | string = 10
nota = 'A+'
console.log(nota)

type NotaOuConceito = number | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'

let nota2: NotaOuConceito = 10
nota2 = 10
console.log(nota2)

function imprimirNota(nota: NotaOuConceito) {
    if(typeof nota === 'number') {
        console.log(`Nota ${nota}`)
    }else {
        console.log(`Conceito ${nota}`)
    }
}


imprimirNota(nota2)