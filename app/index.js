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


    this.on('end', function () {
        var cwd;
        var cordovaPath;
        var webPath;
        var genCordovaCLI;
        var genWeb;
        var genDude;

        genDude = this;
        cwd = process.cwd();
        cordovaPath = process.cwd() + '/cordova';
        webPath = process.cwd() + '/app';

        this.mkdir(cordovaPath);
        this.mkdir(webPath);

        process.chdir(webPath);
        genWeb = this.env.run('dapp',
            { 'skip-install': true},
            function () {
                console.log('done with web generator');
                process.chdir(cordovaPath);
                genCordovaCLI = this.env.run('cordovacli',
                            { 'skip-install': true},
                            function () {
                                process.chdir(webPath);
                                genWeb.installDependencies({
                                        skipInstall: options['skip-install'],
                                        skipMessage: true,
                                        callback: function () {
                                            process.chdir(cordovaPath);
                                            genCordovaCLI.installDependencies({
                                                skipInstall: options['skip-install'],
                                                skipMessage: true,
                                                callback: function () {
                                                    process.chdir(cwd);
                                                    genDude.installDependencies({
                                                        skipInstall: options['skip-install'],
                                                        bower: false
                                                    });
                                                }
                                            });

                                        }
                                    });
                            });
            });


    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));


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

        cb();
    }.bind(this));
};

DappGenerator.prototype.app = function app() {
    'use strict';

};

DappGenerator.prototype.projectfiles = function projectfiles() {
    'use strict';
    this.copy('editorconfig', '.editorconfig');
    this.copy('_package.json', 'package.json');
    this.template('Gruntfile.js');
    this.copy('_.gitignore', '.gitignore');
};
