import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventNumber: 32
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ eventNumber: value });
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          className="eventNumberInput"
          type='number'
          value={this.state.eventNumber}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default NumberOfEvents;