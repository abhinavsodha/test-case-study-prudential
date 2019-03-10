Feature:Open_Weather_Map_Get_City_Weather
Narrative: When user lands into the open weather map webpage then he should be able to get the current weather and forecast of a desired city.


Scenario Outline: verify user is able to get the weather information of searched city
Given user is on the home page of open weather map
When user enter the valid city name <cityName> into the search box
And clicks on the search button
Then city name comma separated with country <cityName> should be displayed in the searched results
And today's temperature <todayTemperature> should be displayed along with range from min to max temperature <temperatureRange>
And wind speed <windSpeed> should be displayed
And clouds percentage <cloudPercentage> should be displayed along with hectopascal measurment <hectopascal>
And geo co-ordinates <geoCoordinates> should be displayed
Examples:
| cityName    |todayTemperature|temperatureRange|windSpeed|cloudPercentage|hectopascal|geoCoordinates    |
|Bangalore,IN |30.6°С          |29 to 31.7 °С   |4.6 m/s  |40 %           |1017 hpa   |[12.9762, 77.6033]|



Scenario Outline: verify error msg is displayed on entering invalid city
Given user is on the home page of open weather map
When user enter the invalid city name <invalidCityName> into the search box
And clicks on the search button
Then error msg <errorMsg> should be displayed
Examples:
| invalidCityName  |errorMsg  |
| xyz              |Not found |