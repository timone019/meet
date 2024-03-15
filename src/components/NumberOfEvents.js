//src/components/NumberOfEvent.js

import { useState } from "react";
import PropTypes from "prop-types";
// import EventList from "./EventList";

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const value = Number(event.target.value);
    if (value >= 1 && value <= 32) {
      setNumberOfEvents(value);
      setCurrentNOE(value);
    } else {
    }
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

NumberOfEvents.propTypes = {
  currentNOE: PropTypes.number.isRequired,
  setCurrentNOE: PropTypes.func.isRequired,
};

export default NumberOfEvents;

