import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventNumber: 32
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ eventNumber: value });


    if (value <= 0) {
      this.setState({
        errorText: 'Number must be at least 1',
      });
    } else {
      this.setState({
        errorText: '',
      })
      this.props.updateEvents(null, null, value);
    }
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        <label>Events Diplayed:  </label>
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