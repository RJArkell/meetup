Feature: Show/hide an event's details

Scenario: An event element is collapsed by default
Given the user has viewed the list of events
When the user looks at the events
Then the event's info should not be shown in detail

Scenario: User can expand an event to see its details
Given the user has chosen an event to look at
When the user clicks on the event
Then the event's info should be shown in detail

Scenario: User can collapse an event to hide its details
Given the user no longer wannted to see a chosen event's details
When the user clicks on the event
Then the event's info should not be shown in detail