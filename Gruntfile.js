module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        protractor:{
            functional:{
                options:{
                    configFile:"C:\\workspace\\test-case-study-prudential\\config\\protractorConfig.js",
                    keepAlive:true,
                    noColor:true
                }
            }

        }


    });
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.registerTask('default',['protractor:functional']);
};