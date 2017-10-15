var popUp; // Essa variavel vai possuir um valor apartir do momento em que clicarmos no botão Abrir

/** Quando clicar no botão Abrir, o objeto window é ativado abrindo o Pop Up */
document.querySelector('input[name="abrir"]').addEventListener('click', function() {
	popUp = window.open('propaganda.html', 'popup', 'width=600, height=530, scrollbar=NO');

	console.log(popUp); // Aqui você consegue ver todas as propriedades deste objeto
});

/**
 * Quando clicar no botão Verificar, vamos checar a variavel popUp foi implementada
 * no evento acima.
 */
document.querySelector('input[name="verificar"]').addEventListener('click', function() {
	if (!popUp) {
		console.log('A janela não foi carregada');
	} else if (popUp.closed) {
		console.log('A janela foi fechada');
	} else {
		console.log('A janela foi carregada');
	}
});