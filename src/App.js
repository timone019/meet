// src/App.js

import EventGenresChart from "./components/EventGenresChart";
import CityEventsChart from "./components/CityEventsChart";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents";
import { extractLocations, getEvents } from "./api";
import { useState, useEffect, useCallback } from "react";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  const fetchData = useCallback(async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(
      filteredEvents.slice(
        0,
        currentNOE !== null && currentNOE !== undefined ? currentNOE : 32
      )
    );
 
    setAllLocations(extractLocations(allEvents));
  }, [currentCity, currentNOE]);

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("you are offline, events are loaded from cache");
    }
    fetchData();
  }, [currentCity, currentNOE, fetchData]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL +"/LinkLogo96px.jpg"} className="App-logo" alt="logo" />
        <h1>The Link</h1>
      </header>

      <main>
      <h2>Pick your city</h2>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
      <div className="charts-container">
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} data-testid="event-list" />
      </main>
    </div>
  );
};

export default App;
