/** Validação dos campos do formulário cadastro */
document.querySelector('#cadastro').addEventListener('submit', function(event) {
	var input = document.querySelectorAll('input');

	for (var i = 0; i < input.length; i++) {
		if (input[i].value == '') {
			alert('Por favor insira o campo ' + input[i].name);
			event.preventDefault();
		}
	}

	/** Verifica se todos os campos são válidos, se sim joga um alert */
	if (event.defaultPrevented != true) {
		alert('Formulário enviado com sucesso!');
	}
});