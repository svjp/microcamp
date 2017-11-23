# Efeitos

Os efeitos são ~~na minha humilde opinião~~ o coringa para quem ainda não se decidiu se vale ou não a pena aprender jQuery. Muitos ~~mas muitos mesmo~~ plugins são desenvolvidos utilizando estes efeitos, lembrando que em alguns casos os efeitos são customizados para uma necessidade específica do plugin.

## Sumário

- [animate()]()
- [fadeIn()](#fadein)
- [fadeOut()](#fadeout)
- [fadeToggle()](#fadetoggle)
- [fadeTo()]()
- [hide()](#hide)
- [show()](#show)
- [slideDown()]()
- [slideUp()]()
- [slideToggle()](#slidetoggle)
- [stop()]()
- [toggle()]()
- [Referências](#referências)

## `fadeIn()`

Este efeito fará com que a imagem apareça gradualmente controlando a opacidade de tal elemento, assim quando completa, a imagem e/ou texto é mostrada.

## `fadeOut()`

Este efeito é exatamente o oposto de `fadeIn()`, ele fará com que desapareça o elemento gradualmente até que ele esteja totalmente transparente.

## `fadeToggle()`

Este efeito é uma combinação do `fadeIn()` e do `fadeOut()`, ele verifica se o elemento sofreu um *fade in*, se sim, o próximo efeito a ser *trigado* é o *fade out*.

## `fadeTo()`

Nele você controla até quando seu elemento soferá o efeito *fade*.

## `hide()`

Este efeito fará desaparecer o elemento assim como a propriedade CSS `display: none`. Tanto `$('.hide-me').css('display', 'none')` como `$('.hide-me').hide()` farão com que o elemento com a classe *hide-me* desapareça.

## `show()`

Este efeito simplesmente fará aparecer o elemento assim como a propriedade CSS `display: block`. O código `$('.show-me').css('display', 'block')` é equivalente a `$('.show-me').show()`. Ambos farão aparecer o elemento com a classe `.show-me` apenas seguimos caminhos diferentes.

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

## Referências

- http://api.jquery.com/slidetoggle/
- http://api.jquery.com/hide/
- http://api.jquery.com/show/
- http://api.jquery.com/fadetoggle/
- https://api.jquery.com/fadeTo/
- http://api.jquery.com/fadein/
- http://api.jquery.com/fadeout/
