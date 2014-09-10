/*
 * (c) Copyright 2014 Rodrigo Alves
 */
module.exports = function (grunt) {
  var sourceFiles = ["afterloader.js"];

  // Project configuration.
  grunt.initConfig({
    my_src_files: ["afterloader.js"],

    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: sourceFiles,
        dest: "dist/<%= pkg.name %>.min.js"
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: sourceFiles,
        dest: "dist/<%= pkg.name %>.js"
      },
    },
    jsonlint: {
      pkg: {
        src: [ "package.json" ]
      },
      bower: {
        src: [ "bower.json" ]
      }
    },
    jshint: {
      all: {
        src: sourceFiles,
        options: {
          jshintrc: true
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("lint", ["jshint"]);
  grunt.registerTask("default", ["uglify"]);
};
