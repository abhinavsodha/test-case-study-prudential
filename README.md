# test-case-study-prudential


Step1: In order to install the protractor in  your system you need to follow the steps mentioned in the below url.
https://www.seleniumeasy.com/protractor-angularjs-tutorials/install-protractor

Step2:start the selenium webdriver from commandPrompt using following command:  webdriver-manager start

Step3:Before execution we need to update the path in gruntfile.js and protractorConfig.js.

Inside Grunt file.js update the config file path for current working directory

Example for gruntfile.js 
[configFile:"C:\\workspace\\test-case-study-prudential\\config\\protractorConfig.js"]

Inside protractorConfig file you need to update the path of json file and output property
Example for ProtractorConfig.js
[jsonFile: 'C:\\workspace\\test-case-study-prudential\\reports\\results.json',
output: 'C:\\workspace\\test-case-study-prudential\\reports\\cucumber_report.html']

Step4: install the dependencies in your working directory using npm install command. [It should be run from the directory where package.json is located]

Step5:There are two ways to execute the code:
1. Window Command Prompt:
Navigate to directory where grunt file.js  is located and type below command to execute:
grunt

2. Open the terminal inside webstorm and navigate to the directory where grunt file .js located and exectue the below command
grunt

Once all the tests are executed you can check the html reports in reports folder
