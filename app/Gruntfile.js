module.exports = function(grunt) {

	var gruntConfig = {
		emberTemplates: {
			options: {
				amd: false
			},
			files: {
				'js/templates.js' : ['templates/*.hbs']
			}
		}
	}

	grunt.initConfig(gruntConfig);

	grunt.loadNpmTasks('grunt-ember-templates');


	grunt.registerTask('default', [
		'emberTemplates'
		])
}