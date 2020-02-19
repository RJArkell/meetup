Feature: Specify number of events

Scenario: When the user hasn't specified a number, 32 is the default number
Given the user had not specified the number of events
When the user loads the list of events
Then 32 events should be shown

Scenario: User can change the number of events they want to selects
Given the user wanted to see a certain number of events
When the user selects a certain number of events
Then the chosen number of events are visible