const calculo = class {
    err01 = "Não é possível dividir por zero."

    somar = numeros => numeros.reduce((total, n) => total += n)

    subtrair = numeros => numeros.reduce((total, n) => total -= n)

    dividir = numeros => numeros.reduce((total, n) => n !== 0 && total !== this.err01 ? total / n : this.err01)

    multiplicar = numeros => numeros.reduce((total, n) => total *= n)

    raizQuadrada = numero => Math.sqrt(numero)

    potencializar = numeros => {
        if (!numeros[1]) numeros[1] = 2 // torna o 2 o expoente padrão
        return numeros.reduce((base, expoente) => base **= expoente)
    }

    fatorar = (numero) => {
        const numeroSplit = []
        for (let i = numero; i > 1; i--) { numeroSplit.push(i) }
        return this.multiplicar(numeroSplit)
    }

    baskara = (a, b, c) => {
        const delta = b ** 2 - 4 * a * c
        return [`x' = ${(-b + (Math.sqrt(delta))) / (2 * a)}`, `x'' = ${(-b - (Math.sqrt(delta))) / (2 * a)}`]
    }

}
module.exports = { calculo }