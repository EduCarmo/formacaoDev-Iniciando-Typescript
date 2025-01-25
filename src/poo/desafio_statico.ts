class DesafioEstatico {

    nota: number = 1000

    static executar() {
        // Imprimir o valor de nota no console
        const nota = new DesafioEstatico()
        console.log(nota.nota)
    }
}

DesafioEstatico.executar()