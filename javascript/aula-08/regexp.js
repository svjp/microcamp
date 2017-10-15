/** Utilizando Expressões Regulares para validar CEP */
var validacaoCEP = function validacaoCEP(value) {
	var criterios = new RegExp(/^[0-9]{5}\-[0-9]{3}$/),
		output = criterios.test(value);

	console.log(output); // 00000-000
};

/** Utilizando Expressões Regulares para validar CEP */
var validacaoCPF = function validacaoCPF(value) {
	var criterios = new RegExp(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/),
		output = criterios.test(value);

	console.log(output); // 000.000.000-00
};

/** Acionando um evento no botão #enviar para ativar ambas funções validacaoCPF() e validacaoCEP() */
document.querySelector('#enviar').addEventListener('click', function() {
	var cep = document.querySelector('input[name="cep"]');
	validacaoCEP(cep.value);
});