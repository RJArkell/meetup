import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip, Cell, Line } from "recharts";

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

  getEventData = () => {
    const { event } = this.props;
    const spotsTaken = event.yes_rsvp_count;
    const spotsFree = event.rsvp_limit - spotsTaken;
    return (
      [
        { name: "Attending", value: spotsTaken },
        { name: "Spots Open", value: spotsFree }
      ]
    )
  }



  render() {
    const event = this.props.event;
    let colors = ["#e34542", "#43e06d"]
    return (
      <div className="Event">
        <div className="eventName">{event.name}</div>
        <div className="eventDate">{event.local_date}</div>
        {event.group && event.group.name && <div className="groupName">{event.group.name}</div>}
        <button className="details" onClick={this.handleDetails}>Details</button>
        {this.state.showDetails &&
          <div className="eventDetails">
            <div className="eventDescription" dangerouslySetInnerHTML={{ __html: event.description }} />
            {event.rsvp_limit ? (
              <ResponsiveContainer height={250}>
                <PieChart>
                  <Pie isAnimationActive={false} data={this.getEventData()} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
                    {
                      this.getEventData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                      ))
                    }
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="top" height={30}>
                    <Line name="Attending" type="monotone" dataKey="spotsTaken" stroke="#8884d8" />
                    <Line name="Spots Open" type="monotone" dataKey="spotsFree" stroke="#82ca9d" />
                  </Legend>
                </PieChart>
              </ResponsiveContainer>
            ) : null}
          </div>
        }
      </div>
    );
  }
}

export default Event;