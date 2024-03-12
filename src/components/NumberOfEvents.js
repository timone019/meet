//src/components/NumberOfEvent.js

import { useState } from "react";
// import EventList from "./EventList";

const NumberOfEvents = ({ currentNOE = 0, setCurrentNOE }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const value = Number(event.target.value);
    if (isNaN(value)) {
       // The user has entered an invalid number, so we don't update the state
      return;
    }
    setCurrentNOE(value);
    setNumberOfEvents(value);
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

    {/* <EventList numberOfEvents={numberOfEvents} /> */}
     
    </div>
  );
};

export default NumberOfEvents;
