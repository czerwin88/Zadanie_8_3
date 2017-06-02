module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },

    jshint: {
      all: ['js/*.js'],
      options: {
        force: true
      }
    },

    browserSync: {
      bsFiles: {
        src: ['./css/*.css', './index.html']
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./"
        }
      },
    },

    watch: {
      styles: {
        files: ['sass/*.sass'],
        tasks: ['sass']
      },
      js: {
        files: ['js/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['jshint', 'sass', 'browserSync', 'watch']);

};