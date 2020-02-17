import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
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