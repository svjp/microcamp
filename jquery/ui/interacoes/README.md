# Interações

As interações são métodos que nos ajudam a trabalhar com os elementos DOM de uma maneira que apenas chamando uma interação *x*, por exemplo, um efeito já pré-definido pelo jQuery UI é ativado nele. Junto a estes métodos, existem outros métodos que são passados por parâmetro, e servem para dar-nos maior controle sobre as interações.

## Sumário

- [.draggable()](#draggabble)
- [.droppable()](#droppable)
- [.resizable()](#resizable)
- [.selectable()](#selectable)
- [.sortable()](#sortable)
- [Referências](#referências)

## `.draggabble()`

Este método permite que o elemento DOM do qual recebe `.draggable()` torne-se movível (a.k.a. draggable) utilizando o mouse.

```javascript
jQuery(function($) {
    $('.meu-elemento-dom').dragabble({
        drag: function(event) {
            console.log(event);
        }
    });
});
```

Perceba que eu utilizei um método como parâmetro de `.draggable()` o `.drag()`, ele nos permite *triggar* uma ação no momento em que estamos "arrastando" o elemento DOM.

## `.droppable()`

Este método deixa o elemento DOM do qual recebe `.droppable()` o deixa dropável, no sentido que, ele aceita qualquer elemento "arrastável" que o usuário solte com o mouse dentro do elemento "dropável".

```javascript
jQuery(function($) {
    $('.elemento-um').draggable();
    $('.elemento-dois').droppable({
        drop: function(event) {
            console.log(event);
            $('.elemento-um').html('Dropado!').css('background-color', 'yellow');
        }
    });
});
```

O método `.drop()` é obrigatório para que quando o elemento "arrastável" seja aceito dentro de um elemento "dropável", algo possa acontecer, em nosso exemplo, irá mostrar algumas informações sobre o evento em sí e também alterará a cor de fundo para amarelo.

## `.resizable()`

## `.selectable()`

## `.sortable()`

> Perceba que em todos os métodos das interações nós criamos um parâmetro chamado **event**, este parâmetro nos retorna os dados e/ou informação sobre o evento atual triggado.

## Referências

- http://jqueryui.com/draggable/
- http://jqueryui.com/droppable/
- http://jqueryui.com/resizable/
- http://jqueryui.com/selectable/
- http://jqueryui.com/sortable/
