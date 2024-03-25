Feature: Show/Hide Event Details

  Scenario: An event element is collapsed by default
    Given a list of events is displayed
    Then each event element should be collapsed by default

  Scenario: User can expand an event to see details
    Given a list of events is displayed
    When the user clicks on an event show details button
    Then the event details should be shown
  
  Scenario: User can collapse an event to hide details
    Given a list of events with details shown
    When the user clicks on the same event again
    Then the event details should be hidden
