// src/__tests__/EventList.test.js

import { render } from "@testing-library/react";
import EventList from "../components/EventList";
import { getEvents } from "../api";

describe("<EventList /> component", () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  })
  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });


  test('renders correct number of events', async () => {
    const allEvents = await getEvents(); 
    EventListComponent.rerender(<EventList events={allEvents} />);
expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });

// test('renders event', () => {
//   EventListComponent.rerender(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4}]} />);
//   expect(EventListComponent.queryByText(allEvents(0).location)).toBeInTheDocument();
// });


});
