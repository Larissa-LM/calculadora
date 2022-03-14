
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

  let listaDeBotoes = document.getElementsByClassName("num");
  for( let i = 0; i < listaDeBotoes.length; i++){

    listaDeBotoes[i].disabled = false;

  }
  document.getElementById("bt-igual").disabled = false;

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
  document.getElementById("display").value = " ";
}

function subtracao() {

  if(resultado == null){
    resultado = numero;
  }else {
    verificarOperacao(); 
  }

  operacao="-";
  //console.log("recebendo resultado" + resultado);
  document.getElementById("display").value = " ";
}

function multiplicacao (){

  if(resultado == null){
    resultado = numero;
  }else {
    verificarOperacao(); 
  }

  operacao="*";
  console.log("recebendo resultado" + resultado);
  document.getElementById("display").value = " ";

}

function divisao(){

  if(resultado == null){
    resultado = numero;
  }else {
    verificarOperacao(); 
  }

  operacao="/";
  console.log("recebendo resultado" + resultado);
  document.getElementById("display").value = " ";

}

function desabilitar(){
  let listaDeBotoes = document.getElementsByClassName("num");
  for( let i = 0; i < listaDeBotoes.length; i++){

    listaDeBotoes[i].disabled = true;

  }
  document.getElementById("bt-igual").disabled = true;
  
}

function mostraResultado(){

  switch(operacao){
    case "+":
      soma();
      break;
    case "-":
      subtracao();
      break;
    case "*":
      multiplicacao();
      break;
    case "/":
      divisao();
      break;
  } 
  document.getElementById("display").value = resultado.toString();

  desabilitar();

}