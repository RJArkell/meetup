import React, { Component } from 'react';
import { getSuggestions } from './api';
import { InfoAlert, OfflineAlert } from './Alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    offlineText: ''
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
    if (navigator.onLine === false) {
      this.setState({ offlineText: 'App is offline, this is a cached list. Reconnect to internet to refresh.' });
    } else {
      this.setState({ offlineText: '' });
    }
    getSuggestions(value).then(suggestions => {
      this.setState({ suggestions });
      if (value && suggestions.length === 0) {
        this.setState({
          infoText: 'We can not find the city you are looking for. Please try another city',
        });
      } else {
        this.setState({
          infoText: '',
        });
      }
    });
  }

  handleItemClicked = (value, lat, lon) => {
    this.setState({ query: value, suggestions: [] });
    this.props.updateEvents(lat, lon);
  }

  render() {
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <input
          placeholder="Enter city"
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {this.state.suggestions.map(item =>
            <li
              key={item.name_string}
              onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)}>
              {item.name_string}
            </li>
          )}
        </ul>
        <OfflineAlert text={this.state.offlineText} />
      </div>
    );
  }
}

export default CitySearch;