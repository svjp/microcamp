# Widgets

São componentes prontos para serem importados em seu site. Existem diversos widgets no jQuery UI e a maior parte deles possuem uma similaridade em suas implementações. Aqui falaremos das ~quais eu considero~ mais importantes :smile:

## Sumário

- [Accordion](#accordion)
- [Autocomplete](#autocomplete)
- [Spinner](#spinner)
- [Tabs](#tabs)
- [Tooltip](#tooltip)
- [Referências](#referências)

## Accordion

O acordeão e o [tabs](#tabs) possuem a mesma lógica em sua essência, a grande diferença entre elas é justamente a "transição" entre uma seção e outra, onde o acordeão utiliza a efeito `$.slideToggle()`.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Acordeão</title>
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
 
<div id="accordion">
  <h3>Section 1</h3>
  <div>
    <p>
    Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
    ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
    amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
    odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
    </p>
  </div>
  <h3>Section 2</h3>
  <div>
    <p>
    Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
    purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
    velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
    suscipit faucibus urna.
    </p>
  </div>
  <h3>Section 3</h3>
  <div>
    <p>
    Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
    Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
    ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
    lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
    </p>
    <ul>
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </ul>
  </div>
  <h3>Section 4</h3>
  <div>
    <p>
    Cras dictum. Pellentesque habitant morbi tristique senectus et netus
    et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
    faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
    mauris vel est.
    </p>
    <p>
    Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos.
    </p>
  </div>
</div>

<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
    jQuery(function() {
      $("#accordion").accordion();
    });
</script>

</body>
</html>
```

## Autocomplete

O autocomplete é auto-sugestivo e sua função é fornecer sugestões durante o usuário está digitando em um input.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Autocomplete</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
 
<div class="ui-widget">
  <label for="tags">Tags: </label>
  <input id="tags">
</div>

<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
  $(function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
  
    $("#tags").autocomplete({
      source: availableTags
    });
  });
</script>
 
</body>
</html>
```

## Spinner

O spinner fornece um controlador ~estilo contador~ dentro do elemento input fazendo o número aumentar ou diminuir.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Spinner</title>
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
 
<p>
  <label for="spinner">Select a value:</label>
  <input id="spinner" name="value">
</p>
 
<p>
  <button id="disable">Toggle disable/enable</button>
  <button id="destroy">Toggle widget</button>
</p>
 
<p>
  <button id="getvalue">Get value</button>
  <button id="setvalue">Set value to 5</button>
</p>
 
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="/resources/demos/external/jquery-mousewheel/jquery.mousewheel.js"></script>
<script>
  $(function() {
    var spinner = $("#spinner").spinner();
 
    $("#disable").on("click", function() {
      if (spinner.spinner("option", "disabled")) {
        spinner.spinner("enable");
      } else {
        spinner.spinner("disable");
      }
    });
  
    $("#destroy").on("click", function() {
      if (spinner.spinner("instance")) {
        spinner.spinner("destroy");
      } else {
        spinner.spinner();
      }
    });
  
    $("#getvalue").on("click", function() {
      alert(spinner.spinner("value"));
    });
  
    $("#setvalue").on("click", function() {
      spinner.spinner("value", 5);
    });
 
    $("button").button();
  });
</script>
  
</body>
</html>
```

## Tabs
## Tooltip
## Referências

- http://jqueryui.com/accordion/
- http://jqueryui.com/autocomplete/
- http://jqueryui.com/spinner/
- http://jqueryui.com/tabs/
- http://jqueryui.com/tooltip/
