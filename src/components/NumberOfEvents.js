//src/components/NumberOfEvent.js

import { useState } from "react";
import PropTypes from "prop-types";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const value = Number(event.target.value);
    if (value >= 0 && value <= 32) {
      setNumberOfEvents(value);
      setCurrentNOE(value);
    } else {
    }

    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Only Positive Numbers are allowed."} else {
        errorText = ""
    }
    setErrorAlert(errorText);

  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of events: </label>
      <input
        type="number"
        id="number-of-events-input"
        placeholder="Enter number of events"
        value={numberOfEvents}
        min="0"
        max="32"
        className="number-of-events"
        onChange={handleInputChanged}
      />
    </div>
  );
};

NumberOfEvents.propTypes = {
  currentNOE: PropTypes.number.isRequired,
  setCurrentNOE: PropTypes.func.isRequired,
  setErrorAlert: PropTypes.func.isRequired,
};

export default NumberOfEvents;

