/*jslint nomen: true */
/*global require, module, __dirname, console*/
var util   = require('util');
var path   = require('path');
var yeoman = require('yeoman-generator');
//var fs     = require('fs');

var DappGenerator;
DappGenerator = module.exports = function DappGenerator(args, options) {
    'use strict';
    yeoman.generators.Base.apply(this, arguments);
    var that = this;

    this.on('end', function () {
        var cwd = process.cwd();
        var cordovaPath = process.cwd() + '/cordova';
        console.log('cordovaPath=' + cordovaPath);
        this.mkdir(cordovaPath);
        process.chdir(cordovaPath);
        this.env.run('cordovacli',
            { 'skip-welcome-message': true,
              'skip-install': options['skip-install'],
              'skip-install-message': true
            },
            function () {
                process.chdir(cwd);
                that.installDependencies({
                    skipInstall: options['skip-install'],
                    'skip-install-message': false
                });
            });


    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

    this.bowerComponents = JSON.parse(this.readFileAsString(path.join(__dirname, 'templates', '_.bowerrc'))).directory;
};

util.inherits(DappGenerator, yeoman.generators.Base);

DappGenerator.prototype.askFor = function askFor() {
    'use strict';
    var cb,
        prompts;
    cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    prompts = [{
        'name': 'appName',
        'message': 'What do you want to name your App?',
        'default': 'dude'
    }];

    this.prompt(prompts, function (props) {
        // `props` is an object passed in containing the response values, named in
        // accordance with the `name` property from your prompt object. So, for us:
        //var cwd = process.cwd();

        this.appName = props.appName;

        cb();
    }.bind(this));
};

DappGenerator.prototype.app = function app() {
    'use strict';

    this.directory('profiles', 'profiles');
    this.directory('src', 'src');


};

DappGenerator.prototype.projectfiles = function projectfiles() {
    'use strict';
    this.copy('editorconfig', '.editorconfig');
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('Gruntfile.js');
    this.copy('_.bowerrc', '.bowerrc');
    this.copy('_.gitignore', '.gitignore');
    this.template('_LICENSE', 'LICENSE');
};
