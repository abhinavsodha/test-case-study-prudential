/*globals module,browser,console,require*/
var homePageObjects = require("../pageObjects/HomePage.js");
var searchResultsPageObjects = require('../pageObjects/SearchResultsPage.js');
var timeouts = require('../config/TimeOuts.js');
var expect = require('chai').expect;
module.exports = function () {

    this.Before(function () {
        browser.waitForAngularEnabled(false);
    });

    this.Given(/^user is on the home page of open weather map$/,{timeout: timeouts.stepTimeOut},function () {
        return browser.driver.get(browser.baseUrl).then(function () {
            console.log('URL successfully Loaded:', browser.baseUrl);
        });
    });

    this.When(/^user enter the valid city name (.*) into the search box$/, function (cityName) {
        return homePageObjects.enterCityName(cityName).then(function () {
        });
    });

    this.When(/^clicks on the search button$/,{timeout: timeouts.stepTimeOut},function () {
        return homePageObjects.clickSearchBtn().then(function () {
        });
    });


    this.Then(/^city name comma separated with country (.*) should be displayed in the searched results$/, function (expCityNameWithCountryCode) {
        return searchResultsPageObjects.getCityNameWithCountryCode().then(function (ele) {
            return ele.getText().then(function (cityNameWithCountryCode) {
                cityNameWithCountryCode = cityNameWithCountryCode.replace(' ', '');
                return expect(cityNameWithCountryCode, 'city Name is not displayed properly in searched result').to.equal(expCityNameWithCountryCode);
            });
        });
    });

    this.Then(/^today's temperature (.*) should be displayed along with range from min to max temperature (.*)$/, function (expTodayTemp, expTempRange) {
        return searchResultsPageObjects.getTodayTemperature().then(function (actTodayTemp) {
            return searchResultsPageObjects.getTempRange().then(function (actTemperatureRange) {
                expect(actTodayTemp, 'Today\'s temperature is not displayed correctly in search result').to.equal(expTodayTemp);
                return expect(actTemperatureRange, 'temp range displayed in searched result is incorrect').to.equal(expTempRange);
            });
        });

    });


    this.Then(/^wind speed (.*) should be displayed$/, function (expWindSpeed) {
        return searchResultsPageObjects.getWindSpeed().then(function(actWindSpeed){
            return expect(actWindSpeed,'Wind speed displayed in searched results is incorrect').to.equal(expWindSpeed);
        });
    });

    this.Then(/^clouds percentage (.*) should be displayed along with hectopascal measurment (.*)$/, function (expCloudPerc,expHectopascalVal) {
        return searchResultsPageObjects.getCloudPercentage().then(function(actCloudPercentage){
            return searchResultsPageObjects.getHectopascalValue().then(function(actHectoPascalValue){
                expect(actCloudPercentage,'Cloud percentage displayed in searched results is incorrect').to.equal(expCloudPerc);
                return expect(actHectoPascalValue,'Cloud percentage displayed in searched results is incorrect').to.equal(expHectopascalVal);
            });

        });
    });

    this.Then(/^geo co-ordinates (.*) should be displayed$/,function(expGeoCoordinates){
            return searchResultsPageObjects.getGeoCoordinates().then(function(actGeoCoordinates){
                return expect(actGeoCoordinates,'Geo coordinates displayed in search result is incorrect').to.equal(expGeoCoordinates);
            });
    });

    this.When(/^user enter the invalid city name (.*) into the search box$/, function (invalidCityName) {
        return homePageObjects.enterCityName(invalidCityName).then(function () {
        });
    });

    this.Then(/^error msg (.*) should be displayed$/, function (errorMsg) {
        return searchResultsPageObjects.invalidCityErrMsg().then(function (actErrorMsg) {
            actErrorMsg.getText().then(function (msg) {
                // formatting error msg
                msg = msg.substr(msg.indexOf("Not")).trim();
                expect(msg, 'invalid city error message is not displayed').to.equal(errorMsg);
            });

        });
    });
};