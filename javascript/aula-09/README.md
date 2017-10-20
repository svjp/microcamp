# Aula 09 - Modelo de Objeto de Documento (DOM)

O acrônimo **DOM** vem do inglês *Document Object Model* é responsável por manipular elementos de uma página web tornando-o acessível através do objeto `window.document`.

> O Modelo de Objeto de Documento  (DOM) é uma interface de programação para documentos HTML, XML e SVG . Ele fornece uma representação estruturada do documento como uma árvore... fornece uma representação do documento como um grupo estruturado de nós e objetos, possuindo várias propriedades e métodos.

## Sumário

- [getElements*()](#getelements)
	- getElementById()
	- getElementsByTagName()
	- getElementsByName()
	- getElementsClassName()
- [querySelector()](#queryselector)
- [addEventListener()](#addeventlistener)
	- [O que são eventos?](#o-que-s%C3%A3o-eventos)
- [Manipulação de estilos com o DOM](#manipula%C3%A7%C3%A3o-de-estilos-com-o-dom)
- [Referências](#referencias)

## `getElements*()`

A tradução literal para *get elements* seria algo como *pegar/agarrar elementos*, e isso é exatamente o que ele faz, ele intervê diretamente em um elemento e/ou propriedade de uma página, possibilitando-nos manipulá-lo como queiramos.

- **getElementById()** - Seleciona um elemento `x` pela sua ID.

```html
<!DOCTYPE html>
<html lang="pt">
<head>
	<meta charset="UTF-8">
	<title>getElementById</title>
</head>
<body>
	
<ul>
	<li>Menu 1</li>
	<li id="menu-2">Menu 2</li>
	<li>Menu 3</li>
</ul>

<script src="./getElementById.js"></script>

</body>
</html>
```

```javascript
// getElementsById.js
var link = window.document.getElementById('menu-2');

console.log(link.innerHTML);
```

- **getElementsByTagName()** - Seleciona um elemento `x` pelo nome de sua Tag.

```html
<!DOCTYPE html>
<html lang="pt">
<head>
	<meta charset="UTF-8">
	<title>getElementsByTagName</title>
</head>
<body>
	
<ul>
	<li>Menu 1</li>
	<li>Menu 2</li>
	<li>Menu 3</li>
</ul>

<script src="./getElementsByTagName.js"></script>

</body>
</html>
```

```javascript
// getElementsByTagName.js
var links = window.document.getElementsByTagName('li');
console.log(links);
```

- **getElementsByName()** - Seleciona um elemento `x` pela sua propriedade `name`, esse método normalmente é usado em tratamento de dados apartir do client-side com JavaScript.

```html
<!DOCTYPE html>
<html lang="pt">
<head>
	<meta charset="UTF-8">
	<title>getElementsByName</title>
</head>
<body>
	
<input type="text" name="nome">
<input type="text" name="email">
<button>Enviar</button>

<script src="./getElementsByName.js"></script>

</body>
</html>
```

```javascript
// getElementsByName.js
document.querySelector('button').addEventListener('click', function() {
	console.log(document.getElementsByName('nome')[0].value);
});
```

- **getElementsClassName()** - Seleciona um elemento `x` pela sua propriedade `class`.

```html
<!DOCTYPE html>
<html lang="pt">
<head>
	<meta charset="UTF-8">
	<title>getElementsByClassName</title>
</head>
<body>
	
<ul>
	<li>Menu 1</li>
	<li class="menu-2">Menu 2</li>
	<li>Menu 3</li>
</ul>

<script src="./getElementsByClassName.js"></script>

</body>
</html>
```

```javascript
// getElementsByClassName.js
var link = window.document.getElementsByClassName('menu-2');

console.log(link[0].textContent);
```

## `querySelector()`

O método `querySelector()` é uma combinação de todas os métodos anteriores, ou seja, o resultado de todos os exemplos anteriores funcionarão se substituírmos seus respectivos métodos por `querySelector()`.

| ![Negro Beleza](./../../docs/gifs/negro.gif) |
| :---: |
| Aí sim, agora eu ví valor :smile: |

## `addEventListener()`
 
Em uma tradução literal *add event listener* seria algo como *adicionar um ouvinte de eventos*, porém, em uma tradução mais aprimorada, podemos definir *listener* como um vigiante, ele sempre está de olho nas ação do usuário na sua página e responde de acordo.

### O que são eventos?

Quando um usuário clica em um botão, insere um texto em um *input*, passa o mouse em cima dos elementos HTML, navega na página através do scroll, etc... Todas essas ações são consideradas **eventos** no JavaScript. Para trabalhar com eventos fazemos uso do método `addEventListener()` concatenando-o diretamente a declarações e/ou variáveis.

```javascript
document.querySelector('a').addEventListener('click', function() {
	console.log(this.value); // o objeto this refere-se a âncora
});
```

## Manipulação de estilos com o DOM

Existe uma propriedade do DOM muito interessante que nos permite manipular folhas de estilos (CSS) diretamente pelo JavaScript chamada de `window.document.style`.

Segue abaixo uma folha de estilo simples:

```css
body {
	background-color: #000000;
	color: #ffffff;
	text-align: center;
}
```

Agora perceba o mesmo resultado se manipularmos os estilos através do DOM:

```javascript
var body = window.document;

body.style.background = '#000000';
body.style.color = '#ffffff';
body.style.textAlign = 'center';
```

----

> Perceba que todos métodos `getElements*()` e as propriedades do CSS que utilizam o hífen, fazem uso do padrão Camel Case (link nas referências) onde letras maísculas e mínusculas são tratadas diferente.

Então, `textAlign != textalign` e `getElementsById != getelementsbyid`, é bom sempre lembrar deste padrão pois uma propriedade má declarada, pode resultar em um ***bug bem chato*** de resolver.

----

## Referências

- https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM
- https://pt.wikipedia.org/wiki/CamelCase
- https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
- https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp
- https://www.w3schools.com/jsref/met_element_getelementsbytagname.asp
- https://www.w3schools.com/jsref/met_document_getelementbyid.asp