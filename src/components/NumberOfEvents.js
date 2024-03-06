//src/components/NumberOfEvent.js

import { useState } from "react";
import EventList from "./EventList";

const NumberOfEvents = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  
  return (
    <div id="number-of-events">
      <input
        type="number"
        placeholder="Enter number of events"
        value={numberOfEvents}
        min="1"
        max="32"
        className="number-of-events"
        onChange={(event) => setNumberOfEvents(event.target.value)}
      />

    <EventList numberOfEvents={numberOfEvents} />
     
    </div>
  );
};

export default NumberOfEvents;
