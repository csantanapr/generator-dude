/*jslint nomen: true */
/*global require, module, __dirname, console*/
var util   = require('util');
var path   = require('path');
var yeoman = require('yeoman-generator');
var cprocess     = require('child_process');

var DudeGenerator;
DudeGenerator = module.exports = function DudeGenerator(args, options) {
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
        console.log('Running Generator' + this.webGenerator);
        genWeb = this.env.run(this.webGenerator,
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
                                                        bower: false,
                                                        callback: function () {
                                                            var child;
                                                            console.log('Running Grunt');
                                                            process.chdir(cordovaPath);
                                                            child = cprocess.spawn('grunt', ['cordovacli:cordova']);

                                                            child.stdout.setEncoding('utf8');
                                                            child.stdout.on('data', function (data) {
                                                                console.log(data);
                                                            });

                                                            child.stderr.setEncoding('utf8');
                                                            child.stderr.on('data', function (data) {
                                                                console.error(data);
                                                            });
                                                        }
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

util.inherits(DudeGenerator, yeoman.generators.Base);

DudeGenerator.prototype.askFor = function askFor() {
    'use strict';
    var cb,
        prompts;
    cb = this.async();

    prompts = [{
        type: 'list',
        name: 'webGenerator',
        message: 'Must be already installed globally with npm install -g\nSelect a Web App Generator?',
        choices: [{
                name: 'generator-dapp          (github.com/csantanapr/generator-dapp)',
                value: 'dapp'
            },
            {
                name: 'generator-webapp        (github.com/yeoman/generator-webapp)',
                value: 'webapp'
            },
            {
                name: 'generator-angular       (github.com/yeoman/generator-angular)',
                value: 'angular'
            },
            {
                name: 'generator-mobile        (github.com/yeoman/generator-mobile)',
                value: 'mobile'
            },
            {
                name: 'generator-polymer       (github.com/yeoman/generator-polymer)',
                value: 'polymer'
            },
            {
                name: 'generator-backbone      (github.com/yeoman/generator-backbone)',
                value: 'backbone'
            },
            {
                name: 'generator-jquery-mobile (github.com/bauschan/generator-jquery-mobile)',
                value: 'jquery-mobile'
            }]
        }];


    this.prompt(prompts, function (props) {

        this.webGenerator = props.webGenerator;

        cb();
    }.bind(this));
};

DudeGenerator.prototype.app = function app() {
    'use strict';

};

DudeGenerator.prototype.projectfiles = function projectfiles() {
    'use strict';
    this.copy('editorconfig', '.editorconfig');
    this.copy('_package.json', 'package.json');
    this.template('Gruntfile.js');
    this.copy('_.gitignore', '.gitignore');
};

