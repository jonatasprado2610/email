const prompt = require('prompt-sync')();

function gerarCodigoAleatorio() {
  // Gerar um número aleatório de 6 dígitos
  const numeroAleatorio = Math.floor(Math.random() * 900000) + 100000;
  return numeroAleatorio.toString();
}

function verificarCodigo() {
  const codigoGerado = gerarCodigoAleatorio();
  console.log(codigoGerado);
  const codigoUsuario = prompt('Digite um código de 6 dígitos: ');
   

  if (codigoUsuario === codigoGerado) {
    return 'Parabéns! Você acertou o código.';
  } else {
    return 'Código incorreto.';
  }
}

console.log(verificarCodigo());
