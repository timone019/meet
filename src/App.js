// src/App.js

import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents";
import { extractLocations, getEvents } from "./api";
import { useState, useEffect, useCallback } from "react";

import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  const fetchData = useCallback(async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter(event => event.location === currentCity);
    setEvents(
      filteredEvents.slice(
        0,
        currentNOE !== null && currentNOE !== undefined ? currentNOE : 32
      )
    );
    // setEvents(filteredEvents.slice(0, currentNOE || 32));
    // setEvents(filteredEvents.slice(0, isNaN(currentNOE) ? 32 : currentNOE));
    setAllLocations(extractLocations(allEvents));
  }, [currentCity, currentNOE]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />
      <EventList events={events} data-testid="event-list" />
    </div>
  );
};

export default App;
