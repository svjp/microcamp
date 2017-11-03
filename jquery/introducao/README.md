# Introdução ao jQuery

O jQuery é uma biblioteca de *consultas* utilizando o JavaScript, daí vem o nome, sendo, **j** significando JavaScript e **Query** significando Consulta. O jQuery saiu da necessidade de uma padronização do próprio JavaScript em diferentes browsers (popularmente conhecido como Cross-Browser).

> Na ciência da computação, biblioteca é uma coleção de subprogramas utilizados no desenvolvimento de software. Bibliotecas contém código e dados auxiliares, que provém serviços a programas independentes, o que permite o compartilhamento e a alteração de código e dados de forma modular.

## Sumário

- [Qual a sua utilidade?](#qual-a-sua-utilidade)
- [Produção vs Desenvolvimento](#produ%C3%A7%C3%A3o-vs-desenvolvimento)
- [Content Delivery Network (CDN)](#content-delivery-network-cdn)
- [Inicializando um arquivo jQuery](#inicializando-um-arquivo-jquery)
    - [Qual a diferença entre IIFE e `$(document).ready()`?](#qual-a-diferen%C3%A7a-entre-iife-e-documentready)
- [Referências](#referencia)

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

Existem duas maneiras de inicializarmos um arquivo jQuery, o primeiro é realizando uma consulta diretamente no nosso elemento *document* verificando se ele foi carregado (ou se ele está *ready*):

```javascript
$(document).ready(function() {
    // meu código vem aqui
});
```

A segunda maneira é fazendo uso de [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression), que basicamente é uma função da qual é executada no momento que é definida:

```javascript
(function($) {
    // meu código vem aqui
})();
```

#### Qual a diferença entre IIFE e `$(document).ready()`?

Se você pretende usar o jQuery para manipular o DOM ou algo relacionado aos elementos da sua página, utlize o `$(document).ready()`, agora, se você pretende desenvolver algum plugin, extensão ou mesmo uma funcionalidade extra com a finalidade de complementar o jQuery, utilize o IIFE.

## Referências

- https://pt.wikipedia.org/wiki/Biblioteca_(computa%C3%A7%C3%A3o)