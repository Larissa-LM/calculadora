
let numero = 0;
let resultado = null; 
let operacao =" " ;

function clickTeclado(num){
    document.getElementById("display").value += num;
    numero = Number(document.getElementById("display").value);

}

function limpar() {
    document.getElementById("display").value =" ";
    numero = 0;
    resultado = 0;
}

function soma(){
    operacao="+";
    if(resultado == null){
      resultado = numero;
    }else {
      resultado += numero; 

    }
    console.log("recebendo resultado" + resultado);
    document.getElementById("display").value = " ";
}

function mostraResultado(){
    console.log(operacao);
    if(operacao == "+"){
        soma();
    }
    document.getElementById("display").value = resultado.toString();
}