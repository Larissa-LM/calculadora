
let numero = 0;
let resultado = null; 
let operacao =" " ;

function clickTeclado(num){
  if(num === "." && document.getElementById("display").value.includes(num)){
        num =" ";
  }else{
    document.getElementById("display").value += num;
  }
  numero = Number(document.getElementById("display").value);

}

function limpar() {
  document.getElementById("display").value =" ";
  numero = 0;
  resultado = null;

  // let listaDeBotoes = document.getElementsByClassName("num");
  // for( let i = 0; i < listaDeBotoes.length; i++){

  //   listaDeBotoes[i].disabled = false;

  // }
  // document.getElementById("bt-igual").disabled = false;

}
function verificarOperacao(){
  switch(operacao){
    case "+":
      console.log("verificaoperacao" + numero);
      resultado += numero;
      console.log("resultado soma" + " " + resultado);
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
  let resultado1 = resultado.toFixed(2).toString();
  return resultado1;
}
function soma(){

  if(resultado == null){
    console.log("null" + resultado);
    resultado = numero;
    console.log("resultado = numero" + resultado);
  }else {
    verificarOperacao();
    console.log("entrou no else verificaroperacao" + resultado);
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

// function desabilitar(){
//   let listaDeBotoes = document.getElementsByClassName("num");
//   for( let i = 0; i < listaDeBotoes.length; i++){

//     listaDeBotoes[i].disabled = true;

//   }
//   document.getElementById("bt-igual").disabled = true;
  
// }

function mostraResultado(){


 document.getElementById("display").value = verificarOperacao();

}