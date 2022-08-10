<h1 style="color: #06080a; background-image: linear-gradient(to right, white,#2c4a66); padding-top: 20px; margin-top:0;">Cálculo</h1>

**Cálculo** é um código desenvolvido em JS para a realização de cálculos matemáticos, incluindo as quatro operações fundamentais, fatoração, báskara entre outras que serão implementadas posteriomente.

**Somente a parte lógica:** Cálculo se limita a parte lógica não possuindo um desing ou front para visualização com exessão da função de teste. O objetivo é torna-lo solto para ser facilmente implementado nos mais diversos projetos, sejam para criação de calculadora para aqueles que se dedicam a parte visual e precisam da lógica pronta com fácil manuseio ou para otimizar e reciclar código. 

---
## Como Usar
Em modo geral, tem duas variáveis terem seu valor alterado. São elas:
1.      let operador = '' // string
    * Responsável por escolher a operação a ser executada. 
    * Recebe como valor uma string em lowCase(tudo em minúsculo) contendo a operação desejada. Exemplo:

            operador = 'somar'
    * Os valores aceitos são: _somar; dividir; subtrair; multiplicar; fatorar; raizQuadrada; baskara._
2.      let vInpt = [] //array
    * Responsável por amarzenar os valores a serem trabalhados.
    * armazena o resultado da operação anterior para que seja utilizado na próxima operação.
    * Usa a ordem index do array para realizar a operação. Exemplo:

            operador = 'somar'
            vInpt = [10,5,25] // Soma o primeiro com o segundo, o resultado com o terceiro...
            console.log(iniciar(operador))
            // resultado == 40
Para iniciar deve-se chamar a função "_iniciar_" passando a variável "_operador_" como parâmetro.
    
    iniciar(operador)
Precisando zerar tudo? Chame a função "_zerar_" sem precisar nunhum parâmetro

    zerar()

[IMAGEM--comandos.png]

---

# ==<> Planejamento Calculadora <>==
* Toda vez que apertar no botão de um operador, alterar valor da variável 'operador'.
* Quando apertar botão "=" ou referente a um operador direfente do atual, disparar função com switch contendo todas as operações e escolhe qual será executada.
* Guardar resultado em uma variável para as próximas operações
* Printar na tela o resultado.
* Botão de zerar tudo.

## ------------------  mecânica da calculadora  ------------------
### operações simples

#### Quando digitado um valor no input 
* Será digitado o valor do inpt.
* Quando selecionado um operador 
    1. Dispara função que verifica se o operador escolhido é o mesmo do atual e altera valor da variável 'operador' caso necessário.
    2. dar 'push' no valor atual do input para o array 'vInpt'
    3. zera valor atual do input

#### Se o operador escolhido for o mesmo do atual:
*    [2,3]

#### Se o operador escolhido for diferente do atual:
4. Executa a operação, envia o resultado para a variável 'operacaoAnterior' e [3]
#### Quando selecionado 'resultado' ou tecla "Enter"
*   [4]

---
### Operações especiais
### Fórmula de baskara
* Selecionar valor de "a", "b" e "c".
* Ao precionar tecla "Enter"
    * ler valor das variáveis.
    6. Executa função e [3].
___
# bugs encontrados:
Deixarei aqui listado os bugs que forem sendo encontrado para caso você se sentir motivado a ajudar, poder colaborar com esse projeto.
* divisão([0,0,(Número !== 0)]) == NAN (RESOLVIDO)
* fatoração: recebe valor vazio de outras operações (RESOLVIDO)
<footer style="text-align: center;">Feito por Ysh-rael com <em>mó</em> carinho para você!</footer>
