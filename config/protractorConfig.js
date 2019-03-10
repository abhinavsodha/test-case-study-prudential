/* jshint undef: true, unused: true */
/* globals exports,require,browser */

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/**/*.feature'],
    cucumberOpts: {
        format: ['json:reports/results.json', 'pretty'],
        require: ['../step_definitions/**/*_Steps.js'],
        tags: ['~@ignore'],
        colors: true,
    },
    allScriptsTimeout:30000,
    getPageTimeout:30000,
    onPrepare: function () {
        browser.manage().window().maximize(); // maximize the browser before executing the feature file
    },
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'https://openweathermap.org/',
    onComplete: function () {
        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: 'bootstrap',
            jsonFile: 'C:\\workspace\\test-case-study-prudential\\reports\\results.json',
            output: 'C:\\workspace\\test-case-study-prudential\\reports\\cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true
        };
        reporter.generate(options);
    }

};