Feature: Specify Number of Events

Background:
  Given the NumberOfEvents component is rendered
  And the event list is displayed

  Scenario: When user hasn’t specified a number, 32 events are shown by default
    When the user hasn’t specified a number
    Then 32 events should be shown by default
  
  Scenario: User can change the number of events displayed
    When the user specifies a different number of events to display
    Then the events list should update to show the specified number of events
