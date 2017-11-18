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
- [:eq()](#eq)
- [:even](#even)
- [:first](#first)
- [:focus](#focus)
- :gt
- [Referências](#referencias)

## `:animated`

Seleciona todos os elementos que estão sendo animados no momento no qual o seletor é acionado.

## `:eq`

Seleciona o elemento a partir do ìndice definido dentro em `:eq(índice)`. Este seletor é uma variação do `:nth-child()`, a diferença entre eles é que o `:eq()` NÃO realiza consultas recursivas.

## `:even`

Seleciona todos os elementos que são pares.

## `:first`

Seleciona o primeiro elemento de seu tipo, sua funcionalidade é a mesma do pseudo-seletor CSS `:nth-of-type(1)`.

## `:focus`

Seleciona o elemento do qual o usuário está interagindo no mesmo.

## `:gt`

Seleciona todos os elementos de seu tipo a partir do índice passado `:gt(índice)`.

## Referências

- https://api.jquery.com/animated-selector/
- https://api.jquery.com/eq-selector/
- https://api.jquery.com/even-selector/
- https://www.w3schools.com/jquery/sel_first.asp
- https://api.jquery.com/focus-selector/
- https://api.jquery.com/gt-selector/
