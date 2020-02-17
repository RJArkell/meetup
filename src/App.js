import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <NumberOfEvents />
        <EventList />
      </div>
    );
  }
}

export default App;