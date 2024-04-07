# My Project

This project is a **Serverless Progressive Web Application (PWA)** built with **React** and developed using a **Test-Driven Development (TDD)** technique.

In the Meet app, serverless functions will be used to handle requests and responses with the Google Calendar API. When a user wants to view upcoming events, a serverless function will be triggered to fetch this data from the API. This approach allows the Meet app to scale automatically based on demand, as serverless functions run only when they're needed. This means the app can handle a large number of requests during peak times and no resources are wasted when demand is low. Additionally, serverless architecture can help reduce costs and simplify operations, as you don't need to manage any server infrastructure.

## Key Features

- **Serverless:** This means the application can scale automatically and you only pay for what you use. 
- **Progressive Web Application (PWA):** This type of application can work offline, can be installed on a user's device, and progressively improves with the user's device capabilities/network connection.
- **React:** A popular JavaScript library for building user interfaces, especially single page applications.
- **Test-Driven Development (TDD):** A development technique where you must first write a test that fails before you write new functional code.

## Integration

The application integrates with the **Google Calendar API** to fetch upcoming events.

**Serverless provider: AWS Lambda.**


| Feature                        | User Role         | User Action                                                  | User Goal                                                                 |
|--------------------------------|-------------------|--------------------------------------------------------------|---------------------------------------------------------------------------|
| Event Details Visibility       | Event Attendee    | I should be able to show/hide event details                 | I can focus on the information that is most relevant to me                |
| Event Number Specification     | Event Attendee    | I should be able to specify the number of events I want to see | I can manage the amount of information displayed based on my preferences |
| Offline Usage                  | Event Attendee    | I should be able to use the app when offline                | I can access event information even without an internet connection        |
| App Shortcut Addition          | Event Attendee    | I should be able to add an app shortcut to the home screen  | I can quickly access the event app without navigating through other apps  |
| Event Details Visualization    | Event Attendee    | I should be able to display charts visualizing event details | I can easily understand and analyze event data in a graphical format      |

| Role              | Action                                                       | Benefit                                                         |
|-------------------|--------------------------------------------------------------|-----------------------------------------------------------------|
| As an event attendee | I should be able to show/hide event details                 | so that I can focus on the information that is most relevant to me. |
| As an event attendee | I should be able to specify the number of events I want to see | so that I can manage the amount of information displayed based on my preferences. |
| As an event attendee | I should be able to use the app when offline                | so that I can access event information even without an internet connection. |
| As an event attendee | I should be able to add an app shortcut to the home screen  | so that I can quickly access the event app without navigating through other apps. |
| As an event attendee | I should be able to display charts visualizing event details | so that I can easily understand and analyze event data in a graphical format. |
