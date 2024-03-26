import { defineFeature, loadFeature } from "jest-cucumber";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../App";

const feature = loadFeature("./src/features/showHideEventDetails.feature");

defineFeature(feature, (test) => {
  let AppComponent;
  beforeEach(async () => {
    await act(async () => {
      AppComponent = render(<App />);
    });
  });
  // Scenario 1
  test("An event element is collapsed by default", ({ given, then }) => {
    given("a list of events is displayed", () => {
      // The setup logic to display a list of events is already handled by the beforeEach block
    });

    then("each event element should be collapsed by default", async () => {
      // Wait for the events to be displayed
      await waitFor(() => {
        // Get all the event elements
        const eventElements = AppComponent.container.querySelectorAll(".event");
        // Check that the details of each event are not visible
        eventElements.forEach((eventElement) => {
          const eventDetails = eventElement.querySelector(".details");
          expect(eventDetails).not.toBeInTheDocument();
        });
      });
    });
  });

  // Scenario 2
  test("User can expand an event to see details", ({ given, when, then }) => {
    let EventComponent;
    given("a list of events is displayed", () => {
      // The setup logic to display a list of events is already handled by the beforeEach block
    });

    when("the user clicks on an event show details button", async () => {
      // Wait for the events to be loaded and rendered
      await waitFor(async() => {
      //   console.log(AppComponent.container.children);

        // Get the third child of the container (EventList)
        const eventList = AppComponent.container.querySelector("#event-list");

        // Check that the event list is not undefined
        expect(eventList).not.toBeUndefined();

        // Get the first event element
        EventComponent = eventList.firstChild;
      });
      // Simulate user clicking on an event
      const button = EventComponent.querySelector(".details-btn");
      fireEvent.click(button);
    });

    then("the event details should be shown", async () => {
      // Wait for the event details to be displayed
      await waitFor(() => {
        // Get the event details
        const eventDetails = EventComponent.lastChild;

        // Check that the event details are visible
        expect(eventDetails).not.toHaveAttribute("hidden");
      });
    });
  });

  // Scenario 3
  test("User can collapse an event to hide details", ({
    given,
    when,
    then,
  }) => {
    given("a list of events with details shown", () => {
      // Implement the setup logic to display a list of events with details shown
    });

    when("the user clicks on the same event again", () => {
      // Simulate user clicking on the same event again
    });

    then("the event details should be hidden", () => {
      // Implement the assertion logic to check if event details are hidden
    });
  });
});
