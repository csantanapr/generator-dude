# generator-dude [![Build Status](https://secure.travis-ci.org/csantanapr/generator-dude.png?branch=master)](https://travis-ci.org/csantanapr/generator-dude)


A [Yeoman](http://yeoman.io) generator that scaffolds out a front-end web and hybrid app using a selected web app generator and cordova


## Getting Started

### Install Global Dependencies

```
$ npm install -g yo
$ npm install -g bower
$ npm install -g grunt-cli
$ npm install -g generator-dude
$ npm install -g generator-cordovacli
```

### Install one of the Web App Generator
```
$ npm install -g generator-dapp
$ npm install -g generator-webapp
$ npm install -g generator-angular
$ npm install -g generator-mobile
$ npm install -g generator-polymer
$ npm install -g generator-backbone
$ npm install -g generator-jquery-mobile
```

## Running Dude

```

Finally, initiate the generator:

```
$ yo dude
```

### Then what?
Run  `grunt --help` to see available tasks

Here are a few options:

```
$ grunt server
$ grunt build
$ grunt app:server
$ grunt app:build
$ grunt cordova:server
$ grunt cordova:build
$ grunt cordova:emulate
```

The Generator is based on other generators:
The user selects one of the Web App Generators:

- [generator-dapp](github.com/csantanapr/generator-dapp)
- [generator-webapp](github.com/yeoman/generator-webapp)
- [generator-angular](github.com/yeoman/generator-angular)
- [generator-mobile](github.com/yeoman/generator-mobile)
- [generator-polymer](github.com/yeoman/generator-polymer)
- [generator-backbone](github.com/yeoman/generator-backbone)
- [generator-jquery-mobile](github.com/bauschan/generator-jquery-mobile)

Then the [generator-cordovacli](github.com/csantanapr/generator-cordovacli) is used to wrap the Web App as a Hybrid App

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

### Dual License

* [BSD](https://github.com/dojo/dojo/blob/master/LICENSE#L13)
* [AFLv2.1](https://github.com/dojo/dojo/blob/master/LICENSE#L43)
