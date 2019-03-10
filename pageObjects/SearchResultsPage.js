var searchResultsPage = function(){
    var context = this;
    this.invalidCityErrMsg = function(){
        return browser.driver.findElement(By.css('#forecast_list_ul > div'));
    };

    this.getCityNameWithCountryCode = function(){
     return browser.driver.findElement(By.xpath("//div[@id='forecast_list_ul']/table/tbody/tr/td[2]/b/a"));
    };


    this.getWeatherInfo = function(){
        return browser.driver.findElement(By.xpath("//div[@id='forecast_list_ul']/table/tbody/tr/td[2]/p[1]"));
    };

    this.getTodayTemperature = function () {
       return  browser.driver.findElement(By.xpath("//span[@class='badge badge-info']")).then(function(ele){
          return ele.getText().then(function(todayTemp){
             return todayTemp;
          });
      });
    };

    this.getTempRange = function(){
            return context.getWeatherInfo().then(function(weatherInfo){
                return weatherInfo.getText().then(function(weatherInfoTxt){
                    return weatherInfoTxt.split('from')[1].split(',')[0].trim();
                });
            });
    };

    this.getWindSpeed = function(){
      return context.getWeatherInfo().then(function(weatherInfo){
          return weatherInfo.getText().then(function(weatherInfoTxt){
              var windSpeed = weatherInfoTxt.split('wind')[1].split('clouds')[0].trim();
              return windSpeed.substring(0,windSpeed.indexOf('.',2));
          });
      });
    };

    this.getCloudPercentage = function () {
        return context.getWeatherInfo().then(function(weatherInfo){
            return weatherInfo.getText().then(function(weatherInfoTxt) {
                return weatherInfoTxt.split('clouds')[1].trim().split(',')[0].trim();
            });
        });
    };

    this.getHectopascalValue = function(){
        return context.getWeatherInfo().then(function(weatherInfo){
            return weatherInfo.getText().then(function(weatherInfoTxt) {
                return weatherInfoTxt.split(',')[2].trim();
            });
        });
    };

    this.getGeoCoordinates = function() {
      return  browser.driver.findElement(By.xpath('//div[@id=\'forecast_list_ul\']/table/tbody/tr/td[2]/p[2]')).getText().then(function(geoCoordinates){
            return geoCoordinates;
        });
    };
};
module.exports = new searchResultsPage();