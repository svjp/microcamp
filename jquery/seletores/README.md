# Seletores

Na [aula passada](https://github.com/svjp/microcamp/blob/master/jquery/introducao/README.md#introdu%C3%A7%C3%A3o-ao-jquery) nós fomos introduzidos a maneira mais comum de selecionarmos um elemento DOM, que é através de um seletor do tipo *classe*, *id* ou a sua respectiva tag. Porém existem diversas outras maneiras de selecionarmos um elemento, passando alguns parâmetros em nosso seletor, podemos explicitar com detalhes qual elemento DOM queremos consultar.

## Sumário

- [Hierarquia de Seletores](#hierarquia-de-seletores)
    - Seletor Descendente
    - Seletor Filho
    - Seletor Adjacente Seguinte
    - Seletor Irmão Próximo
- [Referências](#referências)

## Hierarquia de Seletores

Assim como em uma árvore genealógica, cada elemento HTML possuí uma hierarquia similar da qual nos possibilita, maior flexibilidade em nossas manipulações, tornando nossas seleções mais complexas e precisas. Essa hierarquia funciona da seguinte maneira:

```html
<!-- Elemento pai -->
<main>
    <!-- Elemento filho do "main" e irmão do "aside" e "p" -->
    <section>
        <!-- Elemento filho do "section" que é filho do "main" -->
        <span></span>
    </section>

    <!-- Elemento filho do "main" e irmão do "section" e "p" -->
    <aside></aside>
    
    <!-- Elemento filho do "main" e irmão do "section" e "aside" -->
    <p></p>
</main>
```

Utilizando o exemplo acima podemos consultar elementos através dos seletores:

- O seletor descendente encadeia múltiplos elementos em sua declaração:

```javascript
/**
 * O código a seguir deixará o span que foi "triggado"
 * usando o seletor desencente com um background-color amarelo.
 */
$('main section span').css('background-color', 'yellow');
```

- O seletor filho retorna o primeiro elemento depois de `>` que é filho do que há antes do `>`


```javascript
/**
 * Define ao primeiro "section" direto que é filho de "main"
 * um background-color amarelo.
 */
$('main > section').css('background-color', 'yellow');
```

- O seletor adjacente seguinte consulta todo elemento depois do `+` que precede o que vem antes do `+`

```javascript
/**
 * Para todos os "aside" que vem depois de uma "section"
 * adiciona um background-color amarelo.
 */
$('main section + aside').css('background-color', 'yellow');
```

- O seletor de irmão próximo consulta todo elemento depois de `~` como irmão do que vem antes do `~`


```javascript
/**
 * Para todos os "p" que são irmãos de uma "section"
 * adiciona um background-color amarelo.
 */
$('main section ~ p').css('background-color', 'yellow');
```

## Referências

- https://api.jquery.com/descendant-selector/
- https://api.jquery.com/child-selector/
- https://api.jquery.com/next-adjacent-selector/
- https://api.jquery.com/next-siblings-selector/
