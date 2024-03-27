Feature: Show/Hide Event Details

  Background:
    Given the app is open
    And a list of events is displayed

  Scenario: An event element is collapsed by default
    Then each event element should be collapsed by default

  Scenario: User can expand an event to see details
    When the user clicks on an event show details button
    Then the event details should be shown
  
  Scenario: User can collapse an event to hide details
    When the user clicks on an event show details button
    Then the event details should be shown
    And the user clicks on the event hide details button
    Then the event details should be hidden