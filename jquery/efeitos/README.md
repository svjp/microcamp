# Efeitos

Os efeitos são ~~na minha humilde opinião~~ o coringa para quem ainda não se decidiu se vale ou não a pena aprender jQuery. Muitos ~~mas muitos mesmo~~ plugins são desenvolvidos utilizando estes efeitos, lembrando que em alguns casos os efeitos são customizados para uma necessidade específica do plugin.

## Sumário

- [animate()]()
- [fadeIn()]()
- [fadeOut()]()
- [fadeToggle()]()
- [hide()]()
- [show()]()
- [slideDown()]()
- [slideUp()]()
- [stop()]()
- [toggle()]()
- [Referências](#referências)

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
