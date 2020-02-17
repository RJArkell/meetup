import React, { Component } from 'react';

class Event extends Component {
  state = {
    event: {
      "created": 1578410603000,
      "duration": 7200000,
      "id": "267719029",
      "name": "YSP KW: Starting in Sales ",
      "date_in_series_pattern": false,
      "status": "upcoming",
      "time": 1582761600000,
      "local_date": "2020-02-26",
      "local_time": "19:00",
      "updated": 1579558019000,
      "utc_offset": -18000000,
      "waitlist_count": 0,
      "yes_rsvp_count": 49,
      "venue": {
        "id": 26093718,
        "name": "Communitech",
        "lat": 43.451377868652344,
        "lon": -80.49877166748047,
        "repinned": true,
        "address_1": "151 Charles St W #100",
        "city": "Kitchener",
        "country": "ca",
        "localized_country_name": "Canada",
        "zip": "N2G 1H6",
        "state": "ON"
      },
      "group": {
        "created": 1566325014000,
        "name": "Young Sales Professionals KW",
        "id": 32638497,
        "join_mode": "open",
        "lat": 43.439998626708984,
        "lon": -80.43000030517578,
        "urlname": "YSPKWC",
        "who": "Members",
        "localized_location": "Kitchener, ON",
        "state": "ON",
        "country": "ca",
        "region": "en_US",
        "timezone": "Canada/Eastern"
      },
      "link": "https://www.meetup.com/YSPKWC/events/267719029/",
      "description": "<p>YSP is a P2P networking group for beginner sales professionals in the Waterloo Region.</p> <p>The Topic of this event is Starting in Sales, a panel discussion on how each of our speakers developed their impressive careers starting in a sales role. This is a great opportunity to not only to hear from executives in the KW area but connect with your peers to build a community!</p> <p>Drinks provided sponsored by Descendants Beer &amp; Beverage Co.</p> <p>Our Speakers:<br/>Marko Savic - Chief Executive Officer at FunnelCake<br/>Jacqui Murphy - Chief Marketing Officer at Auvik Networks<br/>Nigel Vanderlinden - Chief Revenue Officer at Plum.io</p> <p>6:30 Open Doors and Mingle<br/>7:00 Panel Discussion<br/>7:45 Facilitated Networking</p> ",
      "visibility": "public",
      "member_pay_fee": false
    },
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
    return (
      <div className="Event">
        <div className="eventName">{this.state.event.name}</div>
        <div className="eventDate">{this.state.event.date}</div>
        <div className="groupName">{this.state.event.group.name}</div>
        <button className="details" onClick={this.handleDetails}>Details</button>
      </div>
    );
  }
}

export default Event;