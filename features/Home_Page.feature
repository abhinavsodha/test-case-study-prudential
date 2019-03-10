Feature:Open_Weather_Map_Home_Page
  Narrative: When user lands into the open weather map webpage then he should be able to get the current weather and forecast of a desired city.


  Scenario Outline:verify user is able to see all the important information and navigation links
    Given user is on the home page of open weather map
    Then user is able to see the navigation links <navigationLinks>
    And user is able to see the Sign In and Sign Up links
    And user is able to see the export Button
    And user is able to see the temperature conversion units <temperatuonConversionUnits>
    Examples:
      | navigationLinks                                             | temperatuonConversionUnits |
      | Weather,Maps,Guide,API,Price,Partners,Stations,Widgets,Blog | °C,°F                      |

  Scenario:verify user is able to convert the temperature from celsius to farheneit
    Given user is on the home page of open weather map
    When user clicks on farheneit button
    Then temperature should be displayed in farheneit
