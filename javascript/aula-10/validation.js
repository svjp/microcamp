/** Validação dos campos do formulário cadastro */
document.querySelector('#cadastro').addEventListener('submit', function(event) {
	var input = document.querySelectorAll('input'),
	    criterios = {
			'nome': new RegExp(/^[A-Za-zà-ú_ ]{3,}$/),
			'email': new RegExp(/^[a-z0-9]{4,}\@[a-z]{4,}\.[a-z]{3,}(\.[a-z]{2,})?$/),
			'data': new RegExp(/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/),
			'cnpj': new RegExp(/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}$/)
		};


	for (var i = 0; i < input.length - 1; i++) {
		for (var propriedade in criterios) {
			if (input[i].name == propriedade && criterios.hasOwnProperty(propriedade)) {
				var element = input[i].parentElement.children[0].localName;
				if (criterios[propriedade].test(input[i].value) === false || input[i].value == '') {
					/** Verifica se já existe um elemento span e não adiciona mais */
					if (element !== 'span') {
						input[i].parentElement.insertAdjacentHTML('afterbegin', '<span>O campo ' + input[i].name + ' é inválido.</span>');
					}

					/** Bloqueia o envio do formulário */
					event.preventDefault();
				} else {
					/** Quando o campo for válido ele só vai remover os elementos "span" */
					if (element == 'span') {
						input[i].parentElement.children[0].remove();
					}
				}
			}
		}
	}

	if (event.defaultPrevented != true) {
		alert('Formulário enviado com sucesso!');
	}

	/**
	 * A validação abaixo seria a versão mais longa e simples da que utilizamos
	 * o operador de loop, simplificamos e tratamos este script evitando a repe-
	 * tição desnecessária de código.
	 */

	/********************
	 * Nome: João Paulo *
	 ********************/
	// if (!isNaN(input[0].value) && /^[à-ú]$/.test(input[0].value) || input[0].value == '') {
	// 	alert('Por favor insira um ' + input[0].name + ' válido');
	// 	input[i].style.border = '1px solid red';
	// 	event.preventDefault();
	// } else {
	// 	input[1].style.borderColor = '#a9a9a9';
	// }

	/*********************************
	 * E-mail: meuemail22@server.com *
	 *********************************/
	// if (/^[a-z]{4,}\@[a-z]{4,}\.[a-z]{3,}(\.[a-z]{2,})?$/.test(input[1].value) === false || input[1].value == '') {
	// 	alert('Por favor insira um ' + input[1].name + ' válido');
	// 	input[1].style.border = '1px solid red';
	// 	event.preventDefault();
	// } else {
	// 	input[1].style.borderColor = '#a9a9a9';
	// }

	/****************************
	 * Data: MM/DD/YYYY         *
	 ****************************/
	// if (/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/.test(input[2].value) === false || input[2].value == '') {
	// 	alert('Por favor insira uma ' + input[2].name + ' válido');
	// 	input[2].style.border = '1px solid red';
	// 	event.preventDefault();
	// } else {
	// 	input[2].style.borderColor = '#a9a9a9';
	// }

	/****************************
	 * CNPJ: XX.XXX.XXX/XXXX-XX *
	 ****************************/
	// if (/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}$/.test(input[3].value) === false || input[3].value == '') {
	// 	alert('Por favor insira uma ' + input[3].name + ' válido');
	// 	input[3].style.border = '1px solid red';
	// 	event.preventDefault();
	// } else {
	// 	input[3].style.borderColor = '#a9a9a9';
	// }
});