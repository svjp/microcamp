# Aula 08 - Expressões Regulares

Provavelmente essa é a primeira vez que estamos falando de *Expresses Regulares* em nosso curso. É importante salientar que este assunto é ***MUITO*** extenso e nos tomaria horas e mais horas de estudo para dominar completamente tal recurso.

Por essa razão nos atentaremos apenas nas principais funcionalidades e seu uso no dia-a-dia, ok? Eu deixarei aos curiosos, alguns links para quem deseja se aprofundar no assunto. Vamos começar?

## Sumário

- [Introdução](#introdu%C3%A7%C3%A3o)
- [Estrutura](#estrutura)
	- [Literal ou Construtor](#literal-ou-construtor)

## Introdução

> Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string.

Essa é a definição que você encontrará no seu livro (pelo menos algo parecido a isso) e também é a definição oficial que se encontra no site da **Mozilla**.

Para deixar mais clara esta definição, imagine o seguinte caso, você está criando um formulário de cadastro de uma loja virtual e os campos seriam mais ou menos algo como: 

![Formulário de Contato](../../docs/imagens/javascript/aula-08/formulario-contato.png)

A *combinação de caracteres* utilizada em nossa definição, refere-se a capacidade de trabalhar os dados vindos do usuário (dados input) da maneira que quisermos. Na prática funciona assim, o primeiro campo que possuímos é o do CPF, ele por sua vez é constituído por 11 caracteres aleatórios, separados por ponto e traço. A combinação é infinita porém ela segue o seguinte padrão:

| 1º dígito | 2º dígito | 3º dígito | 4º dígito | 5º dígito | 6º dígito | 7º dígito | 8º dígito | 9º dígito | 10º dígito | 11º dígito |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1xx.xxx.xxx-xx  | 01x.xxx.xxx-xx  | x1.xxx.xxx-xx  | xxx.1xx.xxx-xx  | xxx.x1x.xxx-xx  | xxx.x1.xxx-xx  | xxx.xxx.1x-xx  | xxx.xxx.x1x-xx  | xxx.xxx.x1-xx  |  xxx.xxx.xxx-1x  | xxx.xxx.xxx-x1  |
| 2xx.xxx.xxx-xx  | x2x.xxx.xxx-xx  | x2.xxx.xxx-xx  | xxx.2xx.xxx-xx  | xxx.x2x.xxx-xx  | xxx.x2.xxx-xx  | xxx.xxx.2x-xx  | xxx.xxx.x2x-xx  | xxx.xxx.x2-xx  |  xxx.xxx.xxx-2x  | xxx.xxx.xxx-x2  |
| 3xx.xxx.xxx-xx  | x3x.xxx.xxx-xx  | x3.xxx.xxx-xx  | xxx.3xx.xxx-xx  | xxx.x3x.xxx-xx  | xxx.x3.xxx-xx  | xxx.xxx.3x-xx  | xxx.xxx.x3x-xx  | xxx.xxx.x3-xx  |  xxx.xxx.xxx-3x  | xxx.xxx.xxx-x3  |
| 4xx.xxx.xxx-xx  | x4x.xxx.xxx-xx  | x4.xxx.xxx-xx  | xxx.4xx.xxx-xx  | xxx.x4x.xxx-xx  | xxx.x4.xxx-xx  | xxx.xxx.4x-xx  | xxx.xxx.x4x-xx  | xxx.xxx.x4-xx  |  xxx.xxx.xxx-4x  | xxx.xxx.xxx-x4  |
| 5xx.xxx.xxx-xx  | x5x.xxx.xxx-xx  | x5.xxx.xxx-xx  | xxx.5xx.xxx-xx  | xxx.x5x.xxx-xx  | xxx.x5.xxx-xx  | xxx.xxx.5x-xx  | xxx.xxx.x5x-xx  | xxx.xxx.x5-xx  |  xxx.xxx.xxx-5x  | xxx.xxx.xxx-x5  |
| 6xx.xxx.xxx-xx  | x6x.xxx.xxx-xx  | x6.xxx.xxx-xx  | xxx.6xx.xxx-xx  | xxx.x6x.xxx-xx  | xxx.x6.xxx-xx  | xxx.xxx.6x-xx  | xxx.xxx.x6x-xx  | xxx.xxx.x6-xx  |  xxx.xxx.xxx-6x  | xxx.xxx.xxx-x6  |
| 7xx.xxx.xxx-xx  | x7x.xxx.xxx-xx  | x7.xxx.xxx-xx  | xxx.7xx.xxx-xx  | xxx.x7x.xxx-xx  | xxx.x7.xxx-xx  | xxx.xxx.7x-xx  | xxx.xxx.x7x-xx  | xxx.xxx.x7-xx  |  xxx.xxx.xxx-7x  | xxx.xxx.xxx-x7  |
| 8xx.xxx.xxx-xx  | x8x.xxx.xxx-xx  | x8.xxx.xxx-xx  | xxx.8xx.xxx-xx  | xxx.x8x.xxx-xx  | xxx.x8.xxx-xx  | xxx.xxx.8x-xx  | xxx.xxx.x8x-xx  | xxx.xxx.x8-xx  |  xxx.xxx.xxx-8x  | xxx.xxx.xxx-x8  |
| 9xx.xxx.xxx-xx  | x9x.xxx.xxx-xx  | x9.xxx.xxx-xx  | xxx.9xx.xxx-xx  | xxx.x9x.xxx-xx  | xxx.x9.xxx-xx  | xxx.xxx.9x-xx  | xxx.xxx.x9x-xx  | xxx.xxx.x9-xx  |  xxx.xxx.xxx-9x  | xxx.xxx.xxx-x9  |

Perceba que o padrão é o mesmo em todos os digitos, sendo que `CPF = (x | x <= 9)`. Eu acho que agora já deu para entender como as expressões regulares são poderosas, elas não só permitem a nós verificarmos o tipo de **valor da string**, como também nos permite **definir seu tamanho** e **apresentação** na aplicação. Por essa razão diversas linguagens de programação à implementam nativamente, sendo algumas delas:

- JavaScript
- PHP
- Python
- Java
- Ruby
- Swift
- C#
- Groovy
- Scala
- etc...

![Surpresa](../../docs/gifs/surpresa.gif)

## Estrutura

Existem duas maneiras de trabalharmos com Expressões Regulares, a primeira é fazendo uso da forma **literal** ou do **construtor**. A grande diferença entre eles está na *performance*, onde a forma literal sai ganhando por ser compilada assim que o script é carregado, ao contrário do construtor que é compilado em tempo de execução.

#### Literal ou Construtor

Se você for trabalhar com **combinações estáticas** (que não se alteram no decorrer da aplicação) das quais você já sabe o tipo de dados input a ser tratado, então, dê preferência a forma literal, caso contrário utilize o construtor.

```javascript
var forma_literal = /minhas combinações/,
    forma_construtor = new RegExp(/^minhas combinações$/);
```

Perceba que quando fazemos uso do construtor, utilizamos os caracteres `^` e `$`, estes são os caracteres especiais da expressão, onde `^` dá inicio a uma string e `$` finaliza-a.

> Na documentação oficial há muitos outros caracteres, porém nos atentaremos apenas nestes dois.

## Referências

- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions