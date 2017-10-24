/** Utilizando Expressões Regulares para validar CEP */
var validacaoCEP = function validacaoCEP(value) {
  var criterios = new RegExp(/^[0-9]{5}\-[0-9]{3}$/);
  return criterios.test(value);
};

/** Utilizando Expressões Regulares para validar CEP */
var validacaoCPF = function validacaoCPF(value) {
  var criterios = new RegExp(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/);
  return criterios.test(value);
};

/** Acionando um evento no botão #enviar para ativar ambas funções validacaoCPF() e validacaoCEP() */
document.querySelector('#enviar').addEventListener('click', function() {
  var cep = document.querySelector('input[name="cep"]').value,
    cpf = document.querySelector('input[name="cpf"]').value;

  if (validacaoCPF(cpf) && validacaoCEP(cep)) {
    console.log('CEP e CPF Válidos');
  } else {
    console.log('CEP e CPF Inválidos');
  }
});