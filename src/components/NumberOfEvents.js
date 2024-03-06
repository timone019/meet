//src/components/NumberOfEvent.js

import { useState } from "react";
import EventList from "./EventList";

const NumberOfEvents = ({}) => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const handleInputChanged = (event) => {
    setNumberOfEvents(event.target.value);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of events: </label>
      <input
        type="number"
        id="number-of-events-input"
        placeholder="Enter number of events"
        value={numberOfEvents}
        min="1"
        max="32"
        className="number-of-events"
        onChange={handleInputChanged}
      />

    <EventList numberOfEvents={numberOfEvents} />
     
    </div>
  );
};

export default NumberOfEvents;
