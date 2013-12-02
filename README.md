# generator-dude [![Build Status](https://secure.travis-ci.org/csantanapr/generator-dude.png?branch=master)](https://travis-ci.org/csantanapr/generator-dude)


A [Yeoman](http://yeoman.io) generator that scaffolds out a front-end web and hybrid app using a selected web app generator and cordova


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-dapp from npm, run:

```
$ npm install -g generator-dude
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
