const VendaStatus = {
    INICIADA: 'iniciada',
    CONCLUIDA: 'concluida',
    CANCELADA: 'cancelada',
} as const

let status2: String

status2 = VendaStatus.CONCLUIDA

console.log(status2)
