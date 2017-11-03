# Introdução ao jQuery

O jQuery é uma biblioteca de *consultas* utilizando o JavaScript, daí vem o nome, sendo, **j** significando JavaScript e **Query** significando Consulta. O jQuery saiu da necessidade de uma padronização do próprio JavaScript em diferentes browsers (popularmente conhecido como Cross-Browser).

> Na ciência da computação, biblioteca é uma coleção de subprogramas utilizados no desenvolvimento de software. Bibliotecas contém código e dados auxiliares, que provém serviços a programas independentes, o que permite o compartilhamento e a alteração de código e dados de forma modular.

## Sumário

- [Qual a sua utilidade?](#qual-a-sua-utilidade)
- [Produção vs Desenvolvimento](#produ%C3%A7%C3%A3o-vs-desenvolvimento)
- [Content Delivery Network (CDN)](#content-delivery-network-cdn)
- [Inicializando um arquivo jQuery](#inicializando-um-arquivo-jquery)
- [Função Global](#fun%C3%A7%C3%A3o-global)
- [Referências](#refer%C3%AAncias)

## Qual a sua utilidade?

O jQuery é uma das bibliotecas mais difundidas entre os desenvolvedores web, esse posto não é por acaso, através do jQuery podemos manipular elementos dos nossos documentos. Há várias maneiras de manipularmos tais elementos, sendo as mais populares, a manipulação de conteúdo e propriedades CSS.

Essas manipulações são realizadas através de consultas utilizando um seletor CSS (classe ou id) retornando um objeto representando tal consulta. Este objeto possuí diversos métodos e propriedades, assim, criando seu próprio idioma de encadeamento de métodos. As seguintes características são a base do poder e da utilidade do jQuery:

- Sintaxe expressiva (seletor CSS) para se referir aos elementos do documento
- Método de consulta eficiente para localizar o conjunto de elementos do docmento que correspondem a um seletor CSS
- Conjunto de métodos úteis para manipular os elementos selecionados

## Produção vs Desenvolvimento

No site oficial do [jQuery na seção download](https://jquery.com/download/) existem dois tipos de arquivos o *comprimido* (também chamado de arquivo de produção) e o *descomprimido* (chamado de arquivo de desenvolvimento). Basicamente, nós deixamos o arquivo de produção no servidor e o arquivo de desenvolvimento em nossa máquina local.

O motivo para isso é que o arquivo de produção por ser comprimido, possuí um tamanho de bytes menor que o de desenvolvimento, portanto, há um ganho (ainda que mínimo) de performance.

## Content Delivery Network (CDN)

O [CDN](https://cdnjs.com) é uma rede de servidores proxy onde fornecem URLs para diversas bibliotecas, frameworks, etc. É uma maneira mais ágil de trabalhar com dependências, pois assim apenas importamos o arquivo em nosso documento, sem a necessidade de baixá-lo toda vez que precisarmos dele.

## Inicializando um arquivo jQuery

Para inicializar um documento jQuery utiliza-se a função global junto a uma callback anônima.

```javascript
jQuery(function($) {
    // meu código vem aqui
});
```

Em versões mais antigas do jQuery se utilizava bastante a seguinte expressão:

```javascript
$(document).ready(function() {
    // meu código vem aqui
});
```

## Função Global

A biblioteca jQuery define uma única função global chamada `jQuery()`. Essa função é utilizada com tanta frequência que a biblioteca também define o símbolo global `$` como atalho para ela.

#### Tipos de Seleção

No jQuery existem três maneiras de selecionarmos um elemento através da função global `jQuery()` ou `$()`.

1. A primeira é referenciar o elemento através de um seletor CSS (tal como uma classe ou id), dessa forma, é retornado um objeto com as proprieda do elemento (ou elementos) de tal seletor.

```javascript
jQuery(function($) {
    console.log($('.minha-classe'));
});
```

2. A segunda é empacotar objetos do tipo **Element**, **Document** ou **Window** a função global, retornando o objeto em sí. 

> Quando se está trabalhando com jQuery é considerado uma boa prática fazer esses empacotamentos, para evitar chamada de métodos do DOM puro.

```javascript
jQuery(function($) {
    console.log($(window));
});
```

3. A terceira é referenciar através de uma *string* um elemento HTML, se estiver utilizando o atalho `$()` é possível passar um segundo parâmetro (também chamado de contexto), especificando do que se trata a consulta.

```javascript
jQuery(function($) {
    var imagem = $('img', {
        src: 'minha-url',
        alt: 'Imagem'
    });
});
```

## Referências

- https://pt.wikipedia.org/wiki/Biblioteca_(computa%C3%A7%C3%A3o)
