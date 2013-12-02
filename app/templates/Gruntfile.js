/*global module, require */
/*jshint camelcase: false */

var runGrunt;

module.exports = function (grunt) {
    'use strict';

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
            app: 'app/dist',
            dist: 'cordova/app/www'
        };
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        yeoman: yeomanConfig,
        jshint: {
            gruntfile: {
                src: 'Gruntfile.js'
            }
        },
        copy: {
            dude: {
                expand: true,
                cwd: '<%%= yeoman.app %>',
                src: '**',
                dest: '<%%= yeoman.dist %>'
            }
            
        },
        watch: {
            dude: {
                files: ['app/app/**', 'app/src/**'],
                tasks: ['app:build', 'copy:dude', 'cordova:build', 'cordova:emulate']
            }
        }
    });


    // Default task.
    grunt.registerTask('default', 'Default task', function () {
        grunt.log.writeln(['Run App grunt task using grunt app:x, x is server, build, etc..']);
        grunt.log.writeln(['app:server','app:build']);
        grunt.log.writeln(['------------------------------------------------------------------------']);
        grunt.log.writeln(['Run Cordova grunt task using grunt cordova:x, x is build, emulate, etc..']);
        grunt.log.writeln(['cordova:build','cordova:emulate','cordova:server']);
        grunt.log.writeln(['------------------------------------------------------------------------']);
        grunt.log.writeln(['Run Dude tasks:']);
        grunt.log.writeln(['server, build']);
    });

    
    grunt.registerTask('app', function (target) {
        runGrunt(target, grunt, './app', this.async());
    });
    grunt.registerTask('cordova', function (target) {
        runGrunt(target, grunt, './cordova', this.async());
    });

    
    grunt.registerTask('build', ['app:build', 'copy', 'cordova:build']);
    grunt.registerTask('server', ['app:build', 'copy:dude', 'cordova:build', 'cordova:emulate', 'watch:dude']);
    
    grunt.registerTask('lint', ['jslint']);


};
runGrunt = function (target, grunt, path, done) {
    var options, child;

    options = {
        grunt: true,
        args: [target],
        opts: {cwd: path}
    };

    grunt.log.writeln(['setting cwd:' + path]);
    grunt.log.writeln(['running grunt task :' + target]);
    child = grunt.util.spawn(options, done);

    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function (data) {
        grunt.log.writeln([data]);
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data) {
        grunt.log.writeln([data]);
    });
};

