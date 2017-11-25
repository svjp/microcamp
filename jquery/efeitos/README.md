# Efeitos

Os efeitos são ~~na minha humilde opinião~~ o coringa para quem ainda não se decidiu se vale ou não a pena aprender jQuery. Muitos ~~mas muitos mesmo~~ plugins são desenvolvidos utilizando estes efeitos, lembrando que em alguns casos os efeitos são customizados para uma necessidade específica do plugin.

## Sumário

- [animate()](#animate)
- [fadeIn()](#fadein)
- [fadeOut()](#fadeout)
- [fadeToggle()](#fadetoggle)
- [fadeTo()](#fadeto)
- [hide()](#hide)
- [show()](#show)
- [slideDown()](#slidedown)
- [slideUp()](#slideup)
- [slideToggle()](#slidetoggle)
- [stop()]()
- [toggle()](#toggle)
- [Referências](#referências)

## `animate()`

Acredito que este efeito é autoexplicativo, ele aceita quatro parâmetros distintos, sendo eles:

- **Propriedades** que são basicamente as propriedades do CSS que ditarão o que nosso elemento irá fazer durante a animação;
- **Duração** determina o tempo da animação;
- ***Easing*** determina o tipo de animação que ocorrerá;
- **Completo** é executado quando a animação finalizar;

> Para saber mais sobre os valores desses parâmetros, acesse o link da referência para o `animate()` no final da página.

## `fadeIn()`

Este efeito fará com que a imagem apareça gradualmente controlando sua opacidade, quando completo, o elemento é mostrado.

## `fadeOut()`

Este efeito é exatamente o oposto de `fadeIn()`, ele fará com que o elemento desapareça gradualmente até que esteja completamente transparente.

## `fadeToggle()`

Este efeito é uma combinação do `fadeIn()` e do `fadeOut()`, ele verifica se o elemento sofreu um *fade in*, se sim, o próximo efeito a ser *trigado* é o *fade out* e vice-versa.

## `fadeTo()`

Este efeito controla até quando seu elemento soferá o *fading*, trabalhado indiretamente através da propriedade opacidade do CSS.

## `hide()`

Este efeito fará desaparecer o elemento assim como a propriedade CSS `display: none`. Tanto `$('.hide-me').css('display', 'none')` como `$('.hide-me').hide()` farão com que o elemento com a classe `.hide-me` desapareça.

## `show()`

Este efeito simplesmente fará aparecer o elemento assim como a propriedade CSS `display: block`. O código `$('.show-me').css('display', 'block')` é equivalente a `$('.show-me').show()`. Ambos farão o elemento com a classe `.show-me` aparecer.

## `toggle()`

O efeito *toggle* é a combinação dos efeitos **hide** e **show**, ele altera entre um e outro, se está visivel, faça-o desaparecer.

## `slideDown()`

O método `slideDown()` animará a altura de seu elemento correspondente. Isso fará com que as partes abaixo deste elemento acompanhe o mesmo, abrindo caminho para os itens visiveis.

## `slideUp()`

O método `slideUp()` também anima a altura de seu elemento correspondente, sua funcionalidade é o inverso a `slideDown()`.

## `slideToggle()`

Este efeito é a combinação entre `slideUp()` e `slideDown()`, ele aceita dois parâmetros, sendo eles:

- Tempo
- Resultado após o término do `slideToggle()`

Por padrão o tempo vem como **fast** mas também é possível defini-lo como **slow**, ou utilizar o padrão numeral em *milissegundos* e a *callback* não é obrigatória.

```javascript
jQuery(function() {
  $('.click-me').on('click', function() {
    /* Chamada padrão do slideToggle() */
    $('.slide-toggle-me').slideToggle();
    
    /* Deixando o slide "devagar" */
    $('.slide-toggle-me').slideToggle('slow');
    
    /* Deixando o slide "devagar" e dando um console log quando terminar */
    $('.slide-toggle-me').slideToggle('slow', function() {
      console.log('Hello, World');
    });
  });
});
```

> É importante pensar no *toggle* como uma alternância entre dois estados. Seguindo este conceito o `slideToggle()` faz a alternância entre o estado `slideUp()` e `slideDown()`. Tanto o `fadeToggle()` e o `toggle()` seguem a mesma linha.

## `stop()`

Quando `stop()` é chamado em um elemento, a animação atual nele é imediatamente parada.

## Referências

- http://api.jquery.com/slidetoggle/
- http://api.jquery.com/hide/
- http://api.jquery.com/show/
- http://api.jquery.com/fadetoggle/
- https://api.jquery.com/fadeTo/
- http://api.jquery.com/fadein/
- http://api.jquery.com/fadeout/
- http://api.jquery.com/animate/
- http://api.jquery.com/toggle/
- http://api.jquery.com/slidedown/
- http://api.jquery.com/slideup/
- https://api.jquery.com/stop/
