
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
  resultado = null;
}
function verificarOperacao(){
  switch(operacao){
    case "+":
      resultado += numero;
      break;
    case "-":
      resultado -= numero;
      break;
    case "*":
      resultado *= numero;
      break;
    case "/":
      resultado /= numero;
      break;
  }
}
function soma(){

  if(resultado == null){
    resultado = numero;

  }else {
    verificarOperacao();
  }

  operacao = "+"; 
  //console.log("recebendo resultado" + resultado);
  document.getElementById("display").value = " ";
}

function subtracao() {

  if(resultado == null){
    resultado = numero;
  }else {
    verificarOperacao(); 
  }

  operacao="-";
  console.log("recebendo resultado" + resultado);
  document.getElementById("display").value = " ";
}

function multiplicacao (){}

function divisao(){}
function mostraResultado(){

  console.log(operacao);

  switch(operacao){
    case "+":
      soma();
      break;
    case "-":
      subtracao();
      break;
  } 

  document.getElementById("display").value = resultado.toString();
}