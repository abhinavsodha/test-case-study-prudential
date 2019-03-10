var homePageObjects = require("../pageObjects/HomePage.js");
var expect = require('chai').expect;
var timeouts = require('../config/TimeOuts.js');
module.exports = function(){

this.Then(/^user is able to see the navigation links (.*)$/,function(expNavigationLinks){
    expNavigationLinks = expNavigationLinks.split(',');
        return homePageObjects.getNavigationLinks().then(function(actNavigationLinks){
            for(var i =0 ; i <expNavigationLinks.length;i++) {
                expect(expNavigationLinks[i],'Navigation link'+expNavigationLinks[i]+'is not displayed').to.eql(actNavigationLinks[i]);
            }
        });

    });

this.Then(/^user is able to see the (.*) and (.*) links$/,function(expSignInBtnLabel,expSignUpBtnLabel){
       return homePageObjects.getSignInBtnLabel().then(function(actSignInBtnLabel){
           return homePageObjects.getSignUpBtnLabel().then(function(actSignUpBtnLabel){
               expect(expSignInBtnLabel.trim(),'Sign In button label is incorrect').to.equal(actSignInBtnLabel.trim());
               return expect(expSignUpBtnLabel.trim(),'Sign Up button label is incorrect').to.equal(actSignUpBtnLabel.trim());
           });
       }) ;
});

this.Then(/^user is able to see the export Button$/,function(){
return homePageObjects.getExportBtnLabel().then(function(actExportBtnLabel){
    return expect(actExportBtnLabel,'Export btn is not displayed').to.equal('Export');
});
});

this.Then(/^user is able to see the temperature conversion units (.*)$/,function(tempConversionUnits) {
    return homePageObjects.getCelsiusBtn().then(function (celsiusBtn) {
        return homePageObjects.getFahrenheitBtn().then(function (fahrenheitBtn) {
            return fahrenheitBtn.getText().then(function (expFahrenheitBtnLabel) {
                return celsiusBtn.getText().then(function (expCelsiusBtnLabel) {
                    expect(expCelsiusBtnLabel, 'Celsius Button label is incorrect').to.equal(tempConversionUnits.split(',')[0].trim());
                    return expect(expFahrenheitBtnLabel, 'Fahrenheit Button label is incorrect').to.equal(tempConversionUnits.split(',')[1].trim());
                });
            });
        });
    });
});

this.When(/^user clicks on farheneit button$/,{timeout:timeouts.stepTimeOut},function(){
   return homePageObjects.getFahrenheitBtn().then(function(fahrenheitBtn){
       fahrenheitBtn.click();
   });
});

this.Then(/^temperature should be displayed in farheneit$/,function(){
return homePageObjects.getDisplayedTempUnit().then(function(temperatureUnit){
   return temperatureUnit.getText().then(function(unit){
       return expect(unit.split(' ')[1],'user is not able to convert temperature to farheneit degree').to.equal('°F');
   }) ;
});
});
};