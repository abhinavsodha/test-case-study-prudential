/* globals module,element,By,browser */
var homePage = function(){

 var context = this;

 this.cityNameSearchBox = function(){
  return browser.driver.findElement(By.xpath("//input[@id='q'][@placeholder='Your city name']"));
 };

 this.searchBtn = function(){
  return browser.driver.findElement(By.xpath("//button[normalize-space(text())='Search']"));
 };

 this.clickSearchBtn = function(){
    return context.searchBtn().then(function(searchBtn){
     return searchBtn.click();
    });
 };

 this.enterCityName = function(cityName){
  return context.cityNameSearchBox().then(function(citySearchBox){
     return citySearchBox.sendKeys(cityName);
  });
 };

 // Below function will get the link text of all navigation links like weather,maps ,Guide etc
 this.getNavigationLinks = function(){
     var actNavigatoinLinksText = [];
     return browser.driver.findElements(By.css('.nav__item > a')).then(function(navigationLinks){
    return navigationLinks.map(function(links){
                return links.getText().then(function(linksLabel){
                    actNavigatoinLinksText.push(linksLabel);
               });
        });
   }).then(function(){
       return actNavigatoinLinksText;
     });

 };

 this.getSignInBtnLabel = function() {
     return browser.driver.findElement(By.xpath('//div[@class=\'col-lg-9 col-md-9 col-sm-9  hidden-xs\']/a[normalize-space(text())=\'Sign In\']')).then(function (ele) {
         return ele.getText().then(function (signInLabel) {
             return signInLabel;
         });
     });
 };
     this.getSignUpBtnLabel = function(){
         return browser.driver.findElement(By.xpath('//div[@class=\'col-lg-9 col-md-9 col-sm-9  hidden-xs\']/a[normalize-space(text())=\'Sign Up\']')).then(function(ele){
             return ele.getText().then(function(signUpLabel){
                 return signUpLabel;
             });
         });
 };

     this.getExportBtnLabel = function(){
       return browser.driver.findElement(By.xpath('//*[text()=\'Export\']')).then(function(ele){
           return ele.getText().then(function(exportBtnLabel){
              return  exportBtnLabel;
           });
       });
     };

     this.getCelsiusBtn = function(){
         return browser.driver.findElement(By.css('#metric'));
     };

     this.getFahrenheitBtn = function(){
         return browser.driver.findElement(By.css('#imperial'));
     };

     this.getDisplayedTempUnit = function(){
       return browser.driver.findElement(By.xpath("//h3[@class='weather-widget__temperature']"));
     };
};
module.exports = new homePage();