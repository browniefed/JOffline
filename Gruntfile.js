module.exports = function(grunt) {

	grunt.initConfig({
	  nodewebkit: {
	    options: {
	    	version: '0.8.5',
	        build_dir: './builds', // Where the build version of my node-webkit app is saved
	        mac: true, // We want to build it for mac
	        win: true, // We want to build it for win
	        linux32: false, // We don't need linux32
	        linux64: false // We don't need linux64,

	    },
	    src: './app/**/*'// Your node-wekit app
	  },
	  emberTemplates: {
	  	compile: {
			options: {
				templateBasePath: 'app/templates'
			},
			files: {
				'app/js/templates.js' : ['app/templates/*.hbs','app/templates/**/*.hbs']
			}
		}
		},
		watch : {
			build: {
				files: ['app/templates/**/*.hbs', 'app/templates/*.hbs'],
				tasks: ['build'],
				options: {
					debounceDealy: 1000
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-node-webkit-builder');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask( 'default', ['emberTemplates', 'nodewebkit']);
	grunt.registerTask( 'build', ['emberTemplates'])
}
