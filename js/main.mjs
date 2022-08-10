import { calculo } from "./operacoes.js"
const calculadora = new calculo
const print = (algo) => console.log(algo)

let operador = 'somar'
let vInpt = [10]
let operacaoAnterior = false

function iniciar(operador) {
    if (operacaoAnterior) vInpt.unshift(operacaoAnterior) // guarda resultado da operação anterior

    switch (operador) {
        case 'somar':
            operacaoAnterior = calculadora.somar(vInpt)
            return operacaoAnterior
            break
        case 'subtrair':
            operacaoAnterior = calculadora.subtrair(vInpt)
            return operacaoAnterior
            break
        case 'multiplicar':
            operacaoAnterior = calculadora.multiplicar(vInpt)
            return operacaoAnterior
            break
        case 'dividir':
            operacaoAnterior = calculadora.dividir(vInpt)
            return operacaoAnterior
            break
        case 'raizQuadrada':
            operacaoAnterior = calculadora.raizQuadrada(vInpt)
            return operacaoAnterior
            break
        case 'potencializar':
            operacaoAnterior = calculadora.potencializar(vInpt)
            return operacaoAnterior
            break
        case 'fatorar':
            operacaoAnterior = calculadora.fatorar(operacaoAnterior)
            return operacaoAnterior
            break
        case 'baskara':
            return calculadora.baskara(vInpt)
            break
        default:
            return "padrão - adicionar algo depois"
            break
    }
}
function zerar() {
    operacaoAnterior = false
    operador = ''
    vInpt = []
}


// --------------------------------- Exemplo: Comandos de execução -------------------------------
zerar()

operador = 'somar'
vInpt = [20,46,33,99,2] //soma o primeiro com o segundo, o segundo com o terceiro e assim por diante

print(iniciar(operador))

operador = 'dividir'
vInpt = [4] // pega o valor da operação anterior e divide por 4

print(iniciar(operador))

operador = 'fatorar' // fatora o resultado da operação anterior

print(iniciar(operador))

/* 
[Running] node "calculo/js/main.mjs"
200
50
3.0414093201713376e+64

[Done] exited with code=0 in 0.057 seconds
 */
