'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    // Metadata
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
      '* Licensed <%= pkg.licenses[0].type %> */\n',

    coffee: {
      build: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['{,**/}*.coffee'],
          dest: '.tmp',
          ext: '.js'
        }]
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      build: {
        src: '.tmp/*.js',
        dest: '<%= pkg.name %>.js'
      }
    },
    clean: {
      build: {
        src: '.tmp'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      build: {
        src: '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    },
  });

  grunt.registerTask('build', ['clean', 'coffee', 'concat', 'uglify']);

};
