import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(
      <Event event={
        {
          created: 1578410603000,
          duration: 7200000,
          id: '267719029',
          name: 'YSP KW: Starting in Sales ',
          date_in_series_pattern: false,
          status: 'upcoming',
          time: 1582761600000,
          local_date: '2020-02-26',
          local_time: '19:00',
          updated: 1579558019000,
          utc_offset: -18000000,
          waitlist_count: 0,
          yes_rsvp_count: 49,
          venue: {
            id: 26093718,
            name: 'Communitech',
            lat: 43.451377868652344,
            lon: -80.49877166748047,
            repinned: true,
            address_1: '151 Charles St W #100',
            city: 'Kitchener',
            country: 'ca',
            localized_country_name: 'Canada',
            zip: 'N2G 1H6',
            state: 'ON'
          },
          group: {
            created: 1566325014000,
            name: 'Young Sales Professionals KW',
            id: 32638497,
            join_mode: 'open',
            lat: 43.439998626708984,
            lon: -80.43000030517578,
            urlname: 'YSPKWC',
            who: 'Members',
            localized_location: 'Kitchener, ON',
            state: 'ON',
            country: 'ca',
            region: 'en_US',
            timezone: 'Canada/Eastern'
          },
        }
      } />
    );
  });

  test('render event name', () => {
    expect(EventWrapper.find('.eventName')).toHaveLength(1);
  });

  test('render event date', () => {
    expect(EventWrapper.find('.eventDate')).toHaveLength(1);
  });

  test('render group name', () => {
    expect(EventWrapper.find('.groupName')).toHaveLength(1);
  });

  test('render details button', () => {
    expect(EventWrapper.find('.details')).toHaveLength(1);
  });

  test('details should be hidden by default', () => {
    expect(EventWrapper.state('showDetails')).toEqual(false);
  });

  test('click on details button when details are hidden should show details', () => {
    EventWrapper.find('.details').simulate('click');
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

  test('click on details button when details are shown should hide details', () => {
    EventWrapper.find('.details').simulate('click');
    expect(EventWrapper.state("showDetails")).toBe(false);
  });
});