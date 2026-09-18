let numero = 0; 

const contador = document.querySelector(".contador");

const botaoMais = document.querySelector(".btn-mais");
const botaoMenos = document.querySelector(".btn-menos");

const botaoDividir = document.querySelector(".btn-divi");
const botaoMultiplicar = document.querySelector(".btn-mult");

const botaoLimpar = document.querySelector(".btn-limpar");

botaoMais.addEventListener("click" , () => {
    numero = numero + 1;

    contador.textContent = numero; 
});


botaoMenos.addEventListener("click" , () => {
    if (numero > 0) {
        numero = numero - 1;
    } else {
        alert("O contador serve apenas pra numeros positivos!")
    }

    contador.textContent = numero;
})


botaoDividir.addEventListener("click" , () => {
    numero = Number((numero / 2).toFixed(2));

    contador.textContent = numero; 
})

botaoMultiplicar.addEventListener("click" , () => {
    numero = numero * 2;

    contador.textContent = numero; 
})

botaoLimpar.addEventListener("click" , () => {
    numero = 0;

    contador.textContent = numero;
})

