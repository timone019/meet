//src/components/Event.js

import { useState } from "react";
const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
 
    return (
      <li
      className="event">
        <h2>{event?.summary}</h2>
      <p>{event?.location}</p>
      <p>{event?.created && (new Date(event.created)).toUTCString()}</p>
      <p>{event?.endTime}</p>
      {showDetails && <p>{event?.description}</p>}
      <button className="details-btn" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {showDetails && <p className="details">{event?.details}</p>}
      </li>
    );
  }
  
  export default Event;