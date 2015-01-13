'use strict';

/**
 * grunt 文件含义
 * http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
 */
module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    var config = {
        app: 'app',
        dist: 'dist'
    };
    grunt.initConfig({
        config: config,
        watch: {
            staticFile: {
                files: ['<%= config.app %>/scripts/{,*/}*.js'],
                tasks: ['copy']
            }
        },
        /**
         *用于copy文件
         *https://github.com/gruntjs/grunt-contrib-copy/
         */
        copy: {
            staticFile: {
                expand: true,
                dot: true,
                ext:'.html',//替换扩展名
                cwd: '<%= config.app %>',//folder
                dest: '<%= config.dist %>',
                src: '{,*/}*.*'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.dist %>'
                    ]
                }]
            }
        }
    });

    grunt.registerTask('default', [
        'clean',
        'copy'
    ]);
};