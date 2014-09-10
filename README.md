# afterloader.js

[![Build Status](https://secure.travis-ci.org/rodrigoalvesvieira/afterloader.js.png)](http://travis-ci.org/rodrigoalvesvieira/afterloader.js)

## Build

Os seguintes comandos resolvem as dependências do projeto e geram sua versão comprimida pronta para a distribuição:

```shell
$ npm install   - Instala as dependências via NPM

$ bower install - Instala as dependências via Bower

$ npm run build - Realize o build através do Grunt.js e NPM
```

###### Qualidade de código

O seguinte comando utiliza o [JSHint] para alertar o desenvolvedor sobre possíveis problemas no código bem como oferece sugestão de melhorias.
Esse comando sempre deverá retornar sucesso, caso contrário algum código indevido foi introduzido e deverá ser melhorado.

```shell
$ grunt lint
```

##### Gerando build alterável

Caso você queira gerar o build alterável, isto é, não comprimido do projeto, utilize o seguinte comando:

```shell
$ grunt concat
```

Vai gerar um arquivo em `dist/afterloader.js`.

## Uso

pending

## Teste

o afterloader.js é testado por comportamento (BDD) através da biblioteca [Jasmine].
Antes de executar a suíte de testes é necessário dar o build no projeto:

`$ npm run build`

Uma vez que o build tiver sido feito, para executar a suíte de testes apenas abra o arquivo `AfterloaderSpec.html`.

## Author

* Rodrigo Alves <rodrigovieira1994@gmail.com>

## License

Released under the MIT License. See LICENSE.txt for details.

Copyright (c) 2012-2014 Rodrigo Alves.

[JSHint]: http://www.jshint.com/
[Grunt.js]: http://gruntjs.com/
[NPM]:https://www.npmjs.org/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[uglify.js]: http://marijnhaverbeke.nl/uglifyjs
