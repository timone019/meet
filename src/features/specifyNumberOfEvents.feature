Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number, 32 events are shown by default
    Given the user hasn’t specified a number
    When the events list is displayed
    Then 32 events should be shown by default
  
  Scenario: User can change the number of events displayed
    Given the events list is displayed
    When the user specifies a different number of events to display
    Then the events list should update to show the specified number of events
