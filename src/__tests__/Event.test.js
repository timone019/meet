// src/__tests__/Event.test.js

import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import { render } from "@testing-library/react";
import { waitFor } from "@testing-library/react";

import Event from "../components/Event";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });

  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("renders event title", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("renders event created date", () => {
    const createdDate = new Date(allEvents[0].created).toUTCString();
    expect(
      EventComponent.queryByText(createdDate)).toBeInTheDocument();
  });

  test("renders event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    expect(
      EventComponent.container.querySelector(".details")
    ).not.toBeInTheDocument();
  });

  test("show the details section when the user clicks on the 'show details' button", async () => {
    //   const user = userEvent.setup();
    const button = EventComponent.queryByRole("button");
    userEvent.click(button);
    await waitFor(() => {
      const details = EventComponent.container.querySelector(".details");
      expect(details).toBeInTheDocument();
    });
  });

  test("renders event details button with the title (hide details) after click", async () => {
    // const user = userEvent.click;
    const button = EventComponent.queryByRole("button");
    userEvent.click(button);
    await waitFor(() => {
      expect(EventComponent.queryByText("Hide details")).toBeInTheDocument();
    });
  });
});
