module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      paths: {
          src: {
              js: 'content/*/*.js'
          },
          dest: {
              js: 'dist/main.js',
              jsMin: 'dist/main.min.js'
          }
      },
      concat: {
          js: {
              options: {
                  separator: ';'
              },
              src: '<%= paths.src.js %>',
              dest: '<%= paths.dest.js %>'
          }
      },
      uglify: {
          options: {
              compress: true,
              mangle: true,
              sourceMap: false,
              warnings: false
          },
          target: {
              src: '<%= paths.src.js %>',
              dest: '<%= paths.dest.jsMin %>'
          }
      }
  });


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};