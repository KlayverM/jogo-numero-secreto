msgInicial();

let listaDeNumeroSorteado = [];
let numAleatorio = gerarNumeroAleatorio();
let numTentativas = 1;


function exibirTextoNaTela(elemento, textoNaTela)
{
   campo = document.querySelector(elemento);
   campo.innerHTML = textoNaTela;
   responsiveVoice.speak(textoNaTela,'Brazilian Portuguese Female', {rate:1.2});
}
function verificarChute()
{
   //IF TERNARIO
   let palavraTentativa = numTentativas > 1 ? 'tentativas': 'tentativa';
   let msgTentativas = `Você descobriu o número secreto com ${numTentativas} ${palavraTentativa}.`;
    
    let chute = document.querySelector('input').value;
    if (chute == numAleatorio)
   {
      exibirTextoNaTela('h1','Acertou!');
      exibirTextoNaTela('p', msgTentativas);
      ativaBotao('reiniciar');
   }
   else {
      if(chute > numAleatorio){
         exibirTextoNaTela('h1','Errou!');
         exibirTextoNaTela('p','O número é menor.')
      } 
      else {
            exibirTextoNaTela('h1','Errou!');
            exibirTextoNaTela('p','O número é maior.')
         }
         numTentativas ++;
         limparCampo();
      }
      
}
function reiniciarJogo(){
   numAleatorio = gerarNumeroAleatorio();
   numTentativas = 1;
   limparCampo();
   msgInicial();
   desativaBotao('reiniciar');
}
function msgInicial(){
   exibirTextoNaTela('h1', 'Qual é o número?');
   exibirTextoNaTela('p', 'Escolha um número de 1 a 100');
}
function ativaBotao(nomBotao){
    let botao = document.getElementById(nomBotao).removeAttribute('disabled');
}
function desativaBotao(nomBotao){
   let botao = document.getElementById(nomBotao).setAttribute('disabled', true);

}
function limparCampo(){
   chute = document.querySelector('input');
   chute.value = '';
}
function gerarNumeroAleatorio()
{
   let numSorteado = parseInt(Math.random() * 100 +1);
   let quantElemListNumSorteado = listaDeNumeroSorteado.length;
   
   if(quantElemListNumSorteado == 100){
      listaDeNumeroSorteado = [];
   }
   //VERIFICA SE O NUMERO SORTEADO ESTA NA LISTA
   if (listaDeNumeroSorteado.includes(numSorteado)){
      return gerarNumeroAleatorio();
   }
   else{
      listaDeNumeroSorteado.push(numSorteado);
      console.log(listaDeNumeroSorteado)
      return numSorteado;
   }

}
console.log(numAleatorio);