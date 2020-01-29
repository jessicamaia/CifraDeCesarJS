// Declaração das variáveis.
let palavra;
let chave;
let processo;

//É solicitado ao usuário que digite o processo desejado.
processo = (prompt('Por favor, insira o processo desejado: criptografia ou descriptografia.', ''));
//Todas as letras da palavra digitada tornam-se maiúsculas.
processo.toLocaleUpperCase();

//Caso a palavra digitada corresponda ao processo criptografia será solicitado a palavra e a chave.
if (processo.toLocaleUpperCase()=='CRIPTOGRAFIA') {
  chave = parseInt(prompt('Por favor, insira a chave:', ''));
  palavra = (prompt('Por favor, insira a frase que será criptografada:', ''));
  
  //Chamada da função.
  criptografar();

  //Função de Criptografia
  function criptografar() {
    var vet = [];
    var crip = '';

    //Percorro por toda a palavra digitada.
    for (var a = 0; a < palavra.length; a++) {

      //Verifico se há letras maiúsculas na palavra, considerando a tabela ASCII , onde A é 65 e Z 90.
      if (palavra[a].charCodeAt() > 64 && palavra[a].charCodeAt() < 91) {

        //Verifico se quando somado a chave o número é maior que 90, ou seja "passaria de Z", nesse caso preciso subtrair 26.
        if ((palavra[a].charCodeAt() + chave) > 90) {
          vet.push((palavra[a].charCodeAt() + chave) - 26);
        } else {
          //Se for menor ou igual a 90, basta apenas somar com a chave.
          vet.push(palavra[a].charCodeAt() + chave);
        }

      } // Mesma lógica faria com as letras minúsculas.
       else if (palavra[a].charCodeAt() > 96 && palavra[a].charCodeAt() < 123) {
        if ((palavra[a].charCodeAt() + chave) > 122) {
          vet.push((palavra[a].charCodeAt() + chave) - 26);
        } else {
          vet.push(palavra[a].charCodeAt() + chave);
        }
      } else
        vet.push(palavra[a].charCodeAt());
    }

    for (var i = 0; i < vet.length; i++) {
      crip += String.fromCodePoint(vet[i]);
      console.log(crip);
    }
    document.write(crip);
  }
} else if (processo.toLocaleUpperCase()=='DESCRIPTOGRAFIA'){
  chave = (prompt('Por favor, insira a chave:',''));
  palavra = (prompt('Por favor, insira a frase que será descriptografada:',''));
 
  //A lógica utilizada é a mesma da criptografia.
  descriptografar();

  function descriptografar() {
    var vet = [];
    var descrip = '';

    for (var a = 0; a < palavra.length; a++) {
      if (palavra[a].charCodeAt() > 64 && palavra[a].charCodeAt() < 91) {
        if ((palavra[a].charCodeAt() - chave) < 65) {
          vet.push((palavra[a].charCodeAt() - chave) + 26);
        } else {
          vet.push(palavra[a].charCodeAt() - chave);
        }
      } else if (palavra[a].charCodeAt() > 96 && palavra[a].charCodeAt() < 123) {
        if ((palavra[a].charCodeAt() - chave) < 97) {
          vet.push((palavra[a].charCodeAt() - chave) + 26);
        } else {
          vet.push(palavra[a].charCodeAt() - chave);
        }
      } else
        vet.push(palavra[a].charCodeAt());
    }

    for (var i = 0; i < vet.length; i++) {
      descrip += String.fromCodePoint(vet[i]);
      }
  
    document.write(descrip);
  }
};
