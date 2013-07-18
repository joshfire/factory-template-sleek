var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};
module.exports = function(grunt) {
    grunt.initConfig({

        clean: {
            server: ['.tmp']
        },
        less: {
            development: {
                options: {
                    yuicompress: false,
                    compress:false

                },
                files: {
                    "../app/css2/style.css" : "../app/less2/boostrap.less"
                }
            }
        },
        watch: {
            files: ["../app/less2/**/*.less"],
            tasks: ["less"],
            options: {
              livereload: true
            }
        },
        connect: {
          options: {
              port: 4000,
              hostname: 'localhost'
          },
          livereload: {
            options: {
              middleware: function (connect) {
                return [
                  lrSnippet,
                  mountFolder(connect, '../app')
                ];
              }
            }
          }
        },
        open: {
          server: {
              path: 'http://localhost:<%= connect.options.port %>/index.phone.html'
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', ['less']);
    grunt.registerTask('compile', ['less']);
    grunt.registerTask('server', function (target) {

        grunt.task.run([
            'clean:server',
            'connect:livereload',
            //'open',
            'watch'
        ]);
    });
};
