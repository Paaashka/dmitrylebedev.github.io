module.exports = function (grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("build", [
    "less",
    "autoprefixer",
    "cmq",
    "cssmin",
    "csscomb",
    "lintspaces",
    "imagemin",
    "watch"
  ]);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Lint Spaces in code
    lintspaces: {
      all: {
        src: [
          '*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    },

    less: {
      style: {
        files: {
          "css/style.css": ["less/style.less"]
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ["last 2 version", "ie 10"]
      },
      style: {
        src: "css/style.css"
      }
    },

    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
          report: "gzip"
        },
        files: {
          "css/style.min.css": ["css/style.css"]
        }
      }
    },

    cmq: {
      style: {
        files: {
          "css/style.css": ["css/style.css"]
        }
      }
    },

    csscomb: {
      style: {
        expand: true,
        src: ["less/**/*.less"]
      }
    },

    watch: {
      options: {
        livereload: true,
        spawn:false
      },
      style: {
        files: ['less/**/*.less'],
        tasks: ['less'],
      },
      html: {
        files: ['*.html'],
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLebev: 3
        },
        files: [{
          expand: true,
          src: ["img/**/*.{png,jpg,giv,svg}"]
        }]
      }
    }

  });

};


