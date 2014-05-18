module.exports = function (grunt) {

  var config = {

    jshint: {
      options: {
        ignores: ['node_modules/**', 'public/vendor/**', '**/*.min.js'],
        jshintrc: '.jshintrc'
      },
      gruntfile: 'Gruntfile.js',
      server: ['controllers/**/*.js', 'models/**/*.js', 'routes/**/*.js', 'app.js', 'config.js'],
      client: 'public/js/**/*.js'
    },

    concat: {
      css: {
        // add your css files over here to concatenate all css files
        // let's save our site users some bandwith
        files: {
          src: ['public/bower_components/foundation/css/foundation.min.css', 'public/css/app.min.css'],
          dest: 'public/css/app.styles.min.css'
        }
      }
    },

    //?? require.js ??//

    uglify: {
      options: {
        mangle: {
          except: ['jQuery']
        },
        report: 'min'
      },
      dist: {
        files: {
          // add your js files over here to minify them into one javascript source file
          'public/js/app.min.js': [
            'public/bower_components/jquery/dist/jquery.min.js',
            'public/bower_components/foundation/js/foundation.min.js',
            'public/js/app.js'
          ]
        }
      }
    },

    sass: {
      src: {
        options: {
          style: 'compressed',
          require: ['./public/scss/helpers/url64.rb'],
          loadPath: './public/bower_components/foundation/scss/'
        },
        expand: true,
        cwd: 'public/scss',
        src: '**/*.scss',
        dest: 'public/css',
        ext: '.css'
      }
    },

    cssmin: {
      src: {
        files: [{
          expand: true,
          cwd: 'public/css',
          src: '**/*.css',
          dest: 'public/css',
          ext: '.min.css'
        }]
      }
    },

    clean: {
      tests: ['public/css', 'public/js/app.min.js']
    },

    watch: {
      options: {
        nospawn: true,
        livereload: 35729
      },
      all: {
        files: ['public/**/*', 'views/**', '!**/node_modules/**', '!public/vendor/**/*', '!**/*.min.*']
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: 'jshint:gruntfile',
        options: {
          reload: true
        }
      },
      scripts: {
        files: 'public/js/**/*.js',
        tasks: ['jshint:client', 'uglify']
      },
      server: {
        files: '<%= jshint.server %>',
        tasks: ['jshint:server', 'express:web'],
        options: {
          nospawn: true,
          atBegin: true
        }
      },
      scss: {
        files: ['public/scss/**/*.scss'],
        tasks: ['sass', 'cssmin', 'concat:css']
      }
    },

    'node-inspector': {
      default: {},
      custom: {
        options: {
          'web-port': 8081,
          'web-host': 'localhost',
          'debug-port': 5857,
          'save-live-edit': true,
          'stack-trace-limit': 3,
          'hidden': ['node_modules']
        }
      }
    },

    //used to start exprss server and in conjunction with livereload
    express: {
      options: {
        debug: true
      },
      web: {
        options: {
          script: 'app.js'
        }
      }
    },

    concurrent: {
      target: {
        tasks: ['node-inspector:custom', 'watch', 'express:web'],
        options: {
          logConcurrentOutput: true
        }
      }

    }

  };


  // show elapsed time at the end
  require('time-grunt')(grunt);

  grunt.initConfig(config);

  // Load the tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('release', ['clean', 'jshint', 'uglify', 'sass', 'cssmin', 'concat:css']);

  grunt.registerTask('default', ['test', 'release']);

  grunt.registerTask('start', ['concurrent']);

  grunt.loadNpmTasks('grunt-contrib-jasmine');
};
