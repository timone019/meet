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

  test("renders event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test('renders event end time', () => {
    const start = new Date(allEvents[0].start.dateTime).toLocaleTimeString();
    const end = new Date(allEvents[0].end.dateTime).toLocaleTimeString();
    const timeString = `Time: ${start} - ${end}`;
    expect(EventComponent.getByText(timeString)).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    expect(
      EventComponent.container.querySelector(".details")
    ).not.toBeInTheDocument();
  });

  test("show the details section when the user clicks on the 'show details' button", async () => {
    const button = EventComponent.queryByRole("button");
    userEvent.click(button);
    await waitFor(() => {
      const details = EventComponent.container.querySelector(".details");
      expect(details).toBeInTheDocument();
    });
  });

  test("renders event details button with the title (hide details) after click", async () => {
    const button = EventComponent.queryByRole("button");
    userEvent.click(button);
    await waitFor(() => {
      expect(EventComponent.queryByText("Hide details")).toBeInTheDocument();
    });
  });

    test('renders event details when show details button is clicked', async () => {
      const button = EventComponent.getByText('Show details');
      userEvent.click(button);
      await waitFor(() => {
        expect(EventComponent.getByText((content, node) => {
          const hasText = (node) => node.textContent === allEvents[0].description;
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );
          return nodeHasText && childrenDontHaveText;
        })).toBeInTheDocument();
      });
    });
  });