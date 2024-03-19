//src/components/Event.js

import { useState } from "react";
import PropTypes from "prop-types";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <h2>{event?.summary}</h2>
      <p>{event?.location}</p>
      <p>{event?.created && new Date(event.created).toLocaleDateString()}</p>
      <p>
        {event?.start?.dateTime &&
          new Date(event.start.dateTime).toLocaleTimeString()} {" "}
        - {" "}
        {event?.end?.dateTime &&
          new Date(event.end.dateTime).toLocaleTimeString()}
      </p>
      {showDetails && (
        <>
          <h4>Event Details</h4>

          <p className="details">{event?.description}</p>
        </>
      )}
      <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide details" : "Show details"}
      </button>
    </li>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    summary: PropTypes.string,
    location: PropTypes.string,
    created: PropTypes.string,
    start: PropTypes.shape({
      dateTime: PropTypes.string,
    }),
    end: PropTypes.shape({
      dateTime: PropTypes.string,
    }),
    description: PropTypes.string,
  }).isRequired,
};

export default Event;
