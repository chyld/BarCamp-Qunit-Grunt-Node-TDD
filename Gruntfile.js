module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    qunit: {
      master: {
        options: {
          urls: ["http://localhost:3333/tests/master.html"]
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 3333,
          hostname: "localhost",
          base: "public"
        }
      }
    },

    watch: {
      tests: {
        files: ["public/**/*.html", "public/**/*.js"],
        tasks: ["qunit"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-qunit");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask("test", ["connect", "watch"]);
  grunt.registerTask("default", ["test"]);
};
