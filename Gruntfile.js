module.exports = function (grunt) {

    grunt.initConfig({

        watch: {

            html: {
                files: ['src/*.html'],
                tasks: ['copy:html']
            }
        },

        connect: {

            server: {

                options: {
                    port: 8081,
                    hostname: "0.0.0.0",
                    base: "dev/",
                    onCreateServer: function (server, connect, options) {

                    }
                }
            }
        },

        copy: {

            dev: {
                files: [
                    {
                        expand: true, 
                        cwd: 'src', 
                        src: ['index.html'], 
                        dest: 'dev/'
                    },
                    {
                        expand: true,
                        cwd: './bower_components/materialize/dist/fonts',
                        src: ['**'],
                        dest: 'dev/fonts'
                    },
                    {
                        expand: true,
                        cwd: './bower_components/materialize/dist/css',
                        src: ['**'],
                        dest: 'dev/css'
                    },
                    {
                        expand: true, 
                        cwd: 'src/app/img', 
                        src: ['**'], 
                        dest: 'dev/img'
                    },
                    {
                        expand: true, 
                        cwd: 'src/app/css', 
                        src: ['style.css'], 
                        dest: 'dev/css'
                    }
                ]
            },

            html: {
                files: [
                    {
                        expand: true, 
                        cwd: 'src', 
                        src: ['index.html'], 
                        dest: 'dev/'
                    }
                ]
            }
        },

        clean: {
            dev: {
                src: ['dev']
            }
        },

        browserify: {

            options: {

                transform: [
                    ['stringify', {
                        appliesTo: { includeExtensions: ['.html']}
                    }],
                    ['babelify', { 'presets': ['es2015'], 'compact' : true }]
                ]
            },


            vendor: {
                src: [],
                dest: 'dev/vendor.js',
                options: {
                    alias: [
                        './bower_components/angular/angular.min.js:angular',
                        './bower_components/angular-ui-router/release/angular-ui-router.min.js:ui-router',
                        './src/vendor/underscore.js:underscore',
                        './bower_components/jquery/dist/jquery.js:jquery',
                        './bower_components/angular-resource/angular-resource.js:ng-resource',
                        './bower_components/angular-materialize/src/angular-materialize.js:angularMaterialize'
                    ]
                }
            },

            watchClient: {

                files: {
                    'dev/client.js': ['src/app/app.module.js']
                },

                options: {

                    browserifyOptions: {
                        debug: true
                    },

                    watch: true,
                    external: [
                        'angular',
                        'ui-router',
                        'underscore',
                        'jquery',
                        'ng-resource',
                        'angularMaterialize'
                    ],

                    alias: {}
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.registerTask('default', [
        'clean:dev', 
        'browserify:vendor',
        'browserify:watchClient', 
        'copy:dev', 
        'connect',
        'watch'
    ]);

};