import { defineFeature, loadFeature } from "jest-cucumber";
import { render, fireEvent } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let NoeComponent;
  const setCurrentNOE = jest.fn();
  beforeEach(async () => {
    NoeComponent = render(
      <NumberOfEvents currentNOE={32} setCurrentNOE={setCurrentNOE} setErrorAlert={() => {}} />
    );
  });

  test("When user hasn’t specified a number, 32 events are shown by default", ({
    given,
    and,
    when,
    then,
  }) => {
    // Background
    given("the NumberOfEvents component is rendered", () => {});
    // The setup logic to the component loaded is already handled by the beforeEach block

    // Background
    and("the event list is displayed", () => {});
    // The setup logic to display a list of events is already handled by the beforeEach block

    when("the user hasn’t specified a number", () => {
      // No action needed as the user hasn't specified a number
    });

    then("32 events should be shown by default", () => {
      // Check that the current number of events is 32
      expect(NoeComponent.getByDisplayValue("32")).toBeInTheDocument();
    });
  });

  test("User can change the number of events displayed", ({
    given,
    and,
    when,
    then,
  }) => {
    // Background
    given("the NumberOfEvents component is rendered", () => {});
    // The setup logic to the component loaded is already handled by the beforeEach block

    // Background
    and("the event list is displayed", () => {});
    // The setup logic to display a list of events is already handled by the beforeEach block

    when("the user specifies a different number of events to display", () => {
      // Simulate user interaction to change the number of events displayed
      fireEvent.change(NoeComponent.getByDisplayValue("32"), {
        target: { value: "10" },
      });
    });

    then(
      "the events list should update to show the specified number of events",
      () => {
        // Check that the current number of events is now 10
        expect(NoeComponent.getByDisplayValue("10")).toBeInTheDocument();
      }
    );
  });
});
