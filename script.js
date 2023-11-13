/*Questão 1*/

function calcularConta(event) {


    event.preventDefault();
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let operadoresMatematicos = document.getElementById("operadoresMatematicos").value;
    
    if (numero1 !== "" && numero2 !== ""){

        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);

        if (operadoresMatematicos === "adicao") {
            valor = numero1 + numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} + ${numero2} é ${valor}`
        }else if (operadoresMatematicos === "subtracao") {
            valor = numero1 - numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} - ${numero2} é ${valor}`
        }else if (operadoresMatematicos === "divisao") {
            valor = numero1 / numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} / ${numero2} é ${valor}`

        }else if (operadoresMatematicos === "multiplicacao") {
            valor = numero1 * numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} * ${numero2} é ${valor}`
        }
    }else {
        alert("Preencha todos os campos indicados!");
    }
}

/*Questão 2*/

function direcionaSetor(event) {
    
    event.preventDefault();
    let idade = document.getElementById("idade").value;

    if (idade < 14) {
        document.getElementById("fraseIdade"). innerHTML = "Você participará do evento na Área Amarela";
    }else if (idade >= 14 && idade < 18){
        document.getElementById("fraseIdade"). innerHTML = "Você participará do evento na Área Azul";
    }else if (idade >= 18 && idade < 25){
        document.getElementById("fraseIdade"). innerHTML = "Você participará do evento na Área Branca";
    }else if (idade >= 25){
        document.getElementById("fraseIdade"). innerHTML = "Você participará do evento na Área Verde";
    }

}

/*Questão 3*/

function contaOperadores(event) {

    event.preventDefault();
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);

    if ((n1 >= 1 && n1 <= 20) && (n2 >= 1 && n2 <= 20)) {

        soma = n1 + n2;
        document.getElementById("fraseSoma"). innerHTML = `- A soma de ${n1} e ${n2} é igual a ${soma}`;

        subtracao = n1 - n2;
        document.getElementById("fraseSubtracao"). innerHTML = `- A subtração de ${n1} e ${n2} é igual a ${subtracao}`;

        divisao = n1 / n2;
        document.getElementById("FraseDivisao"). innerHTML = `- A divisão de ${n1} e ${n2} é igual a ${divisao}`;

        multiplicacao = n1 * n2;
        document.getElementById("FraseMultiplicacao"). innerHTML = `- A multiplicação de ${n1} e ${n2} é igual a ${multiplicacao}`;
        
        exponenciacao = n1 ** n2;
        document.getElementById("fraseExponenciacao"). innerHTML = `- A exponenciação de ${n1} e ${n2} é igual a ${exponenciacao}`;

        resto = n1 % n2;
        document.getElementById("FraseResto"). innerHTML = `- O resto de ${n1} e ${n2} é igual a ${resto}`;

    }else{
        alert("Insira números entre 1 e 20");
    }

}

/*Questão 4*/

let nome = "Bianca";
let sobrenome = " Barcelos";
let concatenacaoVariaveis = nome + sobrenome;

document.getElementById("fraseConcatenacao"). innerHTML = `A concatenação criada foi meu nome: ${concatenacaoVariaveis}`;