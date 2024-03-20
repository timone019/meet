import Event from "./Event";
import PropTypes from "prop-types";

const EventList = ({ events }) => {
  return (
    <ul id="event-list">
      {events && events.map(event => 
        <Event key={event.id} event={event} />)}
    </ul>
  );
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
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
  })),
};

export default EventList;
