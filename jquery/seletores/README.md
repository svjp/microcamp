# Seletores

Na [aula passada](https://github.com/svjp/microcamp/blob/master/jquery/introducao/README.md#introdu%C3%A7%C3%A3o-ao-jquery) nós fomos introduzidos a maneira mais comum de selecionarmos um elemento DOM, que é através de um seletor do tipo *classe*, *id* ou a sua respectiva tag. Porém existem diversas outras maneiras de selecionarmos um elemento, passando alguns parâmetros em nosso seletor, podemos explicitar com detalhes qual elemento DOM queremos consultar.

## Sumário

- [Hierarquia de Seletores]()

## Hierarquia de Seletores

Assim como em uma árvore genealógica, cada elemento HTML possuí uma hierarquia similar da qual nos possibilita, maior flexibilidade em nossas manipulações, tornando nossas seleções mais complexas e precisas. Essa hierarquia funciona da seguinte maneira:

```html
<!-- Elemento pai -->
<main>
    <!-- Elemento filho do "main" e irmão do "aside" -->
    <section>
        <!-- Elemento filho do "section" que é filho do "main" -->
        <span></span>
    </section>

    <!-- Elemento filho do "main" e irmão do "section" -->
    <aside></aside>
    
    <!-- Elemento filho do "main" e irmão do "section" e "aside" -->
    <p></p>
</main>
```
