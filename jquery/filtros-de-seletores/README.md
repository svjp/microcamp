# Filtros de Seletores

Os filtros de seletores são outra maneira de consultarmos o DOM. Esses seletores são estruturados através da estrutura `elemento:filtro`, por exemplo:

```javascript
$('ul li:first-child').css('background-color', '#000000');
```

Basicamente todos os seletores do CSS funcionarão no jQuery, os principais são:

- :first-child
- :last-child
- :nth-child()
- etc...

## Sumário

- [:animated](#animated)
- :eq()
- :even
- :first
- :focus
- :gt
- [Referências](#referencias)

## `:animated`

Seleciona todos os elementos que estão sendo animados no momento no qual o seletor é acionado.

```html
<!doctype html>
<html lang="pt">
<head>
  <meta charset="utf-8">
  <title>Animated</title>
  <link href="style.css" type="text/stylesheet" />
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>
 
<button id="run">Run</button>
 
<div></div>
<div id="mover"></div>
<div></div>

<script src="animated.js"></script>

</body>
</html>
```

```css
/* style.css */
div {
  background: yellow;
  border: 1px solid #AAA;
  width: 80px;
  height: 80px;
  margin: 0 5px;
  float: left;
}

div.colored {
  background: green;
}
```

```javascript
/* animated.js */
$( "#run" ).click(function() {
  $( "div:animated" ).toggleClass( "colored" );
});
 
function animateIt() {
  $( "#mover" ).slideToggle( "slow", animateIt );
}
 
animateIt();
```

## Referências

- https://api.jquery.com/animated-selector/
