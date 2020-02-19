import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false
  }
  handleDetails = () => {
    if (!this.state.showDetails) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  }
  render() {
    const event = this.props.event;
    return (
      <div className="Event">
        <div className="eventName">{event.name}</div>
        <div className="eventDate">{event.local_date}</div>
        {event.group && event.group.name && <div className="groupName">{event.group.name}</div>}
        <button className="details" onClick={this.handleDetails}>Details</button>
        {this.state.showDetails &&
          <div className="eventDetails">
            <div className="eventDescription">{event.description}</div>
          </div>
        }
      </div>
    );
  }
}

export default Event;