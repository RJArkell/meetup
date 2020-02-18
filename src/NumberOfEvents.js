import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventNumber: 32
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ eventNumber: value });
    this.props.updateEvents(null, null, value);
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          className="eventNumberInput"
          type='number'
          onChange={this.handleChange}
          value={this.state.eventNumber}
        />
      </div>
    )
  }
}

export default NumberOfEvents;