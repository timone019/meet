import Event from "./Event";
import PropTypes from "prop-types";

const EventList = ({ events }) => {
  return (
    <ul id="event-list">
      {events? events.map(event => 
        <Event key={event.id} event={event} />):null}
    </ul>
  );
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,  
  })).isRequired,
};

export default EventList;
